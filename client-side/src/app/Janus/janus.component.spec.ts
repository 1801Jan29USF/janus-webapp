import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanusComponent } from './janus.component';
import { NavModule } from '../nav/nav.module';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('JanusComponent', () => {
  let component: JanusComponent;
  let fixture: ComponentFixture<JanusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavModule, RouterTestingModule],
      declarations: [ JanusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
