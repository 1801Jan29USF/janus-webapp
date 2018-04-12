import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Injectable, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { VpHomePanelGraphService } from '../../services/graph/vp-home-panel-graph.service';
// import { VpHomePanelGraphMockService } from '../../mock/graph/vp-home-panel-graph.mock.service';
import { AlertsService } from '../../services/alerts.service';
import { ReportsService } from '../../services/reports.service';
import { ColorService } from '../../services/colors/color.service';

import { VpPanelGraphComponent } from './vp-panel-graph.component';
import { HomeComponent } from '../../../Assign-Force/home/home.component';
// import { ReportingService } from '../../../services/reporting.service';

xdescribe('VpPanelGraphComponent', () => {
  let component: VpPanelGraphComponent;
  let fixture: ComponentFixture<VpPanelGraphComponent>;

  // beforeEachProviders(() => [TestService]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpPanelGraphComponent ],
      imports: [
        ChartsModule,
        HttpClientModule
      ],
      providers: [
        ColorService,
        VpHomePanelGraphService,
        AlertsService,
        ReportsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpPanelGraphComponent);
    component = fixture.componentInstance;
    // this.vpHomePanelGraphService = fixture.debugElement.injector.get(VpHomePanelGraphService);
    // this.alertsService = fixture.debugElement.injector.get(AlertsService);
    // this.reportsService = fixture.debugElement.injector.get(ReportsService);

    fixture.detectChanges();
  });

  it('should create', () => {
      console.log('VPPANEL COMPONENT STUFF');
      console.log(component);
      console.log('VPPANEL THINGY 1');
      expect(component).toBeDefined('VPPANEL NOT DEFINED');
      console.log('VPPANEL THINGY 2');
      expect(component).toBeTruthy('VPPANEL NOT TRUTHY');

      expect(component).toBeTruthy();
  });
});
