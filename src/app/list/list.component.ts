import { Provider } from "./../models/provider";
import { Component, OnInit } from "@angular/core";
import { ProvidersService } from "../services/providers.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  onToggled(provider) {
    if (provider.isSelected) {
      this.providerService.unselectProvider(provider.provider);
    } else {
      this.providerService.selectProvider(provider.provider);
    }
  }
  constructor(private providerService: ProvidersService) {}
  ngOnInit() {}
}
