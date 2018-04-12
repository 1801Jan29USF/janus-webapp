import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { FormsModule } from '@angular/forms';
import { VpHomeLineGraphService } from '../../services/graph/vp-home-line-graph.service';
import { VpHomeSelectorService } from '../../services/selector/vp-home-selector.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AlertsService } from '../../services/alerts.service';
import { ReportsService } from '../../services/reports.service';
import { ColorService } from '../../services/colors/color.service';
import { VpLineGraphComponent } from './vp-line-graph.component';


xdescribe('VpLineGraphComponent', () => {
  let component: VpLineGraphComponent;
  let fixture: ComponentFixture<VpLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpLineGraphComponent ],
      imports: [
        ChartsModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [
        ColorService,
        VpHomeLineGraphService,
        VpHomeSelectorService,
        AlertsService,
        ReportsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
