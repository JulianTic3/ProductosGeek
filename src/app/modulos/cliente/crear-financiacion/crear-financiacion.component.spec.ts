import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFinanciacionComponent } from './crear-financiacion.component';

describe('CrearFinanciacionComponent', () => {
  let component: CrearFinanciacionComponent;
  let fixture: ComponentFixture<CrearFinanciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFinanciacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFinanciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
