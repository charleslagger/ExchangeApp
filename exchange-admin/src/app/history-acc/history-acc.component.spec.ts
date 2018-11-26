import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAccComponent } from './history-acc.component';

describe('HistoryAccComponent', () => {
  let component: HistoryAccComponent;
  let fixture: ComponentFixture<HistoryAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
