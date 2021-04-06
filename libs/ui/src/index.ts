import 'date-input-polyfill';
import { ButtonTypes } from './lib/button';
import { InputTypes } from './lib/input';
export * from './lib/ui.module';
export * from './lib/input';
export * from './lib/button';
export * from './lib/form';

export const exampleForm = [
  {
    fieldGroupClassName: 'row',
    template: '<h2 class="my-5">Basic Information</h2>',
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'email',
        className: 'col-12 col-md-6',
        type: InputTypes.Email,
        defaultValue: 'warrendugan@gmail.com',
      },
      {
        key: 'name',
        className: 'col-12 col-md-6',
        type: InputTypes.Text,
        defaultValue: 'Warren Dugan',
        templateOptions: {
          required: true,
          label: 'Name',
          placeholder: 'Enter Name',
          errorMessage: 'Please enter your name',
        },
      },
      {
        key: 'phone',
        className: 'col-12 col-md-6',
        type: InputTypes.Tel,
        defaultValue: '9495734825',
      },
    ],
  },
  {
    fieldGroupClassName: 'row',
    template: '<hr label="try the date toggle">',
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'date',
        type: InputTypes.Date,
        className: 'col-12 col-md-6',
        templateOptions: {
          disabled: true,
        },
      },
      {
        type: ButtonTypes.Button,
        className: 'col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0',
        templateOptions: {
          value: 'toggle date field',
          className: '',
        },
      },
    ],
  },
  {
    type: ButtonTypes.Submit,
    templateOptions: {
      value: 'Submit',
    },
  },
];
