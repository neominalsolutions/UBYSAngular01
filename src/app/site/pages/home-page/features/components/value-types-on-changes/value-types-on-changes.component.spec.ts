import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTypesOnChangesComponent } from './value-types-on-changes.component';

describe('NumericRangeComponent', () => {
  let component: ValueTypesOnChangesComponent;
  let fixture: ComponentFixture<ValueTypesOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueTypesOnChangesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValueTypesOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
