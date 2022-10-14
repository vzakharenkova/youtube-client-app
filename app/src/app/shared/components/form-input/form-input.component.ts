import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { InputPropsModel } from '../../models/shared.model';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() inputProps!: InputPropsModel;

  value = '';

  onChange(value: string) {
    this.value = value;
    const n: { [x: string]: string } = {
      [this.inputProps.title.toLowerCase()]: this.value,
    };
    this.authService.setValue(
      <BehaviorSubject<{ [x: string]: string }>>this.inputProps.auth,
      Object.assign(this.inputProps.auth?.getValue() as { [x: string]: string }, n),
    );
  }

  constructor(private readonly authService: AuthorizationService) {}
}
