import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityTreeComponent } from './ability-tree.component';

describe('AbilityTreeComponent', () => {
  let component: AbilityTreeComponent;
  let fixture: ComponentFixture<AbilityTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
