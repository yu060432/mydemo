import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocardComponent } from './nocard.component';

describe('NocardComponent', () => {
  let component: NocardComponent;
  let fixture: ComponentFixture<NocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
