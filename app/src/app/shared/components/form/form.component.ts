import { Component, Input } from '@angular/core';
import { InputPropsModel } from '../../models/shared.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() inputProps!: InputPropsModel[];

  public identify(_index: number, item: InputPropsModel) {
    return item.title;
  }
}
