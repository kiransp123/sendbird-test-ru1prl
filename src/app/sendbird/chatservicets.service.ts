import { Injectable } from '@angular/core';
import SendBird from 'sendbird';

@Injectable({ providedIn: 'root',})
export class ChatservicetsService 
{
  sb: any;

  // https://dashboard.sendbird.com
  APP_ID = 'CFC7ED3F-68CA-48B2-BF12-086BFDE44417';

  init()
  {
    this.sb = new SendBird({ appId: this.APP_ID });
    SendBird.setLogLevel(SendBird.LogLevel.ERROR);
  }
  connect(userId: string, token: any, callback: any)
   {
    this.sb.connect(userId, token, (user: any, error: any) => 
    {
      callback(user, error);
    });
  }
  isConnected() 
  {
    return this.sb && this.sb.currentUser && this.sb.currentUser.userId;
  }

  getConnectedUser() 
  {
    return this.sb && this.sb.currentUser ? this.sb.currentUser : null;
  }

  registerEventHandlers(UNIQUE_HANDLER_ID: string, callback: any)
   {
    var channelHandler = new this.sb.ChannelHandler();

    channelHandler.onMessageReceived = (channel, message) =>
     {
      callback(
     {
        event: 'onMessageReceived',
        data:
         {
          channel,
          message,
        },
      });
     };
    channelHandler.onMessageUpdated = function (channel, message) {};
    channelHandler.onMessageDeleted = function (channel, messageId) {};
    channelHandler.onMentionReceived = function (channel, message) {};
    channelHandler.onChannelChanged = function (channel) {};
    channelHandler.onChannelDeleted = function (channelUrl, channelType) {};
    channelHandler.onChannelFrozen = function (channel) {};
    channelHandler.onChannelUnfrozen = function (channel) {};
    channelHandler.onMetaDataCreated = function (channel, metaData) {};
    channelHandler.onMetaDataUpdated = function (channel, metaData) {};
    channelHandler.onMetaDataDeleted = function (channel, metaDataKeys) {};
    channelHandler.onMetaCountersCreated = function (channel, metaCounter) {};
    channelHandler.onMetaCountersUpdated = function (channel, metaCounter) {};
    channelHandler.onMetaCountersDeleted = function (channel, metaCounterKeys) {};
    channelHandler.onChannelHidden = function (groupChannel) {};
    channelHandler.onUserReceivedInvitation = function (groupChannel, inviter, invitees) {};
    channelHandler.onUserDeclinedInvitation = function (groupChannel, inviter, invitee) {};
    channelHandler.onUserJoined = function (groupChannel, user) {};
    channelHandler.onUserLeft = function (groupChannel, user) {};
    channelHandler.onDeliveryReceiptUpdated = function (groupChannel) {};
    channelHandler.onReadReceiptUpdated = function (groupChannel) {};
    channelHandler.onTypingStatusUpdated = function (groupChannel) {};
    channelHandler.onUserEntered = function (openChannel, user) {};
    channelHandler.onUserExited = function (openChannel, user) {};
    channelHandler.onUserMuted = function (channel, user) {};
    channelHandler.onUserUnmuted = function (channel, user) {};
    channelHandler.onUserBanned = function (channel, user) {};
    channelHandler.onUserUnbanned = function (channel, user) {};
    channelHandler.onChannelMemberCountChanged = function (channels) {};
    channelHandler.onChannelParticipantCountChanged = function (channels) {};

    // Add this channel event handler to the `SendBird` instance.
    this.sb.addChannelHandler(UNIQUE_HANDLER_ID, channelHandler);
  }




}


 