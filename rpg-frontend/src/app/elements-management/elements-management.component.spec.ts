import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsManagementComponent } from './elements-management.component';

describe('ElementsManagementComponent', () => {
  let component: ElementsManagementComponent;
  let fixture: ComponentFixture<ElementsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
