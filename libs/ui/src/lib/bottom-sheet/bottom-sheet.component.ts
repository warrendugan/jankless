import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { filter } from 'rxjs/internal/operators/filter';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(300, style({ opacity: 1 }))]),
      transition('* => void', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class BottomSheetComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  private destroy: Subscription[] = [];
  private name = 'BOTTOM-SHEET';
  private windowClicks = fromEvent(this.document, 'click').pipe(
    filter(({ target }) => (target as any).nodeName === this.name),
  );
  private get scrollbarOffset(): number {
    return this.el.nativeElement.offsetWidth - this.document.body.clientWidth;
  }

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, private el: ElementRef) {}

  ngOnInit() {
    this.destroy.push(this.windowClicks.subscribe(this.close.bind(this)));
    this.document.body.style.paddingInlineEnd = `${this.scrollbarOffset || 0}px`;
    this.document.body.style.overflow = 'hidden';
  }

  close() {
    this.router.navigate([{ outlets: { sheet: null } }]);
  }

  ngOnDestroy() {
    this.destroy.forEach((sub) => sub.unsubscribe());
    this.document.body.style.paddingInlineEnd = '0px';
    this.document.body.style.overflow = 'initial';
  }
}
