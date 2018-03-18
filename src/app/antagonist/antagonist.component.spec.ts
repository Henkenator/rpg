import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntagonistComponent } from './antagonist.component';

describe('AntagonistComponent', () => {
  let component: AntagonistComponent;
  let fixture: ComponentFixture<AntagonistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntagonistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntagonistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
