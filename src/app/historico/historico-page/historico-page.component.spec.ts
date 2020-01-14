import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPageComponent } from './historico-page.component';

describe('HistoricoPageComponent', () => {
  let component: HistoricoPageComponent;
  let fixture: ComponentFixture<HistoricoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
