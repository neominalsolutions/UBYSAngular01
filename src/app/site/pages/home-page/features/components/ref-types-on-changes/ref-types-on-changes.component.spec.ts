import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefTypesOnChangesComponent } from './ref-types-on-changes.component';

describe('RefTypesOnChangesComponent', () => {
  let component: RefTypesOnChangesComponent;
  let fixture: ComponentFixture<RefTypesOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefTypesOnChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefTypesOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
