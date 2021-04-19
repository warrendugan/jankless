import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutoCapitalizationHints, ButtonTypes, InputTypes } from '@jankless/ui';
import { FormlyFieldConfig } from '@ngx-formly/core';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Component({
  selector: 'jankless-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly LS_KEY = 'theme';
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

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.themeClass = this.theme;
  }

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

  get theme() {
    return this.userColorScheme || this.preferredColorScheme || Theme.Light;
  }

  set theme(name: Theme) {
    this.userColorScheme = name;
  }

  toggleTheme() {
    this.theme = this.themeClass = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
  }

  set themeClass(name: Theme) {
    this.renderer.removeClass(document.body, Theme.Dark);
    this.renderer.removeClass(document.body, Theme.Light);
    this.renderer.addClass(document.body, name);
  }

  get preferredColorScheme(): Theme {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.Dark;
    }

    return Theme.Light;
  }

  get userColorScheme(): Theme {
    return localStorage.getItem(this.LS_KEY) as Theme;
  }

  set userColorScheme(name: Theme) {
    localStorage.setItem(this.LS_KEY, name);
  }
}
