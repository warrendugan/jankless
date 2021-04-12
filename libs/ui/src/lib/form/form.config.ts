import { FormlyFieldConfig } from '@ngx-formly/core';
import { ButtonTypes } from '../button';
import {
  InputTypes,
  InputPlaceholders,
  InputLabels,
  InputPatterns,
  InputErrorMessages,
  InputMasks,
  InputModes,
  EnterKeyHints,
  AutoComplete,
} from '../input';
import { FieldComponent } from './field.component';
import { WrapperComponent } from './wrapper.component';

const defaultWrapper = 'ui';
const defaultClassName = 'mb-2';
const defaultRequired = true;

export const formConfig = {
  wrappers: [
    {
      name: defaultWrapper,
      component: WrapperComponent,
    },
  ],
  types: [
    {
      name: InputTypes.Text,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Text,
          className: defaultClassName,
          placeholder: InputPlaceholders.None,
          label: InputLabels.None,
          enterKeyHint: EnterKeyHints.Next,
        },
      },
    },
    {
      name: InputTypes.Email,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Email,
          required: defaultRequired,
          className: defaultClassName,
          pattern: InputPatterns.Email,
          placeholder: InputPlaceholders.Email,
          label: InputLabels.Email,
          errorMessage: InputErrorMessages.Email,
          inputMode: InputModes.Email,
          enterKeyHint: EnterKeyHints.Next,
          autoComplete: AutoComplete.Email,
        },
      },
    },
    {
      name: InputTypes.Tel,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Tel,
          required: defaultRequired,
          className: defaultClassName,
          placeholder: InputPlaceholders.Tel,
          label: InputLabels.Tel,
          mask: InputMasks.Tel,
          errorMessage: InputErrorMessages.Tel,
          inputMode: InputModes.Tel,
          enterKeyHint: EnterKeyHints.Next,
          autoComplete: AutoComplete.Tel,
        },
      },
    },
    {
      name: InputTypes.Url,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Url,
          required: defaultRequired,
          className: defaultClassName,
          pattern: InputPatterns.Url,
          placeholder: InputPlaceholders.Url,
          label: InputLabels.Url,
          errorMessage: InputErrorMessages.Url,
          inputMode: InputModes.Url,
          enterKeyHint: EnterKeyHints.Next,
          autoComplete: AutoComplete.Url,
        },
      },
    },
    {
      name: InputTypes.Date,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: InputTypes.Date,
          required: defaultRequired,
          className: defaultClassName,
          label: InputLabels.Date,
          placeholder: InputPlaceholders.Date,
          enterKeyHint: EnterKeyHints.Next,
        },
      },
    },
    {
      name: ButtonTypes.Button,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: ButtonTypes.Button,
        },
      },
    },
    {
      name: ButtonTypes.Submit,
      component: FieldComponent,
      wrappers: [defaultWrapper],
      defaultOptions: {
        templateOptions: {
          type: ButtonTypes.Submit,
        },
        hooks: {
          doCheck: (field: FormlyFieldConfig) => {
            if (field && field.form && field.templateOptions) {
              field.templateOptions.disabled = field.form.invalid;
            }
          },
        },
      },
    },
  ],
};
