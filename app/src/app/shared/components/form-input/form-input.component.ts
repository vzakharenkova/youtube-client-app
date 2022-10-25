import { Component, Input } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';
import { FormModel, InputPropsModel } from '../../models/shared.model';

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
    const formField: FormModel = {
      [this.inputProps.title.toLowerCase()]: this.value,
    };
    this.authService.setValue(
      Object.assign(this.inputProps.auth?.getValue() as FormModel, formField),
    );
  }

  constructor(private readonly authService: AuthorizationService) {}
}
