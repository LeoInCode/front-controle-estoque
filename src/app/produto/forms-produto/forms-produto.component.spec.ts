import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsProdutoComponent } from './forms-produto.component';

describe('FormsProdutoComponent', () => {
  let component: FormsProdutoComponent;
  let fixture: ComponentFixture<FormsProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
