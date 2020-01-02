import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPageComponent } from './conta-page.component';

describe('ContaPageComponent', () => {
  let component: ContaPageComponent;
  let fixture: ComponentFixture<ContaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
