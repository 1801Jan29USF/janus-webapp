import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependencies } from '../../caliber.test.module';
import { AllCumulativeScoresComponent } from './all-cumulative-scores.component';


xdescribe('AllCumulativeScoresComponent', () => {
  let component: AllCumulativeScoresComponent;
  let fixture: ComponentFixture<AllCumulativeScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCumulativeScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AllCumulativeScoresComponent,
  //       GraphComponent,
  //       TableComponent,
  //       GraphDataPipe
  //     ],
  //     imports: [
  //       HttpClientModule,
  //       ChartsModule
  //     ],
  //     providers: [
  //       ReportingService,
  //       PDFService,
  //       GranularityService
  //     ]
  //   })
  //   .compileComponents();
  // }));
