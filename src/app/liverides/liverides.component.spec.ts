import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveridesComponent } from './liverides.component';

describe('LiveridesComponent', () => {
  let component: LiveridesComponent;
  let fixture: ComponentFixture<LiveridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
