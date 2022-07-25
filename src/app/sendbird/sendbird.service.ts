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

  public joinChannel(users: Array<User>): Observable<GroupChannel>
   {
   
    return from(this.sb.GroupChannel.createChannel(users));
  }
  createGroupChannel(
    channelName: string,
    userIds: Array<string>,
    callback: any ) 
    {
     const params = new this.sb.GroupChannelParams();
     params.addUserIds();
     params.addUserIds(userIds);
     params.name = channelName;
     this.sb.GroupChannel.createChannel(
      params,
      (groupChannel: SendBird.GroupChannel, error: SendBird.SendBirdError) => 
      {
        callback(error, groupChannel);
      }
    );
  }
  getMyGroupChannels(callback: any) 
  {
    const listQuery = this.sb.GroupChannel.createMyGroupChannelListQuery();
    listQuery.includeEmpty = true;
    listQuery.memberStateFilter = 'joined_only';
    listQuery.order = 'latest_last_message';
    listQuery.limit = 15; // The value of pagination limit could be set up to 100.
    if (listQuery.hasNext) 
    {
      listQuery.next((groupChannels, error) =>
       {
        callback(error, groupChannels);
      });
    }
  }
}
