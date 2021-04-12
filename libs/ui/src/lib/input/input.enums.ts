/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/**
 * @description How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is text.
 * @documentation https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export enum InputTypes {
  /**
   * @description A check box allowing single values to be selected/deselected.
   */
  Checkbox = 'checkbox',

  /**
   * @description A control for specifying a color; opening a color picker when active in supporting browsers.
   */
  Color = 'color',

  /**
   * @description A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
   */
  Date = 'date',

  /**
   * @description A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
   */
  DateTimeLocal = 'datetime-local',

  /**
   * @description A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
   */
  Email = 'email',

  /**
   * @description A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
   */
  File = 'file',

  /**
   * @description A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!
   */
  Hidden = 'hidden',

  /**
   * @description A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
   */
  Image = 'image',

  /**
   * @description A control for entering a month and year, with no time zone.
   */
  Month = 'month',

  /**
   * @description A control for entering a number. Displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
   */
  Number = 'number',

  /**
   * @description A single-line text field whose value is obscured. Will alert user if site is not secure.
   */
  Password = 'password',

  /**
   * @description A radio button, allowing a single value to be selected out of multiple choices with the same name value.
   */
  Radio = 'radio',

  /**
   * @description A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
   */
  Range = 'range',

  /**
   * @description A button that resets the contents of the form to default values. Not recommended.
   */
  Reset = 'reset',

  /**
   * @description A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
   */
  Search = 'search',

  /**
   * @description A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
   */
  Tel = 'tel',

  /**
   * @description The default value. A single-line text field. Line-breaks are automatically removed from the input value.
   */
  Text = 'text',

  /**
   * @description A control for entering a time value with no time zone.
   */
  Time = 'time',

  /**
   * @description A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
   */
  Url = 'url',

  /**
   * @description A control for entering a date consisting of a week-year number and a week number with no time zone.
   */
  Week = 'week',
}

/**
 * @description The autocapitalize attribute is an enumerated attribute whose states are the possible autocapitalization hints. The autocapitalization hint specified by the attribute's state combines with other considerations to form the used autocapitalization hint, which informs the behavior of the user agent.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization
 */
export enum AutoCapitalizationHints {
  /**
   * @description The user agent and input method should use make their own determination of whether or not to enable autocapitalization.
   */
  Default = 'default',
  /**
   * @description No autocapitalization should be applied (all letters should default to lowercase).
   */
  None = 'none',
  /**
   * @description The first letter of each sentence should default to a capital letter; all other letters should default to lowercase.
   */
  Sentences = 'sentences',
  /**
   * @description The first letter of each word should default to a capital letter; all other letters should default to lowercase.
   */
  Words = 'words',
  /**
   * @description All letters should default to uppercase.
   */
  Characters = 'characters',
}

/**
 * @description The enterkeyhint content attribute is an enumerated attribute that specifies what action label (or icon) to present for the enter key on virtual keyboards. This allows authors to customize the presentation of the enter key in order to make it more helpful for users.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute
 */
export enum EnterKeyHints {
  /**
   * @description The user agent should present a cue for the operation 'enter', typically inserting a new line.
   */
  Enter = 'enter',
  /**
   * @description The user agent should present a cue for the operation 'done', typically meaning there is nothing more to input and the input method editor (IME) will be closed.
   */
  Done = 'done',
  /**
   * @description The user agent should present a cue for the operation 'go', typically meaning to take the user to the target of the text they typed.
   */
  Go = 'go',
  /**
   * @description The user agent should present a cue for the operation 'next', typically taking the user to the next field that will accept text.
   */
  Next = 'next',
  /**
   * @description The user agent should present a cue for the operation 'previous', typically taking the user to the previous field that will accept text.
   */
  Previous = 'previous',
  /**
   * @description The user agent should present a cue for the operation 'search', typically taking the user to the results of searching for the text they have typed.
   */
  Search = 'search',
  /**
   * @description The user agent should present a cue for the operation 'send', typically delivering the text to its target.
   */
  Send = 'send',
}

/**
 * @description The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content.
 * @documentation https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode
 */
export enum InputModes {
  /**
   * @description The user agent should not display a virtual keyboard. This keyword is useful for content that renders its own keyboard control.
   */
  None = 'none',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale.
   */
  Text = 'text',
  /**
   * @description The user agent should display a virtual keyboard capable of telephone number input. This should including keys for the digits 0 to 9, the "#" character, and the "*" character. In some locales, this can also include alphabetic mnemonic labels (e.g., in the US, the key labeled "2" is historically also labeled with the letters A, B, and C).
   */
  Tel = 'tel',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale, with keys for aiding in the input of URLs, such as that for the "/" and "." characters and for quick input of strings commonly found in domain names such as "www." or ".com".
   */
  Url = 'url',
  /**
   * @description The user agent should display a virtual keyboard capable of text input in the user's locale, with keys for aiding in the input of email addresses, such as that for the "@" character and the "." character.
   */
  Email = 'email',
  /**
   * @description The user agent should display a virtual keyboard capable of numeric input. This keyword is useful for PIN entry.
   */
  Numeric = 'numeric',
  /**
   * @description The user agent should display a virtual keyboard capable of fractional numeric input. Numeric keys and the format separator for the locale should be shown.
   */
  Decimal = 'decimal',
  /**
   * @description The user agent should display a virtual keyboard optimized for search.
   */
  Search = 'search',
}

