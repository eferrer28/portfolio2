import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpDialogComponent } from './wp-dialog.component';

describe('WpDialogComponent', () => {
  let component: WpDialogComponent;
  let fixture: ComponentFixture<WpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
