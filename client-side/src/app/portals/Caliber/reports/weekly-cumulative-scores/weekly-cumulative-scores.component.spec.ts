import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCumulativeScoreComponent } from './weekly-cumulative-scores.component';
import { Dependencies } from '../../caliber.test.module';


xdescribe('WeeklyCumulativeScoreComponent', () => {
  let component: WeeklyCumulativeScoreComponent;
  let fixture: ComponentFixture<WeeklyCumulativeScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyCumulativeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
