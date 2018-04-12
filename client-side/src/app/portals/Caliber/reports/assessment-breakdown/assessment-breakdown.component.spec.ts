import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from './../../caliber.test.module';
import { AssessmentBreakdownComponent } from './assessment-breakdown.component';

xdescribe('AssessmentBreakdownComponent', () => {
  let component: AssessmentBreakdownComponent;
  let fixture: ComponentFixture<AssessmentBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
