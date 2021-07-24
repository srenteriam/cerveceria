import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetasComponent } from './targetas.component';

describe('TargetasComponent', () => {
  let component: TargetasComponent;
  let fixture: ComponentFixture<TargetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
