import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCursosComponent } from './incluir-cursos.component';

describe('IncluirCursosComponent', () => {
  let component: IncluirCursosComponent;
  let fixture: ComponentFixture<IncluirCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
