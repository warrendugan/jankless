import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { InputTypes, EnterKeyHints, InputModes, AutoCapitalizationHints } from '.';

@Directive({
  selector: 'input[ui]',
})
export class InputDirective {
  @Input() type: InputTypes = InputTypes.Text;
  @HostBinding('type')
  get _type(): string {
    return this.type;
  }

  @Input() enterKeyHint: EnterKeyHints = EnterKeyHints.Enter;
  @HostBinding('attr.enterkeyhint')
  get _enterKeyHint(): string {
    return this.enterKeyHint;
  }

  @Input() inputMode: InputModes = InputModes.Text;
  @HostBinding('attr.inputmode')
  get _inputMode(): string {
    return this.inputMode;
  }

  @Input() autoCapitalize?: AutoCapitalizationHints = AutoCapitalizationHints.None;
  @HostBinding('autocapitalize')
  get _autoCapitalize(): string {
    return this.autoCapitalize;
  }

  @HostBinding('attr.date-format')
  get dateFormat() {
    if (this.type === InputTypes.Date) return 'mm/dd/yyyy';
  }

  @HostBinding('class')
  get class(): DOMTokenList {
    return this.el.nativeElement.classList.values();
  }

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('input');
  }
}
