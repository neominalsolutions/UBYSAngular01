import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ref-types-on-changes',
  templateUrl: './ref-types-on-changes.component.html',
  styleUrls: ['./ref-types-on-changes.component.scss'],
})
export class RefTypesOnChangesComponent implements OnChanges {
  @Input() names: Array<string> = [];
  @Input() currentUser!: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('chnages', changes);

    console.log('listenin önceki değeri', changes['names'].previousValue);

    console.log('listenin güncel değeri', changes['names'].currentValue);

    console.log('currentUser', changes['currentUser'].currentValue);
  }
}
