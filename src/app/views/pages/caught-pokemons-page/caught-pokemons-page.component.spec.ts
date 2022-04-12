import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtPokemonsPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: CaughtPokemonsPageComponent;
  let fixture: ComponentFixture<CaughtPokemonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaughtPokemonsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtPokemonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
