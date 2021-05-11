import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[focusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  private $ = this.el.nativeElement;
  private get inputs(): any[] {
    return this.$.querySelectorAll('a[href], button, textarea, input, select');
  }
  private get focus(): any[] {
    return Array.from(this.inputs).filter((el: any) => !el.disabled);
  }
  private get first(): any {
    return this.focus[0];
  }
  private get last(): any {
    return this.focus[this.focus.length - 1];
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.trapFocus();
  }

  trapFocus() {
    if (!this.inputs) return;
    if (!this.focus.length) return;

    this.first.focus();

    this.renderer.listen(this.$, 'keydown', (e) => {
      const isTabPressed = e.keyCode === 9;
      if (!isTabPressed) return;

      if (e.shiftKey) {
        if (document.activeElement === this.first) {
          this.last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === this.last) {
          this.first.focus();
          e.preventDefault();
        }
      }
    });
  }
}
