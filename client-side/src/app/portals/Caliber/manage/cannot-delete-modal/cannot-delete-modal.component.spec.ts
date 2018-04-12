import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotDeleteModalComponent } from './cannot-delete-modal.component';
import { Dependencies } from '../../caliber.test.module';


xdescribe('CannotDeleteModalComponent', () => {
  let component: CannotDeleteModalComponent;
  let fixture: ComponentFixture<CannotDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
