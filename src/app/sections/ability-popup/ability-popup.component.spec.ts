import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityPopupComponent } from './ability-popup.component';

describe('AbilityPopupComponent', () => {
  let component: AbilityPopupComponent;
  let fixture: ComponentFixture<AbilityPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
