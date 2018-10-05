import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalueaccessorComponent } from './customvalueaccessor.component';

describe('CustomvalueaccessorComponent', () => {
  let component: CustomvalueaccessorComponent;
  let fixture: ComponentFixture<CustomvalueaccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomvalueaccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomvalueaccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
