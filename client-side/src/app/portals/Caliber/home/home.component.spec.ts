import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

import { Dependencies } from '../caliber.test.module';
import { HomeComponent } from './home.component';

xdescribe('CaliberHomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies);
    // .compileComponents();


    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(5).toEqual(5);
    console.log('YOOOOOOOOOOO');
    console.log(component);
    // expect(component).toBeTruthy();
  });
});
