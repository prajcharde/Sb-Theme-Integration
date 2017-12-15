import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdashComponent } from './showdash.component';

describe('ShowdashComponent', () => {
  let component: ShowdashComponent;
  let fixture: ComponentFixture<ShowdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
