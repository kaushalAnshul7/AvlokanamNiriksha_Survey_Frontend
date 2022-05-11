import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsurveyUserComponent } from './showsurvey-user.component';

describe('ShowsurveyUserComponent', () => {
  let component: ShowsurveyUserComponent;
  let fixture: ComponentFixture<ShowsurveyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsurveyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsurveyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
