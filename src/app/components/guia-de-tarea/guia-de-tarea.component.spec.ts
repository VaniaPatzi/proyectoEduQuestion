import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaDeTareaComponent } from './guia-de-tarea.component';

describe('GuiaDeTareaComponent', () => {
  let component: GuiaDeTareaComponent;
  let fixture: ComponentFixture<GuiaDeTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiaDeTareaComponent]
    });
    fixture = TestBed.createComponent(GuiaDeTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
