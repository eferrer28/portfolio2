import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeVidComponent } from './recipe-vid.component';

describe('RecipeVidComponent', () => {
  let component: RecipeVidComponent;
  let fixture: ComponentFixture<RecipeVidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeVidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
