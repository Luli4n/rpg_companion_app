import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingGameTemplateComponent } from './creating-game-template.component';

describe('CreatingGameTemplateComponent', () => {
  let component: CreatingGameTemplateComponent;
  let fixture: ComponentFixture<CreatingGameTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingGameTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingGameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
