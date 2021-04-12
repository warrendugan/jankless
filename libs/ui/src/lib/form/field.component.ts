import { Component, ChangeDetectionStrategy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { ButtonTypes } from '../button';
import { InputTypes } from '../input';

@Component({
  templateUrl: './field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FieldComponent,
      multi: true,
    },
  ],
})
export class FieldComponent extends FieldType implements ControlValueAccessor {
  public InputTypes = InputTypes;
  public ButtonTypes = ButtonTypes;
  public Object = Object;
  public formControl!: FormControl;
  onTouched = () => {};
  onChange = (_: any) => {};
  @ViewChild('input', { static: true, read: ElementRef })
  inputElementRef!: ElementRef;

  constructor(private _renderer: Renderer2) {
    super();
  }

  isType(typeName: string | undefined | InputTypes | ButtonTypes, type: typeof InputTypes | typeof ButtonTypes) {
    if (!typeName) return;
    return Object.values(type).includes(typeName);
  }

  onClick($event: unknown) {
    if (!this.to.onClick) return;
    this.to.onClick($event);
  }

  onBlur() {
    this.onTouched();
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: string) {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', value);
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
  }
}
