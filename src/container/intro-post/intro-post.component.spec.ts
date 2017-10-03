import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPostComponent } from './intro-post.component';

describe('IntroPostComponent', () => {
  let component: IntroPostComponent;
  let fixture: ComponentFixture<IntroPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
