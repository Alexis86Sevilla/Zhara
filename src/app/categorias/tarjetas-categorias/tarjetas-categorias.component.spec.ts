import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCategoriasComponent } from './tarjetas-categorias.component';

describe('TarjetasCategoriasComponent', () => {
  let component: TarjetasCategoriasComponent;
  let fixture: ComponentFixture<TarjetasCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
