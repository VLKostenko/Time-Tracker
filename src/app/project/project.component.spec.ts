import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProjectComponent } from './project.component';

describe('TestProjectComponent', () => {
  let component: TestProjectComponent;
  let fixture: ComponentFixture<TestProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
