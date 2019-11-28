import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALaCarteComponent } from './a-la-carte.component';

describe('ALaCarteComponent', () => {
  let component: ALaCarteComponent;
  let fixture: ComponentFixture<ALaCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALaCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALaCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
