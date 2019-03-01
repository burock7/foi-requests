import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyYourIdentityComponent } from './verify-your-identity.component';
import { BaseComponent } from '../base/base.component';
import { FoiValidComponent } from 'src/app/foi-valid/foi-valid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { MockDataService, MockRouter } from '../MockClasses';
import { AlertInfoComponent } from 'src/app/alert-info/alert-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


describe('VerifyYourIdentityComponent', () => {
  let component: VerifyYourIdentityComponent;
  let fixture: ComponentFixture<VerifyYourIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyYourIdentityComponent, BaseComponent, FoiValidComponent, AlertInfoComponent],
      imports:[ReactiveFormsModule, FontAwesomeModule],
      providers: [
        {provide: DataService, useClass: MockDataService},
        {provide: Router, useClass: MockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyYourIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
