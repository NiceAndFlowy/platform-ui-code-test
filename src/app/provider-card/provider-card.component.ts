import { Provider } from "./../models/provider";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "provider-card",
  templateUrl: "./provider-card.component.html",
  styleUrls: ["./provider-card.component.css"],
})
export class ProviderCardComponent implements OnInit {
  @Input() provider: Provider;
  @Input() isSelected: boolean;
  @Output() toggled = new EventEmitter();

  toggleSelection(): void {
    this.toggled.emit({
      provider: this.provider,
      isSelected: this.isSelected,
    });
  }

  constructor() {}

  ngOnInit() {}
}
