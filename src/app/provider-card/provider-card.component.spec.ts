import { element } from 'protractor';
import { Provider } from './../models/provider';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  let component: ProviderCardComponent;
  let fixture: ComponentFixture<ProviderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits the toggled event', () => {
    const provider: Provider = {
      id: "1",
      name: "John",
      address: "123 Greenway Blvd",
      phone: "8991234321",
    };
    component.provider = provider;
    component.isSelected = true;
    spyOn(component.toggled, 'emit');
    component.toggleSelection();
    expect(component.toggled.emit).toHaveBeenCalledWith({provider: component.provider, isSelected: component.isSelected});
  })
});
