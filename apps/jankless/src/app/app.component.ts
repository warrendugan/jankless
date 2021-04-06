import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonTypes, InputTypes } from '@jankless/ui';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface _$ extends NodeListOf<Element> {
  hide?: any;
  show?: any;
  toggle?: any;
  each?: any;
}
export let $: (arg: string) => _$;

@Component({
  selector: 'jankless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
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
          hideExpression: this.hideName.bind(this),
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
            onClick: this.handleClick.bind(this),
            className: '',
          },
        },
      ],
    },
    {
      type: ButtonTypes.Submit,
      templateOptions: {
        value: 'Submit',
        onClick: this.submit.bind(this),
      },
    },
  ];

  constructor() {}

  ngOnInit() {
    $ = (selector) => {
      return {
        ...document.querySelectorAll(selector),
        hide: this.hide,
        show: this.show,
        toggle: this.toggle,
        each: this.each,
      };
    };
  }

  toggle() {
    Object.entries(this).forEach(([key, value]) => {
      if (+key >= 0) {
        value.classList.toggle('d-none');
      }
    });
  }

  hide() {
    Object.entries(this).forEach(([key, value]) => {
      if (+key >= 0) {
        value.classList.add('d-none');
      }
    });
  }

  show() {
    Object.entries(this).forEach(([key, value]) => {
      if (+key >= 0) {
        value.classList.remove('d-none');
      }
    });
  }

  each(cb: any) {
    Object.entries(this).forEach(([key, value]) => {
      if (+key >= 0) {
        return cb(value);
      }
    });
  }

  handleClick(_event: any) {
    const field = this.form.controls.date;
    field.disabled ? field.enable() : field.disable();
  }

  submit(_event: any) {
    console.log('submit', this.form.getRawValue());
  }

  hideName() {
    return this.form.controls.phone.invalid;
  }
}
