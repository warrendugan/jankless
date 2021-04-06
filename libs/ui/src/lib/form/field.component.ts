import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { ButtonTypes } from '../button';
import { InputTypes } from '../input';

@Component({
  templateUrl: './field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent extends FieldType {
  public InputTypes = InputTypes;
  public ButtonTypes = ButtonTypes;
  public Object = Object;

  constructor() {
    super();
  }

  isType(typeName, type) {
    return Object.values(type).includes(typeName);
  }

  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
