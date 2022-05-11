import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboutsurveyuserComponent } from './createaboutsurveyuser.component';

describe('CreateaboutsurveyuserComponent', () => {
  let component: CreateaboutsurveyuserComponent;
  let fixture: ComponentFixture<CreateaboutsurveyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaboutsurveyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboutsurveyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
