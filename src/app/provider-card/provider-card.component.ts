import { Provider } from './../models/provider';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent implements OnInit {
  @Input() provider: Provider

  constructor() { }

  ngOnInit() {
  }

}
