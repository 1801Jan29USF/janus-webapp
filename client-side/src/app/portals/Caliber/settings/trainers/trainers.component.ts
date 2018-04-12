import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TrainerService } from '../../../../hydra-client/services/trainer/trainer.service';
import { HydraTrainer } from '../../../../hydra-client/entities/HydraTrainer';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})

export class TrainersComponent implements OnInit {
  trainers: HydraTrainer[] = [];
  filteredTrainers: HydraTrainer[] = [];
  titles: Array<any>;
  roles: Array<any>;
  model = new HydraTrainer();
  activeStatus: String;
  currEditTrainer: HydraTrainer;
  newTrainer: HydraTrainer;
  newRole: any;
  newTitle: string;
  rForm: FormGroup;
  addForm: FormGroup;


  constructor(private trainerService: TrainerService,
    private modalService: NgbModal, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.trainerService.fetchAll().subscribe((resp) => {
      this.trainers = resp;
      if (resp) {
        this.filteredTrainers = resp.filter(s => {
            return s.role !== 'INACTIVE';
          }
        );
      }
    });
    this.trainerService.fetchTitles().subscribe(res => this.titles = res);
    this.trainerService.fetchRoles().subscribe(res => {
      this.roles = (res.filter(role => role !== 'INACTIVE')); // filter out INACTIVE role
    });
    this.initFormControl();
  }

  /**
   * initialize form control for validations
   *
   * @memberof TrainersComponent
   */
  initFormControl() {
    this.addForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.required],
      'title': ['', Validators.required],
      'role': ['', Validators.required],
    });
  }

  /**
   * adds a new trainer to the database
   * @param modal: modal from create trainer form
   */
  addTrainer(modal: HydraTrainer) {
    this.newTrainer = modal;
    console.log(modal);
    console.log(modal.firstName);
    this.trainerService.create(this.newTrainer).subscribe((resp) => {
      this.ngOnInit();
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  /**
   * backup original fields, and open modal for editing
   * @param content: modal form
   * @param modalTrainer: trainer belong to this modal
   */
  editTrainer(content, modalTrainer: HydraTrainer) {
    this.currEditTrainer = modalTrainer;
    this.newRole = modalTrainer.role;
    this.newTitle = modalTrainer.title;
    this.rForm = this.fb.group({
      'firstName': [this.currEditTrainer.firstName, Validators.required],
      'lastName': [this.currEditTrainer.lastName, Validators.required],
      'email': [this.currEditTrainer.email, Validators.email],
      'title': [this.newTitle, Validators.required],
      'role': [this.newRole, Validators.required],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  /**
   * Role was changed, update with new value
   * @param newRole: Role string
   */
  roleChange(newRole) {
    this.newRole = newRole;
  }

  /**
   * If title is empty, change back to original title
   * else update with new title
   * @param newTitle: title string
   */
  titleChange(newTitle) {
    if (newTitle === '') {
      this.newTitle = this.currEditTrainer.title;
    } else {
      this.newTitle = newTitle;
    }
  }

  newRoleChange(newRole) {
    this.model.role = newRole;
  }

  newTitleChange(newTitle) {
    this.model.title = newTitle;
  }

  /**
   * Changes param passed for Active/Inactive Buttons
   * @param status: status value
   */
  buttonChange(status: String) {
    this.activeStatus = status;
  }

  /**
   * update the fields in currently edited trainer
   * and send update request
   * @param modal: modal value with all the fields
   */
  updateTrainer(modal) {
    // replacing the trainer's fields with the new ones
    const temp = new HydraTrainer();
    temp.trainerId = this.currEditTrainer.trainerId;
    temp.role = this.newRole;
    temp.title = this.newTitle;
    temp.firstName = modal.firstName;
    temp.lastName = modal.lastName;
    temp.email = modal.email;
    // call trainerService to update
    this.trainerService.update(temp).subscribe((resp) => {
      this.currEditTrainer = temp;
      this.ngOnInit();
    });

  }
  /**
   * get the cause for modal dismissal
   *
   * @private
   * @param {*} reason
   * @returns {string}
   * @memberof TrainersComponent
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /**
   * clean up subscriptions
   *
   * @memberof TrainersComponent
   */

  /**
   * set current trainer to clicked  trainer and navigates to trainer profile page
   *
   * @param {any} trainer
   * @memberof TrainersComponent
   */
  goToProfile(trainer) {
    this.trainerService.changeCurrentTrainer(trainer);
    this.route.navigate(['Caliber/settings/trainer-profile']);
  }
}
