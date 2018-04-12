import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../app.test.module';
import { CaliberNavComponent } from './caliber-nav.component';

xdescribe('CaliberNavComponent', () => {
  let component: CaliberNavComponent;
  let fixture: ComponentFixture<CaliberNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliberNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
