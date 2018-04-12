import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ApiService } from '../util/api.service';
import { PanelService } from './panel.service';

xdescribe('PanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        PanelService,
        ApiService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([PanelService], (service: PanelService) => {
    expect(service).toBeTruthy();
  }));
});
