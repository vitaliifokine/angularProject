import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperamentComponent } from './temperament.component';

describe('TemperamentComponent', () => {
  let component: TemperamentComponent;
  let fixture: ComponentFixture<TemperamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
