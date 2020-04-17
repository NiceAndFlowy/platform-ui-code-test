import { Provider } from "./../models/provider";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProvidersService {
  private unselectedProviders: Provider[];
  private selectedProviders: Provider[];
  private STORAGE_SELECTED = "selectedProviders";
  private STORAGE_UNSELECTED = "unselectedProviders";

  constructor() {
    let localStorageSelected = JSON.parse(
      localStorage.getItem(this.STORAGE_SELECTED)
    );
    let localStorageUnselected = JSON.parse(
      localStorage.getItem(this.STORAGE_UNSELECTED)
    );

    // Load the providers if saved, else show default
    if (localStorageSelected != null && localStorageUnselected != null) {
      this.selectedProviders = localStorageSelected;
      this.unselectedProviders = localStorageUnselected;
    } else {
      this.selectedProviders = [];
      this.unselectedProviders = [
        {
          id: "1",
          name: "John",
          address: "123 Greenway Blvd",
          phone: "8991234321",
        },
        {
          id: "2",
          name: "Mary",
          address: "443 Windwhisper Road",
          phone: "2233211903",
        },
        {
          id: "3",
          name: "Jason",
          address: "9992 Pumpkin Hollow",
          phone: "4343219384",
        },
      ];
    }
  }
  getSelectedProviders() {
    return this.selectedProviders;
  }
  getUnselectedProviders() {
    return this.unselectedProviders;
  }

  selectProvider(provider: Provider): void {
    this.unselectedProviders = this.unselectedProviders.filter(
      (p) => p.id != provider.id
    );
    this.selectedProviders.push(provider);
    this.saveProvidersToLocalStorage();
  }

  unselectProvider(provider: Provider): void {
    this.selectedProviders = this.selectedProviders.filter(
      (p) => p != provider
    );
    this.unselectedProviders.push(provider);
    this.saveProvidersToLocalStorage();
  }
  private saveProvidersToLocalStorage(): void {
    localStorage.setItem(
      this.STORAGE_SELECTED,
      JSON.stringify(this.selectedProviders)
    );
    localStorage.setItem(
      this.STORAGE_UNSELECTED,
      JSON.stringify(this.unselectedProviders)
    );
  }
}
