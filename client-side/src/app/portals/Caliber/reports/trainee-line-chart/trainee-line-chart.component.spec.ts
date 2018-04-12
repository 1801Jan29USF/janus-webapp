import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { TraineeLineChartComponent } from './trainee-line-chart.component';

xdescribe('TraineeLineChartComponent', () => {
  let component: TraineeLineChartComponent;
  let fixture: ComponentFixture<TraineeLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
