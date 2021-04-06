import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'form[ui]',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() fields;
  @Input() form;
  @Input() model;

  constructor() {}
}
