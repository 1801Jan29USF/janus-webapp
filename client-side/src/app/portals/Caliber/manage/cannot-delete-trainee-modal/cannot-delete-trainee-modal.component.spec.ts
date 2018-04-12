import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { CannotDeleteTraineeModalComponent } from './cannot-delete-trainee-modal.component';

xdescribe('CannotDeleteTraineeModalComponent', () => {
  let component: CannotDeleteTraineeModalComponent;
  let fixture: ComponentFixture<CannotDeleteTraineeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotDeleteTraineeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
