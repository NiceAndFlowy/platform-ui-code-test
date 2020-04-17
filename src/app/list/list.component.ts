import { Provider } from "./../models/provider";
import { Component, OnInit } from "@angular/core";
import { ProvidersService } from "../services/providers.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  constructor(private providerService: ProvidersService) {}
  ngOnInit() {}
}
