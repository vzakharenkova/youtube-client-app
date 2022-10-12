import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  type!: string;

  constructor() {}

  ngOnInit(): void {}
}
