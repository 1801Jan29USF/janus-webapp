import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessComponent } from './assess.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from '../services/batch.service';
import { AssessmentService } from '../services/assessment.service';
import { GradeService } from '../services/grade.service';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CategorySkillPipe } from '../pipes/category-skill.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../services/alerts.service';
import { Dependencies } from '../caliber.test.module';


xdescribe('AssessComponent', () => {
  let component: AssessComponent;

  let fixture: ComponentFixture<AssessComponent>;
  // let modalService: ComponentFixture<AssessComponent>;
  // let batchService: ComponentFixture<AssessComponent>;
  // let assessmentService: ComponentFixture<AssessComponent>;
  // let gradeService: ComponentFixture<AssessComponent>;
  // let categoryService: ComponentFixture<AssessComponent>;
  // let noteService: ComponentFixture<AssessComponent>;
  // let fb: ComponentFixture<AssessComponent>;
  // let datePipe: ComponentFixture<AssessComponent>;
  // let categorySkill: ComponentFixture<AssessComponent>;
  // let alertsService: ComponentFixture<AssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessComponent);
    component = fixture.componentInstance;
    console.log(component);
    // this.modalService = fixture.debugElement.injector.get(NgbModule.forRoot());
    // this.assessmentService = fixture.debugElement.injector.get(AssessmentService);
    // this.batchService = fixture.debugElement.injector.get(BatchService);
    // this.gradeService = fixture.debugElement.injector.get(GradeService);
    // this.categoryService = fixture.debugElement.injector.get(CategoryService);
    // this.noteService = fixture.debugElement.injector.get(NoteService);
    // this.categorySkill = fixture.debugElement.injector.get(CategorySkillPipe);
    // this.alertsService = fixture.debugElement.injector.get(AlertsService);
    // this.fb = fixture.debugElement.injector.get(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
