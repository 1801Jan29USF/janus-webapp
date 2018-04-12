import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
import { SimpleNotificationsModule } from 'angular2-notifications-lite/src/simple-notifications.module';
import { AlertsService } from '../services/alerts.service';
import { NotificationsService } from 'angular2-notifications-lite/src/notifications.service';

xdescribe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  // let alertService: ComponentFixture<AlertsComponent>;
  // let notificationsService: ComponentFixture<AlertsComponent>;

  const mockAlertServce = {};
  const mockNotificationService = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      imports: [SimpleNotificationsModule],
      // providers: [
      //   { provide: AlertsService, useValue: mockAlertServce },
      //   { provide: NotificationsService, useValue: mockNotificationService }
      // ]
      providers: [
        AlertsService,
        NotificationsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    this.alertService = fixture.debugElement.injector.get(AlertsService);
    this.notificationsService = fixture.debugElement.injector.get(NotificationsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
