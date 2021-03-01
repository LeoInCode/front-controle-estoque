import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCategoriaComponent } from './forms-categoria.component';

describe('FormsCategoriaComponent', () => {
  let component: FormsCategoriaComponent;
  let fixture: ComponentFixture<FormsCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
