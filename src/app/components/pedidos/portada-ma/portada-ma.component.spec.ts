import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaMAComponent } from './portada-ma.component';

describe('PortadaMAComponent', () => {
  let component: PortadaMAComponent;
  let fixture: ComponentFixture<PortadaMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
