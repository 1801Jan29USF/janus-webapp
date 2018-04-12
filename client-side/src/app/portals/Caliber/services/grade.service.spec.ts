import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { GradeService } from './grade.service';

xdescribe('GradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        GradeService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([GradeService], (service: GradeService) => {
    expect(service).toBeTruthy();
  }));
});
