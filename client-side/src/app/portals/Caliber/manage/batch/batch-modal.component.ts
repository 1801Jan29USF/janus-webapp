import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// rxjs
import { Subscription } from 'rxjs/Subscription';

// entities
import { HydraBatch } from '../../../../hydra-client/entities/HydraBatch';

// services
import { HydraBatchService } from '../../../../hydra-client/services/batch/hydra-batch.service';
import { TrainingTypeService } from '../../services/training-type.service';
import { SkillService } from '../../services/skill.service';
import { LocationService } from '../../services/location.service';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../entities/Trainer';
import { Address } from '../../entities/Address';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-manage-batch-modal',
  templateUrl: './batch-modal.component.html',
  styleUrls: ['./batch-modal.component.css']
})
export class BatchModalComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  public initialBatch: HydraBatch;

  @Input()
  public batch: HydraBatch;

  public trainers: Trainer[];
  public skills: string[];
  public locations: Address[];
  public trainingTypes: string[];
  batchType: string;
  isNewBatch: boolean;

  defaultValue1 = 'Select Training Type';
  defaultValue2 = 'Select Skill Type';

  private savedBatchSubscription: Subscription;
  private trainingTypeListSubscription: Subscription;
  private skillListSubscription: Subscription;
  private locationListSubscription: Subscription;
  private trainerListSubscription: Subscription;

  constructor(
    private activeModal: NgbActiveModal,
    private batchService: HydraBatchService,
    private trainingTypeService: TrainingTypeService,
    private skillService: SkillService,
    private locationService: LocationService,
    public trainerService: TrainerService
  ) {
    this.batch = new HydraBatch();
    this.setLocations([]);
    this.setTrainers([]);
    this.setTrainingTypes([]);
    this.setSkills([]);
  }

  public setSkills(skills: string[]): void {
    this.skills = skills;
  }

  public setLocations(locations: Address[]): void {
    this.locations = locations;
  }

  public setTrainers(trainers: Trainer[]): void {
    this.trainers = trainers;
  }

  public setTrainingTypes(types: string[]): void {
    this.trainingTypes = types;
  }

  public clone() {
    Object.assign(this.batch, this.initialBatch);
  }

  close(result: any): void {
    this.activeModal.close(result);
    this.clone();
  }

  dismiss(result: any): void {
    this.activeModal.dismiss(result);
    this.clone();
  }

  save(): void {
    this.batchService.update(this.batch);
    this.close(this.batch);
  }

  create(): void {
    this.batchService.create(this.batch);
    this.close(this.batch);
  }

  /** Dynamically updates the createBatch location selected inside the
    * create batch modal whenever a location is selected from the dropdown
    */
  onLocationSelect(addressId: number): void {
    for (const location of this.locations) {
      if (Number(location.addressId) === Number(addressId)) {
        this.batch.location = location.city;
      }
    }
  }

  /** Dynamically updates the createBatch trainer selected inside the
 * create batch modal whenever a trainer is selected from the dropdown
 */
  onTrainerSelect(trainerId: number): void {
    for (const trainer of this.trainers) {
      if (Number(trainer.trainerId) === Number(trainerId)) {
        this.batch.trainer = trainer.trainerId;
      }
    }
  }


  /** Dynamically updates the createBatch coTrainer selected inside the
   * create batch modal whenever a trainer is selected from the dropdown
   */
  onCoTrainerSelect(trainerId: number): void {
    for (const trainer of this.trainers) {
      if (Number(trainer.trainerId) === Number(trainerId)) {
        this.batch.cotrainer = trainer.trainerId;
      }
    }
  }

  ngOnInit() {

    /*
   * keep an updated list of trainers
   */
    this.trainerListSubscription = this.trainerService.listSubject
      .subscribe((trainers) => this.setTrainers(trainers));


    this.locationListSubscription = this.locationService.listSubject
      .subscribe((locations) => this.setLocations(locations));

    /*fetches all training types */
    /*this.trainingTypeService.fetchAll();*/
    this.trainingTypeListSubscription = this.trainingTypeService.listSubject
      .subscribe((types) => this.setTrainingTypes(types));

    /*fetches all skills */
    this.skillListSubscription = this.skillService.listSubject
      .subscribe((skills) => this.setSkills(skills));

    /* fetches all batches */
    this.batchService.fetchAll();

    /* fetches all trainers */
    this.trainerService.fetchAll();

    /* fetches all training locations */
    this.locationService.fetchAll();

    /* basic logic to assign the header and button names to what the modal
    is being used for
    If current batch is empty we are creating a new batch
    If current batch has a field asssigned already we are updating a batch
    isNewBatch is assigned so that the proper functions are called from the buttons
    This should be redesigned */

    if (this.batch.trainer === 0) {
      this.batchType = 'Create New Batch';
      this.isNewBatch = true;
    } else {
      this.batchType = 'Update Batch';
      this.isNewBatch = false;
    }

    this.clone();
  }

  ngOnDestroy(): void {
    this.locationListSubscription.unsubscribe();
    this.trainerListSubscription.unsubscribe();
    this.trainingTypeListSubscription.unsubscribe();
    this.skillListSubscription.unsubscribe();
  }

  ngOnChanges(): void {
    this.clone();
  }

}
