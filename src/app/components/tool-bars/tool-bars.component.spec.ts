import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarsComponent } from './tool-bars.component';

describe('ToolBarsComponent', () => {
  let component: ToolBarsComponent;
  let fixture: ComponentFixture<ToolBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
