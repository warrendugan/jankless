// Angular
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 3rd Party
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NgxMaskModule } from 'ngx-mask';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
// Jankless
import { ButtonDirective } from './button/button.directive';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { FocusTrapDirective } from './focus-trap/focus-trap.directive';
import { FieldComponent } from './form/field.component';
import { FormComponent } from './form/form.component';
import { formConfig } from './form/form.config';
import { WrapperComponent } from './form/wrapper.component';
import { InputDirective } from './input/input.directive';

const DEPENDENCIES = {
  Angular: {
    modules: {
      imports: [CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
      exports: [CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
    },
  },
  ThirdParty: {
    modules: {
      imports: [FormlyModule.forRoot(formConfig as ConfigOption), NgxMaskModule.forRoot()],
      exports: [FormlyModule],
    },
  },
  UI: {
    directives: {
      declarations: [ButtonDirective, InputDirective, FocusTrapDirective],
      exports: [ButtonDirective, InputDirective, FocusTrapDirective],
    },
    components: {
      declarations: [
        FormComponent,
        FieldComponent,
        WrapperComponent,
        CardComponent,
        DialogComponent,
        BottomSheetComponent,
      ],
      exports: [FormComponent, FieldComponent, WrapperComponent, CardComponent, DialogComponent, BottomSheetComponent],
    },
  },
};

@NgModule({
  imports: [...DEPENDENCIES.Angular.modules.imports, ...DEPENDENCIES.ThirdParty.modules.imports],
  declarations: [...DEPENDENCIES.UI.directives.declarations, ...DEPENDENCIES.UI.components.declarations],
  exports: [
    ...DEPENDENCIES.Angular.modules.exports,
    ...DEPENDENCIES.ThirdParty.modules.exports,
    ...DEPENDENCIES.UI.directives.exports,
    ...DEPENDENCIES.UI.components.exports,
  ],
})
export class UiModule {
  static forRoot(): ModuleWithProviders<any>[] {
    return [
      {
        ngModule: UiModule,
        providers: [],
      },
    ];
  }
}
