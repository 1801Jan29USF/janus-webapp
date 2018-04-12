import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyGradesComponent } from './weekly-grades.component';
import { Dependencies } from '../../caliber.test.module';


xdescribe('WeeklyGradesComponent', () => {
  let component: WeeklyGradesComponent;
  let fixture: ComponentFixture<WeeklyGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
