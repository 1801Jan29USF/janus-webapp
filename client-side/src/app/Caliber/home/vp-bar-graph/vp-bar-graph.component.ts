import { Component, OnInit } from '@angular/core';
import { ChartDataEntity } from '../../entities/ChartDataEntity';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { VpHomeBarGraphService } from '../../services/graph/vp-home-bar-graph.service';
import { Http } from '@angular/http';
import { VpHomeSelectorService } from '../../services/selector/vp-home-selector.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-vp-bar-graph',
  templateUrl: './vp-bar-graph.component.html',
  styleUrls: ['./vp-bar-graph.component.css']
})
export class VpBarGraphComponent implements OnInit {
  public barChartData: ChartDataEntity;
  public results: any;
  public addresses;
  public states: any;
  public cities: any;
  public hasBarChartData: boolean;
  public selectedBarCity = '';
  public selectedBarState = '';
  public selectedState: boolean;

  constructor(private vhbgs: VpHomeBarGraphService,
     private http: Http,
     private vhss: VpHomeSelectorService) { }

  ngOnInit() {
    this.hasBarChartData = false;
    this.selectedState = false;
    this.barChartData = this.vhbgs.getBarChartData();
    console.log('grabbing batches');
    this.http.get('http://localhost:8080/all/reports/batch/week/stacked-bar-current-week', { withCredentials: true })
      .subscribe(
      (resp) => {
        this.results = resp.json();
        console.log(this.results);
        this.results.sort();
        this.barChartData = this.vhbgs.fillBarChartData(this.results, this.barChartData, '', '');
        this.addresses = this.vhss.populateAddresses(this.results);
        this.states = this.vhss.populateStates(this.addresses);
        this.hasBarChartData = true;
        console.log(this.barChartData);
        console.log(this.states);
      });
  }
  findCities(state) {
    this.hasBarChartData = false;
    this.selectedBarCity = '';
    if (state === '') {
      this.selectedState = false;
      this.barChartData = this.vhbgs.fillBarChartData(this.results, this.barChartData, '', '');
    } else {
      this.selectedState = true;
      this.cities = this.vhss.populateCities(this.selectedBarState, this.addresses);
    }
    this.barChartData = this.vhbgs.fillBarChartData(this.results, this.barChartData, this.selectedBarState, '');
    this.hasBarChartData = true;
    console.log(this.barChartData);
  }
  hasCity(city) {
    if (this.cities.size > 1) {
      this.barChartData = this.vhbgs.fillBarChartData(this.results, this.barChartData, this.selectedBarState, this.selectedBarCity);
      this.hasBarChartData = true;
    }
  }
  onClick(event) {
    console.log(event);
  }

}
