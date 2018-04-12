import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAuditComponent } from './weekly-audit.component';
import { Dependencies } from '../../caliber.test.module';


xdescribe('WeeklyAuditComponent', () => {
  let component: WeeklyAuditComponent;
  let fixture: ComponentFixture<WeeklyAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
