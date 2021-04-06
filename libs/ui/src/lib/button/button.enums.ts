/**
 * @description How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is text.
 * @documentation https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export enum ButtonTypes {
  /**
   * @description A push button with no default behavior displaying the value of the value attribute, empty by default.
   */
  Button = 'button',
  /**
   * @description A button that submits the form.
   */
  Submit = 'submit',
}
