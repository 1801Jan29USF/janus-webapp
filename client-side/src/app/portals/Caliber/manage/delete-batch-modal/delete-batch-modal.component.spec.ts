import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeleteBatchModalComponent } from './delete-batch-modal.component';
import { Dependencies } from '../../caliber.test.module';

xdescribe('DeleteBatchModalComponent', () => {
  let component: DeleteBatchModalComponent;
  let fixture: ComponentFixture<DeleteBatchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBatchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
