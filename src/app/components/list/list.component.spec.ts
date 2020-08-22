import { ProvidersService } from '../../services/providers.service';
import { TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let service: ProvidersService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ProvidersService);
    component = new ListComponent(service);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onToggle', () => {
    it('should toggle', () => {
      spyOn(component, 'toggleSelectionOfProvider');
      component.toggleSelectionOfProvider({});
      expect(component.toggleSelectionOfProvider).toHaveBeenCalled();
    });
    describe('provider is selected', () => {
      it('should unselect the provider', () => {
        let selectedProvider = service.getUnselectedProviders()[0];
        service.selectProvider(selectedProvider);
        spyOn(service, 'unselectProvider');
        const eventTest = { provider: selectedProvider, isSelected: true };
        component.toggleSelectionOfProvider(eventTest);
        expect(service.unselectProvider).toHaveBeenCalled();
      });
    });
    describe('provider is unselected', () => {
      it('should select the provider', () => {
        let unselectedProvider = service.getUnselectedProviders()[0];
        spyOn(service, 'selectProvider');
        const eventTest = { provider: unselectedProvider, isSelected: false };
        component.toggleSelectionOfProvider(eventTest);
        expect(service.selectProvider).toHaveBeenCalled();
      });
    });
  });
});
