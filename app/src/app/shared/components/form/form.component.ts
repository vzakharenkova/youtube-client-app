import { Component, Input, OnInit } from '@angular/core';
import { InputPropsModel } from '../../models/shared.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() inputProps!: InputPropsModel[];

  constructor() {}

  ngOnInit(): void {}
}
