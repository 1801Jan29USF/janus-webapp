import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// services
import { BatchService } from '../services/batch.service';
import { TrainingTypeService } from '../services/training-type.service';
import { SkillService } from '../services/skill.service';
import { LocationService } from '../services/location.service';
import { TrainerService } from '../services/trainer.service';
import { TraineeService } from '../services/trainee.service';
import { TraineeStatusService } from '../services/trainee-status.service';
import { AlertsService } from '../services/alerts.service';

import { ApiService } from '../util/api.service';
import { AddressToStringPipe } from '../pipes/address-to-string.pipe';
import { DisplayBatchByYear } from '../pipes/display-batch-by-year.pipe';

import { BatchModalComponent } from './batch/batch-modal.component';
import { CannotDeleteModalComponent } from './cannot-delete-modal/cannot-delete-modal.component';
import { DeleteBatchModalComponent } from './delete-batch-modal/delete-batch-modal.component';

import { ManageComponent } from './manage.component';
// import * as Dep from './manage.component';
import { Dependencies } from '../caliber.test.module';

<<<<<<< HEAD
describe('ManageComponent', () => {
<<<<<<< HEAD
=======
=======
xdescribe('ManageComponent', () => {

>>>>>>> 1808-bam-dev
>>>>>>> master
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
