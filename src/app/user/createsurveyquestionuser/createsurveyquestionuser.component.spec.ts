import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesurveyquestionuserComponent } from './createsurveyquestionuser.component';

describe('CreatesurveyquestionuserComponent', () => {
  let component: CreatesurveyquestionuserComponent;
  let fixture: ComponentFixture<CreatesurveyquestionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesurveyquestionuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesurveyquestionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
