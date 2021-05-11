import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[focusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  private $ = this.el.nativeElement;
  private get focus(): Node[] {
    return Array.from(this.$.querySelectorAll('a[href], button, textarea, input, select') as NodeList).filter(
      (el: any) => !el.disabled,
    );
  }
  private get first(): HTMLInputElement {
    return this.focus[0] as HTMLInputElement;
  }
  private get last(): HTMLInputElement {
    return this.focus[this.focus.length - 1] as HTMLInputElement;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.first.focus();
    this.renderer.listen(this.$, 'keydown', (e) => {
      if (e.keyCode !== 9) return;

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
