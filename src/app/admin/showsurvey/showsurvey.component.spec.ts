import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsurveyComponent } from './showsurvey.component';

describe('ShowsurveyComponent', () => {
  let component: ShowsurveyComponent;
  let fixture: ComponentFixture<ShowsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
