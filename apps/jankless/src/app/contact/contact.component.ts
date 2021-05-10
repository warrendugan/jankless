import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutoCapitalizationHints, ButtonTypes, InputTypes } from '@jankless/ui';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'jankless-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      template: '<h2 class="my-4">Basic Information</h2>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'email',
          className: 'col-12 col-md-6',
          type: InputTypes.Email,
        },
        {
          key: 'phone',
          className: 'col-12 col-md-6',
          type: InputTypes.Tel,
        },
        {
          key: 'name',
          className: 'col-12 col-md-6',
          type: InputTypes.Text,
          hideExpression: this.hideName.bind(this),
          templateOptions: {
            required: true,
            label: 'Name',
            placeholder: 'Enter Name',
            errorMessage: 'Please enter your name',
            autoCapitalize: AutoCapitalizationHints.Words,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      template: '<hr aria-label="Try the date toggle">',
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
          },
        },
      ],
    },
    {
      type: ButtonTypes.Submit,
      templateOptions: {
        onClick: this.submit.bind(this),
      },
    },
  ];

  handleClick() {
    const field = this.form.controls.date;
    field.disabled ? field.enable() : field.disable();
  }

  submit() {
    alert(`Hello ${this.form.controls.name.value}`);
  }

  hideName() {
    return this.form.controls.phone.invalid;
  }
}
