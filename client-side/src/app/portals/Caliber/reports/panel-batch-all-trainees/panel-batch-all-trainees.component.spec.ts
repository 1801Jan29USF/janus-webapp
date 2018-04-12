import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { PanelBatchAllTraineesComponent } from './panel-batch-all-trainees.component';


xdescribe('PanelBatchAllTraineesComponent', () => {
  let component: PanelBatchAllTraineesComponent;
  let fixture: ComponentFixture<PanelBatchAllTraineesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBatchAllTraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
