import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { DeleteTraineeModalComponent } from './delete-trainee-modal.component';

xdescribe('DeleteTraineeModalComponent', () => {
  let component: DeleteTraineeModalComponent;
  let fixture: ComponentFixture<DeleteTraineeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTraineeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
