import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit, OnDestroy {
  @ViewChild('content') _: any;
  public windowClicks = fromEvent(document, 'click').pipe(
    filter((click) => {
      console.log(click);
      return click.type === 'click';
    }),
  );
  private destroy: Subscription[] = [];

  constructor() {}

  @HostBinding('tabindex') tabindex = '-1';
  @HostBinding('role') role = 'dialog';

  handleClick(event: any) {
    if (event.type === 'click') {
      console.log(event.toElement);
      console.log(this._);
    }
  }

  ngOnInit() {
    this.destroy.push(this.windowClicks.subscribe(this.handleClick));
  }

  ngOnDestroy() {
    this.destroy.forEach((sub) => sub.unsubscribe());
  }
}
