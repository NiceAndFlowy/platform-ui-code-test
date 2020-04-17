import { TestBed } from "@angular/core/testing";

import { ProvidersService } from "./providers.service";

describe("ProvidersService", () => {
  let service: ProvidersService;
  const STORAGE_SELECTED = "selectedProviders";
  const STORAGE_UNSELECTED = "unselectedProviders";
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ProvidersService);
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

  it("should be created", () => {
    // const service: ProvidersService = TestBed.get(ProvidersService);
    expect(service).toBeTruthy();
  });

  describe("Initial state", () => {
    describe("unselectedProviders", () => {
      let firstProvider;
      beforeEach(() => {
        firstProvider = service.getUnselectedProviders()[0];
      });
      it("should have a length of 3", () => {
        expect(service.getUnselectedProviders().length).toEqual(3);
      });
      it("should have an id", () => {
        expect(firstProvider.id).toEqual("1");
      });

      it("should have a name", () => {
        expect(firstProvider.name).toEqual("John");
      });

      it("should have an address", () => {
        expect(firstProvider.address).toEqual("123 Greenway Blvd");
      });

      it("should have a phone", () => {
        expect(firstProvider.phone).toEqual("8991234321");
      });
    });
    describe("selectedProviders", () => {
      it("should have a length of 0", () => {
        expect(service.getSelectedProviders().length).toEqual(0);
      });
    });
    describe("localStorage", () => {
      it(`should not have an item for key: ${STORAGE_SELECTED}`, () => {
        expect(localStorage.getItem(STORAGE_SELECTED)).toEqual(null);
      });
      it(`should not have an item for key: ${STORAGE_UNSELECTED}`, () => {
        expect(localStorage.getItem(STORAGE_UNSELECTED)).toEqual(null);
      });
    });
  });

  describe("Saved state", () => {
    describe("One provider selected", () => {
      beforeEach(() => {
        service.selectProvider(service.getUnselectedProviders()[0]);
      });
      describe("selectedProvider", () => {
        it("should have a length of 1", () => {
          expect(service.getSelectedProviders().length).toEqual(1);
        });
      });
      describe("unselectedProviders", () => {
        it("should have a length of 2", () => {
          expect(service.getUnselectedProviders().length).toEqual(2);
        });
      });
      describe("localStorage", () => {
        it(`should have an item for key: ${STORAGE_SELECTED}`, () => {
          console.log("localstorage", localStorage.getItem(STORAGE_SELECTED));
          expect(localStorage.getItem(STORAGE_SELECTED)).toEqual(
            JSON.stringify(service.getSelectedProviders())
          );
        });
        it(`should have an item for key: ${STORAGE_UNSELECTED}`, () => {
          expect(localStorage.getItem(STORAGE_UNSELECTED)).toEqual(
            JSON.stringify(service.getUnselectedProviders())
          );
        });
      });
    });
    describe("No providers selected", () => {
      beforeEach(() => {
        service.selectProvider(service.getUnselectedProviders()[0]);
        service.selectProvider(service.getUnselectedProviders()[0]);
        service.selectProvider(service.getUnselectedProviders()[0]);
        console.log("test", service.getSelectedProviders())
      });
      describe("selectedProvider", () => {
        it("should have a length of 3", () => {
          expect(service.getSelectedProviders().length).toEqual(3);
        });
      });
      describe("unselectedProviders", () => {
        it("should have a length of 0", () => {
          expect(service.getUnselectedProviders().length).toEqual(0);
        });
      });
      describe("localStorage", () => {
        it(`should have an item for key: ${STORAGE_SELECTED}`, () => {
          console.log("localstorage", localStorage.getItem(STORAGE_SELECTED));
          expect(localStorage.getItem(STORAGE_SELECTED)).toEqual(
            JSON.stringify(service.getSelectedProviders())
          );
        });
        it(`should have an item for key: ${STORAGE_UNSELECTED}`, () => {
          expect(localStorage.getItem(STORAGE_UNSELECTED)).toEqual(
            JSON.stringify(service.getUnselectedProviders())
          );
        });
      });
    });
  });

  // describe('selected providers', () => {
  //   it('should have no initial length', () => {
  //     expect(component.selectedProviders.length).toEqual(0);
  //   });
  // });
});
