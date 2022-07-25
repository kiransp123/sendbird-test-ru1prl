import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SendbirdComponent } from "./sendbird/sendbird/sendbird.component";
import { SendbirdService } from "./sendbird/sendbird.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SendbirdComponent],
  bootstrap: [AppComponent],
  providers: [SendbirdService]
})
export class AppModule {}
