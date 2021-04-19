// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd Party
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NgxMaskModule } from 'ngx-mask';

// Jankless
import { ButtonDirective } from './button/button.directive';
import { InputDirective } from './input/input.directive';
import { FormComponent } from './form/form.component';
import { FieldComponent } from './form/field.component';
import { formConfig } from './form/form.config';
import { WrapperComponent } from './form/wrapper.component';

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
      declarations: [ButtonDirective, InputDirective],
      exports: [ButtonDirective, InputDirective],
    },
    components: {
      declarations: [FormComponent, FieldComponent, WrapperComponent],
      exports: [FormComponent, FieldComponent, WrapperComponent],
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
