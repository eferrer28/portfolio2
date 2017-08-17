import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionDialogComponent } from './recognition-dialog.component';

describe('RecognitionDialogComponent', () => {
  let component: RecognitionDialogComponent;
  let fixture: ComponentFixture<RecognitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
