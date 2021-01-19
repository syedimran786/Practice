import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfComponent } from './cf.component';

describe('CfComponent', () => {
  let component: CfComponent;
  let fixture: ComponentFixture<CfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
