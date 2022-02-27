import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDuringGameComponent } from './management-during-game.component';

describe('ManagementDuringGameComponent', () => {
  let component: ManagementDuringGameComponent;
  let fixture: ComponentFixture<ManagementDuringGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementDuringGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDuringGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
