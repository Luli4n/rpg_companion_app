import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingGameTemplatesComponent } from './browsing-game-templates.component';

describe('BrowsingGameTemplatesComponent', () => {
  let component: BrowsingGameTemplatesComponent;
  let fixture: ComponentFixture<BrowsingGameTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsingGameTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsingGameTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
