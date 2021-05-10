import { Directive, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonTypes } from './button.enums';

@Directive({
  selector: 'button',
})
export class ButtonDirective extends RouterLink {
  @HostBinding('type')
  @Input('type')
  public type: ButtonTypes | string | undefined = ButtonTypes.Button;

  @HostBinding('toggle')
  @Input('toggle')
  public toggle?: Boolean | undefined | '';
}
