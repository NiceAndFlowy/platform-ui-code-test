import { ProvidersService } from "./../services/providers.service";
import { TestBed } from "@angular/core/testing";
import { ListComponent } from "./list.component";

describe("ListComponent", () => {
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
    spyOn(localStorage, "getItem").and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, "setItem").and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, "removeItem").and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, "clear").and.callFake(mockLocalStorage.clear);
  });
  describe("onToggle", () => {
    describe("provider is selected", () => {
      it("should unselect the provider", () => {
        let selectedProvider = service.getUnselectedProviders()[0];
        service.selectProvider(selectedProvider);
        spyOn(component, "onToggled").and.callThrough();
        spyOn(service, "unselectProvider");
        const eventTest = { provider: selectedProvider, isSelected: true };
        component.onToggled(eventTest);
        expect(component.onToggled).toHaveBeenCalled();
        expect(service.unselectProvider).toHaveBeenCalled();
      });
    });
    describe("provider is unselected", () => {
      it("should select the provider", () => {
        let unselectedProvider = service.getUnselectedProviders()[0];
        spyOn(component, "onToggled").and.callThrough();
        spyOn(service, "selectProvider");
        const eventTest = { provider: unselectedProvider, isSelected: false };
        component.onToggled(eventTest);
        expect(component.onToggled).toHaveBeenCalled();
        expect(service.selectProvider).toHaveBeenCalled();
      });
    });
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
