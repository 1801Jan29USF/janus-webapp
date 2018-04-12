import { Component, OnInit, OnDestroy, Output } from '@angular/core';

// rxjs
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// entities
import { HydraTrainee } from '../../../../hydra-client/entities/HydraTrainee';

// services
import { TraineeService } from '../../services/trainee.service';
import { PanelService } from '../../services/panel.service';
import { HydraBatchService } from '../../../../hydra-client/services/batch/hydra-batch.service';


@Component({
  selector: 'app-panel-searchbar',
  templateUrl: './panel-searchbar.component.html',
  styleUrls: ['./panel-searchbar.component.css']
})

export class PanelSearchbarComponent implements OnInit, OnDestroy {
  name: string;
  trainee: HydraTrainee;
  batchList;
  traineeList = [];
  traineeNameList: any = [];
  batchSubscription: Subscription;
  closeResult: string;

  protected traineeSubject: BehaviorSubject<HydraTrainee>;

  /**
  * Get the necessary services
  * @constructor
  * @param panelService - the PanelService
  */
  constructor(private traineeService: TraineeService, private batchService: HydraBatchService,
    private panelService: PanelService) {
    this.traineeSubject = new BehaviorSubject(this.trainee);
  }

  /**
   * fetch all batches
   */
  ngOnInit() {
    this.batchService.fetchAll();
    this.setBatchList();
  }

  /**
   * @function setBatchList
   */
  setBatchList() {
    this.batchSubscription = this.batchService.fetchAll().subscribe(batchList => {
      this.batchList = batchList;
      if (!this.traineeList.length) {
        this.getTrainees(this.batchList);
      }
    });
  }

  /**
   * @function getTrainees
   * @param batchList
   */
  getTrainees(batchList) {
    for (let i = 0; i < batchList.length; i++) {
      this.traineeList = this.traineeList.concat(batchList[i].trainees);
    }
    for (let i = 0; i < this.traineeList.length; i++) {
      this.traineeNameList.push(this.traineeList[i].name);
    }
  }

  /**
   * @function setTrainee
   * @param trainee
   */
  setTrainee(trainee: HydraTrainee) {
    this.trainee = trainee;
    this.panelService.fetchAllByTrainee(trainee);
    this.traineeSubject.next(this.trainee);
    this.name = this.trainee.traineeUserInfo.firstName;
   // this.traineeService.pushToSaved(this.trainee);  // set selected trainee to savedSubject in traineeservice
  }

  /**
   * @function setTraineeBySearch
   * @param traineeName
   */
  setTraineeBySearch(traineeName) {
    for (let i = 0; i < this.traineeList.length; i++) {
      if (traineeName.target.value === this.traineeList[i].name) {
        this.trainee = this.traineeList[i];
        this.panelService.fetchAllByTrainee(this.trainee);
        this.traineeSubject.next(this.trainee);
    //    this.traineeService.pushToSaved(this.trainee); // set selected trainee to savedsubject in traineeservice
      }
    }
  }

  /**
   * @function getTraineeSubject
   */
  public getTraineeSubject(): Observable<HydraTrainee> {
    return this.traineeSubject.asObservable();
  }

  /**
   * @function search
   */
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.traineeNameList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  ngOnDestroy() {
  }

}


