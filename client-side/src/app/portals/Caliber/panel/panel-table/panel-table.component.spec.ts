import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { PanelTableComponent } from './panel-table.component';
import { PanelService } from '../../services/panel.service';
import { FeedbackIconComponent } from '../../quality/feedback-icon/feedback-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';

xdescribe('PanelTableComponent', () => {
  let component: PanelTableComponent;
  let fixture: ComponentFixture<PanelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
