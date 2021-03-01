import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoTesteComponent } from './segundo-teste.component';

describe('SegundoTesteComponent', () => {
  let component: SegundoTesteComponent;
  let fixture: ComponentFixture<SegundoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
