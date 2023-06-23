import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomMastersComponent } from './telecom-masters.component';

describe('TelecomMastersComponent', () => {
  let component: TelecomMastersComponent;
  let fixture: ComponentFixture<TelecomMastersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelecomMastersComponent]
    });
    fixture = TestBed.createComponent(TelecomMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
