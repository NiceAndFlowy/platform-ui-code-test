import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ProviderCardComponent } from "./provider-card/provider-card.component";
import { ProvidersService } from "./services/providers.service";

@NgModule({
  declarations: [AppComponent, ListComponent, ProviderCardComponent],
  imports: [BrowserModule],
  providers: [ProvidersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
