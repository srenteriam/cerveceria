import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasCervezasComponent } from './nuestras-cervezas.component';

describe('NuestrasCervezasComponent', () => {
  let component: NuestrasCervezasComponent;
  let fixture: ComponentFixture<NuestrasCervezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrasCervezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrasCervezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
