import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroTesteComponent } from './terceiro-teste.component';

describe('TerceiroTesteComponent', () => {
  let component: TerceiroTesteComponent;
  let fixture: ComponentFixture<TerceiroTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