export const InputPatterns = {
  Email: new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i),
  Url: new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  ),
  Tel: new RegExp(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g),
};

export enum InputPlaceholders {
  Text = 'Enter text here',
  Email = 'Email Address',
  Tel = 'Phone Number',
  Url = 'Enter Url',
  None = '',
  Date = 'Select Date',
}

export enum InputLabels {
  Text = 'Label',
  Email = 'Email Address',
  Tel = 'Phone Number',
  Url = 'Url',
  None = '',
  Date = 'Select Date',
}

export enum InputMasks {
  Tel = '(000) 000-0000',
}

export enum InputErrorMessages {
  Url = 'Please enter a valid URL',
  Email = 'Please enter a valid email address',
  Tel = 'Please enter a valid phone number',
}

/**
 * @description HTML AutoComplete Types
 * @link https://wiki.whatwg.org/wiki/Autocomplete_Types
 */
export enum AutoComplete {
  Off = 'off',
  None = 'off',
  /**
   * @description full name
   */
  Name = 'name',
  /**
   * @description prefix or title (Mr., Mrs. Dr., etc.)
   */
  HonorificPrefix = 'honorific-prefix',
  /**
   * @description given or first name
   */
  GivenName = 'given-name',
  /**
   * @description additional or middle name
   */
  AdditionalName = 'additional-name',
  /**
   * @description additional or middle name initial
   */
  AdditionalNameInitial = 'additional-name-initial',
  /**
   * @description family name, surname, or last name
   */
  FamilyName = 'family-name',
  /**
   * @description suffix (Jr., II, etc.)
   */
  HonorificSuffix = 'honorific-suffix',
  /**
   * @description nickname
   */
  Nickname = 'nickname',
  /**
   * @description full street address condensed into one line
   */
  StreetAddress = 'street-address',
  /**
   * @description first line of street address
   */
  AddressLine1 = 'address-line1',
  /**
   * @description second line of street address
   */
  AddressLine2 = 'address-line2',
  /**
   * @description third line of street address
   */
  AddressLine3 = 'address-line3',
  /**
   * @description locality or city
   */
  Locality = 'locality',
  /**
   * @description same as locality
   */
  City = 'city',
  /**
   * @description administrative area, state, province, or region
   */
  AdministrativeArea = 'administrative-area',
  /**
   * @description same as administrative-area
   */
  State = 'state',
  /**
   * @description same as administrative-area
   */
  Province = 'province',
  /**
   * @description same as administrative-area
   */
  Region = 'region',
  /**
   * @description postal or ZIP code
   */
  PostalCode = 'postal-code',
  /**
   * @description country name
   */
  CountryName = 'country-name',
  /**
   * @description email address
   */
  Email = 'email',
  /**
   * @description full phone number, including country code
   */
  Tel = 'tel',
  /**
   * @description international country code
   */
  TelCountryCode = 'tel-country-code',
  /**
   * @description national phone number: full number minus country code
   */
  TelNational = 'tel-national',
  /**
   * @description area code
   */
  TelAreaCode = 'tel-area-code',
  /**
   * @description local phone number: full number minus country and area codes
   */
  TelLocal = 'tel-local',
  /**
   * @description phone extension number
   */
  TelExtension = 'tel-extension',
  /**
   * @description full fax number, including country code
   */
  Fax = 'fax',
  /**
   * @description international country code
   */
  FaxCountryCode = 'fax-country-code',
  /**
   * @description national fax number: full number minus country code
   */
  FaxNational = 'fax-national',
  /**
   * @description area code
   */
  FaxAreaCode = 'fax-area-code',
  /**
   * @description local fax number: full number minus country and area codes
   */
  FaxLocal = 'fax-local',
  /**
   * @description fax extension number
   */
  FaxExtension = 'fax-extension',
  /**
   * @description full name, as it appears on credit card
   */
  CcName = 'cc-name',
  /**
   * @description credit card number
   */
  CcNumber = 'cc-number',
  /**
   * @description month of expiration of credit card
   */
  CcExpMonth = 'cc-exp-month',
  /**
   * @description year of expiration of credit card (see note 3 below about formatting)
   */
  CcExpYear = 'cc-exp-year',
  /**
   * @description date of expiration of credit card (see note 4 below about formatting)
   */
  CcExp = 'cc-exp',
  /**
   * @description credit card security code
   */
  CcCsc = 'cc-csc',
  /**
   * @description preferred language
   */
  Language = 'language',
  /**
   * @description birthday (see note 4 below about formatting)
   */
  Bday = 'bday',
  /**
   * @description year of birthday (see note 3 below about formatting)
   */
  BdayYear = 'bday-year',
  /**
   * @description month of birthday
   */
  BdayMonth = 'bday-month',
  /**
   * @description day of birthday
   */
  BdayDay = 'bday-day',
  /**
   * @description company or organization
   */
  Org = 'org',
  /**
   * @description user's position or title within company or organization
   */
  OrganizationTitle = 'organization-title',
  /**
   * @description sex or gender
   */
  Sex = 'sex',
  /**
   * @description gender identity
   */
  GenderIdentity = 'gender-identity',
  /**
   * @description Website URL
   */
  Url = 'url',
  /**
   * @description photo or avatar
   */
  Photo = 'photo',
}
