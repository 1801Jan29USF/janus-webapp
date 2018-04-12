import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { PanelFeedbackComponent } from './panel-feedback.component';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { GranularityService } from '../services/granularity.service';
import { PanelService } from '../../services/panel.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';

xdescribe('PanelFeedbackComponent', () => {
  let component: PanelFeedbackComponent;
  let fixture: ComponentFixture<PanelFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
