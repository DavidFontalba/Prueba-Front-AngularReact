import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicPicComponent } from './astronomic-pic.component';

describe('AstronomicPicComponent', () => {
  let component: AstronomicPicComponent;
  let fixture: ComponentFixture<AstronomicPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomicPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
