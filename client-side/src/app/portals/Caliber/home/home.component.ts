import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainerService } from '../../../hydra-client/services/trainer/trainer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private trainerService: TrainerService) { }


  ngOnInit() {
    this.trainerService.fetchAll().subscribe(x => {
      console.log(x);
    });
  }


  ngOnDestroy() {}
}
