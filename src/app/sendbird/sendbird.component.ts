import { Component, OnInit } from "@angular/core";
import { GroupChannel } from "sendbird";

@Component({
  selector: "app-sendbird",
  templateUrl: "./sendbird.component.html",
  styleUrls: ["./sendbird.component.css"]
})
export class SendbirdComponent implements OnInit {
  private _channel: GroupChannel;

  constructor(private _sendbird: SendbirdService) {}

  public clicked(): void {
    this.showModal = true;

    this._sendbird
      .connect(buyerId)
      .pipe(
        mergeMap(buyerUser => {
          console.log(`BSCOMMS connected ${buyerUser.userId}`);
          return this._sendbird.createChannel([buyerUser]);
        }),
        mergeMap(channel => {
          // console.log(`BSCOMMS connected
          //   ${channel.name}, ${channel.url}, ${channel.members}`);
          // channel.members.forEach(m =>
          //   console.log(`BSCOMMS member ${m.userId}`)
          // );
          return of(channel);
        })
      )
      .subscribe(channel => (this._channel = channel));
  }

  public sendMsg(): void {
    console.log("BSCOMMS: Send message");
    // this._sendbirdService.sb.connect()
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
  }
}
