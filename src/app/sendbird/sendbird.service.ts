import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { GroupChannel, SendBirdError, User, SendBirdInstance } from "sendbird";
import * as SendBird from "sendbird";

@Injectable({
  providedIn: "root"
})
export class SendbirdService {
  private sb: any;

  constructor() {
    this.sb = new SendBird({ appId: "3818813D-5C8D-4537-A1D5-F2D4FB0211B3" });
    console.log(`BSCOMMS client created ${this.sb}`);
  }

  public connect(buyerId: string): Observable<User> {
    return from(this.sb.connect(buyerId));
  }

  public createChannel(users: Array<User>): Observable<GroupChannel> {
    return from(this.sb.GroupChannel.createChannel(users));
  }

  public joinChannel(users: Array<User>): Observable<GroupChannel> {
    // 1 - Join Existing Channel
    // get list of existing channels, check if channel is there

    // 2 - Create new channel
    return from(this.sb.GroupChannel.createChannel(users));
  }
}
