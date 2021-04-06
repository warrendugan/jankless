import { FormlyFieldConfig } from '@ngx-formly/core';
import { ButtonTypes } from '../button';
import { InputTypes, InputPlaceholders, InputLabels, InputPatterns, InputErrorMessages, InputMasks } from '../input';
import { FieldComponent } from './field.component';
import { WrapperComponent } from './wrapper.component';

const wrapper = 'ui';
const defaultClassName = 'mb-2';

export const formConfig = {
  wrappers: [
    {
      name: wrapper,
      component: WrapperComponent,
    },
  ],
  types: [
    {
      name: InputTypes.Text,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Text,
          className: defaultClassName,
          placeholder: InputPlaceholders.None,
          label: InputLabels.None,
        },
      },
    },
    {
      name: InputTypes.Email,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Email,
          required: true,
          className: defaultClassName,
          pattern: InputPatterns.Email,
          placeholder: InputPlaceholders.Email,
          label: InputLabels.Email,
          errorMessage: InputErrorMessages.Email,
        },
      },
    },
    {
      name: InputTypes.Tel,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Tel,
          required: true,
          className: defaultClassName,
          placeholder: InputPlaceholders.Tel,
          label: InputLabels.Tel,
          mask: InputMasks.Tel,
          errorMessage: InputErrorMessages.Tel,
        },
      },
    },
    {
      name: InputTypes.Url,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Url,
          required: true,
          className: defaultClassName,
          pattern: InputPatterns.Url,
          placeholder: InputPlaceholders.Url,
          label: InputLabels.Url,
          errorMessage: InputErrorMessages.Url,
        },
      },
    },
    {
      name: InputTypes.Date,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Date,
          required: true,
          className: defaultClassName,
          label: InputLabels.Date,
          placeholder: InputPlaceholders.Date,
        },
      },
    },
    {
      name: ButtonTypes.Button,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: ButtonTypes.Button,
        },
      },
    },
    {
      name: ButtonTypes.Submit,
      component: FieldComponent,
      wrappers: [wrapper],
      defaultOptions: {
        templateOptions: {
          type: ButtonTypes.Submit,
        },
        hooks: {
          doCheck: (field: FormlyFieldConfig) => {
            field.templateOptions.disabled = field.form.invalid;
          },
        },
      },
    },
  ],
};
