import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QualityOverallFeedbackComponent } from './quality-overall-feedback.component';
import { Dependencies } from '../../caliber.test.module';



xdescribe('QualityOverallFeedbackComponent', () => {
  let component: QualityOverallFeedbackComponent;
  let fixture: ComponentFixture<QualityOverallFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityOverallFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
