import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { ButtonTypes } from '../button';
import { InputTypes } from '../input';
import { SlideInOutAnimation } from './field.animation';

@Component({
  templateUrl: './wrapper.component.html',
  animations: [SlideInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent extends FieldWrapper {
  public InputTypes = InputTypes;
  public ButtonTypes = ButtonTypes;
  public Object = Object;

  constructor() {
    super();
  }

  isType(typeName, type) {
    return Object.values(type).includes(typeName);
  }
}
