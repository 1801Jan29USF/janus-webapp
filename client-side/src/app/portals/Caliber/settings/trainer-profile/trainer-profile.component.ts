import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainerService } from '../../../../hydra-client/services/trainer/trainer.service';
import { HydraTrainer } from '../../../../hydra-client/entities/HydraTrainer';
import { HydraBatchService } from '../../../../hydra-client/services/batch/hydra-batch.service';
import { HydraBatch } from '../../../../hydra-client/entities/HydraBatch';
import { HydraTrainee } from '../../../../hydra-client/entities/HydraTrainee';
import { HydraTraineeService } from '../../../../hydra-client/services/trainee/hydra-trainee.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfilesComponent implements OnInit {

  /**
  * create variables for all batches,
  * current trainer and their batch
  */
  currentTrainer: HydraTrainer;
  batches: Array<HydraBatch>;
  currentBatch: HydraBatch;
  currentBatchTrainees: Array<HydraTrainee>;

  /**
  * create variables for subscribing and trainers
  * and storing form data
  */
  trainers: Array<HydraTrainer>;
  titles: Array<any>;
  roles: Array<any>;
  model = new HydraTrainer();
  currEditTrainer: HydraTrainer;
  newRole: string;
  newTitle: string;
  rForm: FormGroup;

  constructor(private trainerService: TrainerService, private modalService: NgbModal,
    private batchService: HydraBatchService, private router: Router,
     private fb: FormBuilder, private traineeService: HydraTraineeService) { }

  ngOnInit() {
    /**
    * gets the current trainer for the page from trainer service's current trainer
    * if the current trainer is null navigate back to the trainers page so that the user can select one
    */
    // this.trainerService.currentTrainer.subscribe(currentTrainer => this.currentTrainer = currentTrainer);
    this.currentTrainer = this.trainerService.currentTrainer;
    if (this.currentTrainer == null) {
      this.router.navigate(['Caliber/settings/trainers']);
    }

    /**
    * fetches all batches and pushes into the batches object,
    */
    // this.batchService.fetchAll().subscribe(
    //   (batches: Batch[]) => { this.batches = batches; }
    // );

    this.batchService.fetchAllByTrainerId(this.currentTrainer.trainerId).subscribe(
      (batches: HydraBatch[]) => { this.batches = batches; }
    );

    /**
    * fetches all trainers, titles and roles and pushes them onto the trainers, titles and roles observables
    */
    this.trainerService.fetchAll().subscribe((resp) => {
      this.trainers = resp;
    });
    this.trainerService.fetchTitles().subscribe(res => this.titles = res);
    this.trainerService.fetchRoles().subscribe(res => {
      this.roles = (res.filter(role => role !== 'INACTIVE')); // filter out INACTIVE role
    });
  }

  /**
  * opens a modal
  *
  * @param content: String
  */
  open(content) {
    this.modalService.open(content);
  }

  /**
  * opens a large modal
  *
  * @param content: String
  */
  openLarge(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  /**
  * sets the current batch
  * triggered when a user clicks to see the trainees for a current batch
  *
  * @param content: String
  */
  setCurrentBatch(batch) {
    this.currentBatch = batch;
    this.traineeService.findAllByBatchAndStatus(batch.batchId, 'Training').subscribe( res =>
      this.currentBatch.trainees = res
    );
    console.log(batch);
  }

  /**
  * navigates to the reports page
  */
  navReports() {
    this.router.navigate(['Caliber/reports']);
  }

  /**
  * navigates to the manage page
  */
  navManage() {
    this.router.navigate(['Caliber/manage']);
  }

  /**
  * Open modal and get Trainer that belong to this modal
  * Backup these fields before the edit
  *
  * @param content: String
  * @param modalTrainer: Trainer
  */
  editTrainer(content, modalTrainer: HydraTrainer) {
    this.currEditTrainer = modalTrainer;
    this.newRole = modalTrainer.role;
    this.newTitle = modalTrainer.title;
    this.rForm = this.fb.group({
      'firstName': [this.currEditTrainer.firstName, Validators.required],
      'lastName': [this.currEditTrainer.lastName, Validators.required],
      'email': [this.currEditTrainer.email, Validators.required],
      'title': [this.newTitle],
      'role': [this.newRole],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  /**
  * When role was changed
  *
  * @param newRole: string
  */
  roleChange(newRole) {
    this.newRole = newRole;
  }

  /**
  * When title was changed
  *
  * @param newTitle: string
  */
  titleChange(newTitle) {
    // Empty title, changed back to original
    if (newTitle === '') {
      this.newTitle = this.currEditTrainer.title;
    } else {
      // New title was changed
      this.newTitle = newTitle;
    }
  }

  /**
  * update button clicked, takes the value of the modal
  *
  * @param modal: any
  */
  updateTrainer(modal) {
    // replacing the trainer's fields with the new ones
    this.currEditTrainer.role = this.newRole;
    this.currEditTrainer.title = this.newTitle;
    this.currEditTrainer.firstName = modal.firstName;
    this.currEditTrainer.lastName = modal.lastName;
    this.currEditTrainer.email = modal.email;
    // call trainerService to update
    this.trainerService.update(this.currEditTrainer).subscribe((resp) => {
      const temp = this.currEditTrainer;
      this.trainerService.fetchAll();
    });
  }

}
