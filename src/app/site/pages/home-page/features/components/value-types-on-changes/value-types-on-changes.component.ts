import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'value-types-on-changes',
  templateUrl: './value-types-on-changes.component.html',
  styleUrls: ['./value-types-on-changes.component.scss'],
})
export class ValueTypesOnChangesComponent implements OnChanges {
  @Input() maxValue: number = 100;
  @Input() minValue: number = 0;

  // her bir input değişiminde bu method tetiklenir.
  // useEffect hook react tarafında benzer bir yapı oluşturuyor.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);

    if (this.maxValue > 100) {
      alert('100 değerini geçemezsiniz');
      this.maxValue = 100;
    }

    if (this.minValue < 0) {
      alert('0 dan küçük değer giremezsiniz');
      this.minValue = 0;
    }
  }
}
