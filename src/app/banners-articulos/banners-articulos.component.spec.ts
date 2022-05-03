import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersArticulosComponent } from './banners-articulos.component';

describe('BannersArticulosComponent', () => {
  let component: BannersArticulosComponent;
  let fixture: ComponentFixture<BannersArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
