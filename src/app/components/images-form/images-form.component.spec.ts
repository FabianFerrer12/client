import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesFormComponent } from './images-form.component';

describe('ImagesFormComponent', () => {
  let component: ImagesFormComponent;
  let fixture: ComponentFixture<ImagesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesFormComponent]
    });
    fixture = TestBed.createComponent(ImagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
