import { Directive, HostBinding, Input } from '@angular/core';
import { ButtonTypes } from './button.enums';

@Directive({
  selector: 'button',
})
export class ButtonDirective {
  @HostBinding('type')
  @Input('type')
  public type: ButtonTypes | string | undefined = ButtonTypes.Button;

  @HostBinding('toggle')
  @Input('toggle')
  public toggle?: Boolean | undefined | '';
}
