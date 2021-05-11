import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(250, style({ opacity: 1 }))]),
      transition('* => void', [animate(250, style({ opacity: 0 }))]),
    ]),
  ],
})
export class DialogComponent implements OnInit, OnDestroy {
  @HostBinding('@fade') fade = true;

  private destroy: Subscription[] = [];
  private name = 'DIALOG';
  private windowClicks = fromEvent(this.document, 'click').pipe(
    filter(({ target }) => (target as any).nodeName === this.name),
  );

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.destroy.push(this.windowClicks.subscribe(this.close.bind(this)));
    this.document.body.style.overflow = 'hidden';
  }

  close() {
    this.router.navigate([{ outlets: { modal: null } }]);
  }

  ngOnDestroy() {
    this.destroy.forEach((sub) => sub.unsubscribe());
    this.document.body.style.overflow = 'initial';
  }
}
