import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card[ui]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @HostBinding('class.border') @Input() border = true;
  @HostBinding('class.rounded') @Input() rounded = true;

  constructor() {}

  ngOnInit(): void {}
}
