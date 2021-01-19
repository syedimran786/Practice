import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmComponent } from './mm.component';

describe('MmComponent', () => {
  let component: MmComponent;
  let fixture: ComponentFixture<MmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
