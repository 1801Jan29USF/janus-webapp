import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { TraineeTechSkillsComponent } from './trainee-tech-skills.component';


xdescribe('TraineeTechSkillsComponent', () => {
  let component: TraineeTechSkillsComponent;
  let fixture: ComponentFixture<TraineeTechSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTechSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
