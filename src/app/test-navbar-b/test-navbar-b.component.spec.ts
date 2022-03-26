import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNavbarBComponent } from './test-navbar-b.component';

describe('TestNavbarBComponent', () => {
  let component: TestNavbarBComponent;
  let fixture: ComponentFixture<TestNavbarBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNavbarBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNavbarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
