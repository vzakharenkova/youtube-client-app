import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateCustomUserCards } from 'src/app/redux/actions/app.actions';
import { VideoListStateModel } from 'src/app/redux/state.models';
import { CustomCardModel } from '../models/customCard.model';

@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.scss'],
})
export class CardCreatorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private store: Store<VideoListStateModel>) {}

  public cardCreationForm!: FormGroup;

  public isCreated = false;

  ngOnInit() {
    this.initForm();
  }

  get _videoTitle() {
    return this.cardCreationForm.get('videoTitle');
  }

  get _videoDescription() {
    return this.cardCreationForm.get('videoDescription');
  }

  get _videoImg() {
    return this.cardCreationForm.get('videoImg');
  }

  get _videoLink() {
    return this.cardCreationForm.get('videoLink');
  }

  get _creationDate() {
    return this.cardCreationForm.get('creationDate');
  }

  private initForm() {
    this.cardCreationForm = this.formBuilder.group({
      videoTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      videoDescription: [null, [Validators.maxLength(255)]],
      videoImg: [
        null,
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      ],
      videoLink: [
        null,
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      ],
      creationDate: [null, [Validators.required, this.dateValidator()]],
    });
  }

  private dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let currentDate = Date.now();
      let valid = currentDate < new Date(control.value).getTime();
      return valid ? null : { invalidDate: true };
    };
  }

  public addErrorStyle(target: AbstractControl<any, any> | null) {
    return target?.invalid && (target?.touched || target?.dirty) ? { border: 'red 1px solid' } : {};
  }

  public onSubmit(e: Event) {
    e.preventDefault();

    const customCard: CustomCardModel = {
      title: this._videoTitle?.value,
      description: this._videoDescription?.value,
      imgLink: this._videoImg?.value,
      videoLink: this._videoLink?.value,
      creationDate: this._creationDate?.value,
    };

    this.isCreated = true;
    this.store.dispatch(updateCustomUserCards({ customCard }));
    this.cardCreationForm.reset();
    setTimeout(() => (this.isCreated = false), 2000);
  }
}
