import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpostlistComponent } from './showpostlist.component';

describe('ShowpostlistComponent', () => {
  let component: ShowpostlistComponent;
  let fixture: ComponentFixture<ShowpostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
