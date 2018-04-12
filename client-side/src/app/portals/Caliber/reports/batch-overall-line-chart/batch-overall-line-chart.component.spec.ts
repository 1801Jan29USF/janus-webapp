import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';

import { BatchOverallLineChartComponent } from './batch-overall-line-chart.component';

xdescribe('BatchOverallLineChartComponent', () => {
  let component: BatchOverallLineChartComponent;
  let fixture: ComponentFixture<BatchOverallLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchOverallLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
