import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { TechnicalFeedbackComponent } from './technical-feedback.component';

xdescribe('TechnicalFeedbackComponent', () => {
  let component: TechnicalFeedbackComponent;
  let fixture: ComponentFixture<TechnicalFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
