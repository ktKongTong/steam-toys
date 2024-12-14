// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_friendmessages.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { NoResponseSchema } from "./common_base_pb";
import { file_web_ui_common_base } from "./common_base_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file web-ui/service_friendmessages.proto.
 */
export const file_web_ui_service_friendmessages: GenFile = /*@__PURE__*/
  fileDesc("CiN3ZWItdWkvc2VydmljZV9mcmllbmRtZXNzYWdlcy5wcm90byJVCidDRnJpZW5kTWVzc2FnZXNfQWNrTWVzc2FnZV9Ob3RpZmljYXRpb24SFwoPc3RlYW1pZF9wYXJ0bmVyGAEgASgGEhEKCXRpbWVzdGFtcBgCIAEoDSLzAQopQ0ZyaWVuZE1lc3NhZ2VzX0dldFJlY2VudE1lc3NhZ2VzX1JlcXVlc3QSEAoIc3RlYW1pZDEYASABKAYSEAoIc3RlYW1pZDIYAiABKAYSDQoFY291bnQYAyABKA0SIAoYbW9zdF9yZWNlbnRfY29udmVyc2F0aW9uGAQgASgIEhoKEnJ0aW1lMzJfc3RhcnRfdGltZRgFIAEoBxIVCg1iYmNvZGVfZm9ybWF0GAYgASgIEhUKDXN0YXJ0X29yZGluYWwYByABKA0SEQoJdGltZV9sYXN0GAggASgNEhQKDG9yZGluYWxfbGFzdBgJIAEoDSKRAQoqQ0ZyaWVuZE1lc3NhZ2VzX0dldFJlY2VudE1lc3NhZ2VzX1Jlc3BvbnNlEksKCG1lc3NhZ2VzGAEgAygLMjkuQ0ZyaWVuZE1lc3NhZ2VzX0dldFJlY2VudE1lc3NhZ2VzX1Jlc3BvbnNlX0ZyaWVuZE1lc3NhZ2USFgoObW9yZV9hdmFpbGFibGUYBCABKAgi4AEKOENGcmllbmRNZXNzYWdlc19HZXRSZWNlbnRNZXNzYWdlc19SZXNwb25zZV9GcmllbmRNZXNzYWdlEhEKCWFjY291bnRpZBgBIAEoDRIRCgl0aW1lc3RhbXAYAiABKA0SDwoHbWVzc2FnZRgDIAEoCRIPCgdvcmRpbmFsGAQgASgNElwKCXJlYWN0aW9ucxgFIAMoCzJJLkNGcmllbmRNZXNzYWdlc19HZXRSZWNlbnRNZXNzYWdlc19SZXNwb25zZV9GcmllbmRNZXNzYWdlX01lc3NhZ2VSZWFjdGlvbiKPAQpIQ0ZyaWVuZE1lc3NhZ2VzX0dldFJlY2VudE1lc3NhZ2VzX1Jlc3BvbnNlX0ZyaWVuZE1lc3NhZ2VfTWVzc2FnZVJlYWN0aW9uEh8KDXJlYWN0aW9uX3R5cGUYASABKAVCCIK1GARlbnVtEhAKCHJlYWN0aW9uGAIgASgJEhAKCHJlYWN0b3JzGAMgAygNIoYCCixDRnJpZW5kTWVzc2FnZXNfSW5jb21pbmdNZXNzYWdlX05vdGlmaWNhdGlvbhIWCg5zdGVhbWlkX2ZyaWVuZBgBIAEoBhIXCg9jaGF0X2VudHJ5X3R5cGUYAiABKAUSHAoUZnJvbV9saW1pdGVkX2FjY291bnQYAyABKAgSDwoHbWVzc2FnZRgEIAEoCRIgChhydGltZTMyX3NlcnZlcl90aW1lc3RhbXAYBSABKAcSDwoHb3JkaW5hbBgGIAEoDRISCgpsb2NhbF9lY2hvGAcgASgIEhkKEW1lc3NhZ2Vfbm9fYmJjb2RlGAggASgJEhQKDGxvd19wcmlvcml0eRgJIAEoCCI8CilDRnJpZW5kTWVzc2FnZXNfSXNJbkZyaWVuZHNVSUJldGFfUmVxdWVzdBIPCgdzdGVhbWlkGAEgASgGImUKKkNGcmllbmRNZXNzYWdlc19Jc0luRnJpZW5kc1VJQmV0YV9SZXNwb25zZRIbChNvbmxpbmVfaW5fZnJpZW5kc3VpGAEgASgIEhoKEmhhc191c2VkX2ZyaWVuZHN1aRgCIAEoCCLFAQosQ0ZyaWVuZE1lc3NhZ2VzX01lc3NhZ2VSZWFjdGlvbl9Ob3RpZmljYXRpb24SFgoOc3RlYW1pZF9mcmllbmQYASABKAYSGAoQc2VydmVyX3RpbWVzdGFtcBgCIAEoDRIPCgdvcmRpbmFsGAMgASgNEg8KB3JlYWN0b3IYBCABKAYSHwoNcmVhY3Rpb25fdHlwZRgFIAEoBUIIgrUYBGVudW0SEAoIcmVhY3Rpb24YBiABKAkSDgoGaXNfYWRkGAcgASgIIvUBCiNDRnJpZW5kTWVzc2FnZXNfU2VuZE1lc3NhZ2VfUmVxdWVzdBIPCgdzdGVhbWlkGAEgASgGEhcKD2NoYXRfZW50cnlfdHlwZRgCIAEoBRIPCgdtZXNzYWdlGAMgASgJEhcKD2NvbnRhaW5zX2JiY29kZRgEIAEoCBIWCg5lY2hvX3RvX3NlbmRlchgFIAEoCBIUCgxsb3dfcHJpb3JpdHkYBiABKAgSFwoPb3ZlcnJpZGVfbGltaXRzGAcgASgIEhkKEWNsaWVudF9tZXNzYWdlX2lkGAggASgJEhgKEGJsb2NrZWRfaW5fY2hpbmEYCSABKAgijAEKJENGcmllbmRNZXNzYWdlc19TZW5kTWVzc2FnZV9SZXNwb25zZRIYChBtb2RpZmllZF9tZXNzYWdlGAEgASgJEhgKEHNlcnZlcl90aW1lc3RhbXAYAiABKA0SDwoHb3JkaW5hbBgDIAEoDRIfChdtZXNzYWdlX3dpdGhvdXRfYmJfY29kZRgEIAEoCSKuAQotQ0ZyaWVuZE1lc3NhZ2VzX1VwZGF0ZU1lc3NhZ2VSZWFjdGlvbl9SZXF1ZXN0Eg8KB3N0ZWFtaWQYASABKAYSGAoQc2VydmVyX3RpbWVzdGFtcBgCIAEoDRIPCgdvcmRpbmFsGAMgASgNEh8KDXJlYWN0aW9uX3R5cGUYBCABKAVCCIK1GARlbnVtEhAKCHJlYWN0aW9uGAUgASgJEg4KBmlzX2FkZBgGIAEoCCJCCi5DRnJpZW5kTWVzc2FnZXNfVXBkYXRlTWVzc2FnZVJlYWN0aW9uX1Jlc3BvbnNlEhAKCHJlYWN0b3JzGAEgAygNInMKMUNGcmllbmRzTWVzc2FnZXNfR2V0QWN0aXZlTWVzc2FnZVNlc3Npb25zX1JlcXVlc3QSGQoRbGFzdG1lc3NhZ2Vfc2luY2UYASABKA0SIwobb25seV9zZXNzaW9uc193aXRoX21lc3NhZ2VzGAIgASgIIqsBCjJDRnJpZW5kc01lc3NhZ2VzX0dldEFjdGl2ZU1lc3NhZ2VTZXNzaW9uc19SZXNwb25zZRJiChBtZXNzYWdlX3Nlc3Npb25zGAEgAygLMkguQ0ZyaWVuZHNNZXNzYWdlc19HZXRBY3RpdmVNZXNzYWdlU2Vzc2lvbnNfUmVzcG9uc2VfRnJpZW5kTWVzc2FnZVNlc3Npb24SEQoJdGltZXN0YW1wGAIgASgNIqoBCkdDRnJpZW5kc01lc3NhZ2VzX0dldEFjdGl2ZU1lc3NhZ2VTZXNzaW9uc19SZXNwb25zZV9GcmllbmRNZXNzYWdlU2Vzc2lvbhIYChBhY2NvdW50aWRfZnJpZW5kGAEgASgNEhQKDGxhc3RfbWVzc2FnZRgCIAEoDRIRCglsYXN0X3ZpZXcYAyABKA0SHAoUdW5yZWFkX21lc3NhZ2VfY291bnQYBCABKA0yjQUKDkZyaWVuZE1lc3NhZ2VzEkMKCkFja01lc3NhZ2USKC5DRnJpZW5kTWVzc2FnZXNfQWNrTWVzc2FnZV9Ob3RpZmljYXRpb24aCy5Ob1Jlc3BvbnNlEoMBChhHZXRBY3RpdmVNZXNzYWdlU2Vzc2lvbnMSMi5DRnJpZW5kc01lc3NhZ2VzX0dldEFjdGl2ZU1lc3NhZ2VTZXNzaW9uc19SZXF1ZXN0GjMuQ0ZyaWVuZHNNZXNzYWdlc19HZXRBY3RpdmVNZXNzYWdlU2Vzc2lvbnNfUmVzcG9uc2USbAoRR2V0UmVjZW50TWVzc2FnZXMSKi5DRnJpZW5kTWVzc2FnZXNfR2V0UmVjZW50TWVzc2FnZXNfUmVxdWVzdBorLkNGcmllbmRNZXNzYWdlc19HZXRSZWNlbnRNZXNzYWdlc19SZXNwb25zZRJsChFJc0luRnJpZW5kc1VJQmV0YRIqLkNGcmllbmRNZXNzYWdlc19Jc0luRnJpZW5kc1VJQmV0YV9SZXF1ZXN0GisuQ0ZyaWVuZE1lc3NhZ2VzX0lzSW5GcmllbmRzVUlCZXRhX1Jlc3BvbnNlEloKC1NlbmRNZXNzYWdlEiQuQ0ZyaWVuZE1lc3NhZ2VzX1NlbmRNZXNzYWdlX1JlcXVlc3QaJS5DRnJpZW5kTWVzc2FnZXNfU2VuZE1lc3NhZ2VfUmVzcG9uc2USeAoVVXBkYXRlTWVzc2FnZVJlYWN0aW9uEi4uQ0ZyaWVuZE1lc3NhZ2VzX1VwZGF0ZU1lc3NhZ2VSZWFjdGlvbl9SZXF1ZXN0Gi8uQ0ZyaWVuZE1lc3NhZ2VzX1VwZGF0ZU1lc3NhZ2VSZWFjdGlvbl9SZXNwb25zZTKDAgoURnJpZW5kTWVzc2FnZXNDbGllbnQSTQoPSW5jb21pbmdNZXNzYWdlEi0uQ0ZyaWVuZE1lc3NhZ2VzX0luY29taW5nTWVzc2FnZV9Ob3RpZmljYXRpb24aCy5Ob1Jlc3BvbnNlEk0KD01lc3NhZ2VSZWFjdGlvbhItLkNGcmllbmRNZXNzYWdlc19NZXNzYWdlUmVhY3Rpb25fTm90aWZpY2F0aW9uGgsuTm9SZXNwb25zZRJNChROb3RpZnlBY2tNZXNzYWdlRWNobxIoLkNGcmllbmRNZXNzYWdlc19BY2tNZXNzYWdlX05vdGlmaWNhdGlvbhoLLk5vUmVzcG9uc2U", [file_web_ui_common_base]);

/**
 * @generated from message CFriendMessages_AckMessage_Notification
 */
export type CFriendMessages_AckMessage_Notification = Message<"CFriendMessages_AckMessage_Notification"> & {
  /**
   * @generated from field: optional fixed64 steamid_partner = 1;
   */
  steamidPartner: bigint;

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp: number;
};

/**
 * @generated from message CFriendMessages_AckMessage_Notification
 */
export type CFriendMessages_AckMessage_NotificationJson = {
  /**
   * @generated from field: optional fixed64 steamid_partner = 1;
   */
  steamidPartner?: string;

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp?: number;
};

/**
 * Describes the message CFriendMessages_AckMessage_Notification.
 * Use `create(CFriendMessages_AckMessage_NotificationSchema)` to create a new message.
 */
export const CFriendMessages_AckMessage_NotificationSchema: GenMessage<CFriendMessages_AckMessage_Notification, CFriendMessages_AckMessage_NotificationJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 0);

/**
 * @generated from message CFriendMessages_GetRecentMessages_Request
 */
export type CFriendMessages_GetRecentMessages_Request = Message<"CFriendMessages_GetRecentMessages_Request"> & {
  /**
   * @generated from field: optional fixed64 steamid1 = 1;
   */
  steamid1: bigint;

  /**
   * @generated from field: optional fixed64 steamid2 = 2;
   */
  steamid2: bigint;

  /**
   * @generated from field: optional uint32 count = 3;
   */
  count: number;

  /**
   * @generated from field: optional bool most_recent_conversation = 4;
   */
  mostRecentConversation: boolean;

  /**
   * @generated from field: optional fixed32 rtime32_start_time = 5;
   */
  rtime32StartTime: number;

  /**
   * @generated from field: optional bool bbcode_format = 6;
   */
  bbcodeFormat: boolean;

  /**
   * @generated from field: optional uint32 start_ordinal = 7;
   */
  startOrdinal: number;

  /**
   * @generated from field: optional uint32 time_last = 8;
   */
  timeLast: number;

  /**
   * @generated from field: optional uint32 ordinal_last = 9;
   */
  ordinalLast: number;
};

/**
 * @generated from message CFriendMessages_GetRecentMessages_Request
 */
export type CFriendMessages_GetRecentMessages_RequestJson = {
  /**
   * @generated from field: optional fixed64 steamid1 = 1;
   */
  steamid1?: string;

  /**
   * @generated from field: optional fixed64 steamid2 = 2;
   */
  steamid2?: string;

  /**
   * @generated from field: optional uint32 count = 3;
   */
  count?: number;

  /**
   * @generated from field: optional bool most_recent_conversation = 4;
   */
  mostRecentConversation?: boolean;

  /**
   * @generated from field: optional fixed32 rtime32_start_time = 5;
   */
  rtime32StartTime?: number;

  /**
   * @generated from field: optional bool bbcode_format = 6;
   */
  bbcodeFormat?: boolean;

  /**
   * @generated from field: optional uint32 start_ordinal = 7;
   */
  startOrdinal?: number;

  /**
   * @generated from field: optional uint32 time_last = 8;
   */
  timeLast?: number;

  /**
   * @generated from field: optional uint32 ordinal_last = 9;
   */
  ordinalLast?: number;
};

/**
 * Describes the message CFriendMessages_GetRecentMessages_Request.
 * Use `create(CFriendMessages_GetRecentMessages_RequestSchema)` to create a new message.
 */
export const CFriendMessages_GetRecentMessages_RequestSchema: GenMessage<CFriendMessages_GetRecentMessages_Request, CFriendMessages_GetRecentMessages_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 1);

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response
 */
export type CFriendMessages_GetRecentMessages_Response = Message<"CFriendMessages_GetRecentMessages_Response"> & {
  /**
   * @generated from field: repeated CFriendMessages_GetRecentMessages_Response_FriendMessage messages = 1;
   */
  messages: CFriendMessages_GetRecentMessages_Response_FriendMessage[];

  /**
   * @generated from field: optional bool more_available = 4;
   */
  moreAvailable: boolean;
};

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response
 */
export type CFriendMessages_GetRecentMessages_ResponseJson = {
  /**
   * @generated from field: repeated CFriendMessages_GetRecentMessages_Response_FriendMessage messages = 1;
   */
  messages?: CFriendMessages_GetRecentMessages_Response_FriendMessageJson[];

  /**
   * @generated from field: optional bool more_available = 4;
   */
  moreAvailable?: boolean;
};

/**
 * Describes the message CFriendMessages_GetRecentMessages_Response.
 * Use `create(CFriendMessages_GetRecentMessages_ResponseSchema)` to create a new message.
 */
export const CFriendMessages_GetRecentMessages_ResponseSchema: GenMessage<CFriendMessages_GetRecentMessages_Response, CFriendMessages_GetRecentMessages_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 2);

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response_FriendMessage
 */
export type CFriendMessages_GetRecentMessages_Response_FriendMessage = Message<"CFriendMessages_GetRecentMessages_Response_FriendMessage"> & {
  /**
   * @generated from field: optional uint32 accountid = 1;
   */
  accountid: number;

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp: number;

  /**
   * @generated from field: optional string message = 3;
   */
  message: string;

  /**
   * @generated from field: optional uint32 ordinal = 4;
   */
  ordinal: number;

  /**
   * @generated from field: repeated CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction reactions = 5;
   */
  reactions: CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction[];
};

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response_FriendMessage
 */
export type CFriendMessages_GetRecentMessages_Response_FriendMessageJson = {
  /**
   * @generated from field: optional uint32 accountid = 1;
   */
  accountid?: number;

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp?: number;

  /**
   * @generated from field: optional string message = 3;
   */
  message?: string;

  /**
   * @generated from field: optional uint32 ordinal = 4;
   */
  ordinal?: number;

  /**
   * @generated from field: repeated CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction reactions = 5;
   */
  reactions?: CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReactionJson[];
};

/**
 * Describes the message CFriendMessages_GetRecentMessages_Response_FriendMessage.
 * Use `create(CFriendMessages_GetRecentMessages_Response_FriendMessageSchema)` to create a new message.
 */
export const CFriendMessages_GetRecentMessages_Response_FriendMessageSchema: GenMessage<CFriendMessages_GetRecentMessages_Response_FriendMessage, CFriendMessages_GetRecentMessages_Response_FriendMessageJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 3);

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction
 */
export type CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction = Message<"CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction"> & {
  /**
   * @generated from field: optional int32 reaction_type = 1;
   */
  reactionType: number;

  /**
   * @generated from field: optional string reaction = 2;
   */
  reaction: string;

  /**
   * @generated from field: repeated uint32 reactors = 3;
   */
  reactors: number[];
};

/**
 * @generated from message CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction
 */
export type CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReactionJson = {
  /**
   * @generated from field: optional int32 reaction_type = 1;
   */
  reactionType?: number;

  /**
   * @generated from field: optional string reaction = 2;
   */
  reaction?: string;

  /**
   * @generated from field: repeated uint32 reactors = 3;
   */
  reactors?: number[];
};

/**
 * Describes the message CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction.
 * Use `create(CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReactionSchema)` to create a new message.
 */
export const CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReactionSchema: GenMessage<CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction, CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReactionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 4);

/**
 * @generated from message CFriendMessages_IncomingMessage_Notification
 */
export type CFriendMessages_IncomingMessage_Notification = Message<"CFriendMessages_IncomingMessage_Notification"> & {
  /**
   * @generated from field: optional fixed64 steamid_friend = 1;
   */
  steamidFriend: bigint;

  /**
   * @generated from field: optional int32 chat_entry_type = 2;
   */
  chatEntryType: number;

  /**
   * @generated from field: optional bool from_limited_account = 3;
   */
  fromLimitedAccount: boolean;

  /**
   * @generated from field: optional string message = 4;
   */
  message: string;

  /**
   * @generated from field: optional fixed32 rtime32_server_timestamp = 5;
   */
  rtime32ServerTimestamp: number;

  /**
   * @generated from field: optional uint32 ordinal = 6;
   */
  ordinal: number;

  /**
   * @generated from field: optional bool local_echo = 7;
   */
  localEcho: boolean;

  /**
   * @generated from field: optional string message_no_bbcode = 8;
   */
  messageNoBbcode: string;

  /**
   * @generated from field: optional bool low_priority = 9;
   */
  lowPriority: boolean;
};

/**
 * @generated from message CFriendMessages_IncomingMessage_Notification
 */
export type CFriendMessages_IncomingMessage_NotificationJson = {
  /**
   * @generated from field: optional fixed64 steamid_friend = 1;
   */
  steamidFriend?: string;

  /**
   * @generated from field: optional int32 chat_entry_type = 2;
   */
  chatEntryType?: number;

  /**
   * @generated from field: optional bool from_limited_account = 3;
   */
  fromLimitedAccount?: boolean;

  /**
   * @generated from field: optional string message = 4;
   */
  message?: string;

  /**
   * @generated from field: optional fixed32 rtime32_server_timestamp = 5;
   */
  rtime32ServerTimestamp?: number;

  /**
   * @generated from field: optional uint32 ordinal = 6;
   */
  ordinal?: number;

  /**
   * @generated from field: optional bool local_echo = 7;
   */
  localEcho?: boolean;

  /**
   * @generated from field: optional string message_no_bbcode = 8;
   */
  messageNoBbcode?: string;

  /**
   * @generated from field: optional bool low_priority = 9;
   */
  lowPriority?: boolean;
};

/**
 * Describes the message CFriendMessages_IncomingMessage_Notification.
 * Use `create(CFriendMessages_IncomingMessage_NotificationSchema)` to create a new message.
 */
export const CFriendMessages_IncomingMessage_NotificationSchema: GenMessage<CFriendMessages_IncomingMessage_Notification, CFriendMessages_IncomingMessage_NotificationJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 5);

/**
 * @generated from message CFriendMessages_IsInFriendsUIBeta_Request
 */
export type CFriendMessages_IsInFriendsUIBeta_Request = Message<"CFriendMessages_IsInFriendsUIBeta_Request"> & {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid: bigint;
};

/**
 * @generated from message CFriendMessages_IsInFriendsUIBeta_Request
 */
export type CFriendMessages_IsInFriendsUIBeta_RequestJson = {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid?: string;
};

/**
 * Describes the message CFriendMessages_IsInFriendsUIBeta_Request.
 * Use `create(CFriendMessages_IsInFriendsUIBeta_RequestSchema)` to create a new message.
 */
export const CFriendMessages_IsInFriendsUIBeta_RequestSchema: GenMessage<CFriendMessages_IsInFriendsUIBeta_Request, CFriendMessages_IsInFriendsUIBeta_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 6);

/**
 * @generated from message CFriendMessages_IsInFriendsUIBeta_Response
 */
export type CFriendMessages_IsInFriendsUIBeta_Response = Message<"CFriendMessages_IsInFriendsUIBeta_Response"> & {
  /**
   * @generated from field: optional bool online_in_friendsui = 1;
   */
  onlineInFriendsui: boolean;

  /**
   * @generated from field: optional bool has_used_friendsui = 2;
   */
  hasUsedFriendsui: boolean;
};

/**
 * @generated from message CFriendMessages_IsInFriendsUIBeta_Response
 */
export type CFriendMessages_IsInFriendsUIBeta_ResponseJson = {
  /**
   * @generated from field: optional bool online_in_friendsui = 1;
   */
  onlineInFriendsui?: boolean;

  /**
   * @generated from field: optional bool has_used_friendsui = 2;
   */
  hasUsedFriendsui?: boolean;
};

/**
 * Describes the message CFriendMessages_IsInFriendsUIBeta_Response.
 * Use `create(CFriendMessages_IsInFriendsUIBeta_ResponseSchema)` to create a new message.
 */
export const CFriendMessages_IsInFriendsUIBeta_ResponseSchema: GenMessage<CFriendMessages_IsInFriendsUIBeta_Response, CFriendMessages_IsInFriendsUIBeta_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 7);

/**
 * @generated from message CFriendMessages_MessageReaction_Notification
 */
export type CFriendMessages_MessageReaction_Notification = Message<"CFriendMessages_MessageReaction_Notification"> & {
  /**
   * @generated from field: optional fixed64 steamid_friend = 1;
   */
  steamidFriend: bigint;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal: number;

  /**
   * @generated from field: optional fixed64 reactor = 4;
   */
  reactor: bigint;

  /**
   * @generated from field: optional int32 reaction_type = 5;
   */
  reactionType: number;

  /**
   * @generated from field: optional string reaction = 6;
   */
  reaction: string;

  /**
   * @generated from field: optional bool is_add = 7;
   */
  isAdd: boolean;
};

/**
 * @generated from message CFriendMessages_MessageReaction_Notification
 */
export type CFriendMessages_MessageReaction_NotificationJson = {
  /**
   * @generated from field: optional fixed64 steamid_friend = 1;
   */
  steamidFriend?: string;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp?: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal?: number;

  /**
   * @generated from field: optional fixed64 reactor = 4;
   */
  reactor?: string;

  /**
   * @generated from field: optional int32 reaction_type = 5;
   */
  reactionType?: number;

  /**
   * @generated from field: optional string reaction = 6;
   */
  reaction?: string;

  /**
   * @generated from field: optional bool is_add = 7;
   */
  isAdd?: boolean;
};

/**
 * Describes the message CFriendMessages_MessageReaction_Notification.
 * Use `create(CFriendMessages_MessageReaction_NotificationSchema)` to create a new message.
 */
export const CFriendMessages_MessageReaction_NotificationSchema: GenMessage<CFriendMessages_MessageReaction_Notification, CFriendMessages_MessageReaction_NotificationJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 8);

/**
 * @generated from message CFriendMessages_SendMessage_Request
 */
export type CFriendMessages_SendMessage_Request = Message<"CFriendMessages_SendMessage_Request"> & {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid: bigint;

  /**
   * @generated from field: optional int32 chat_entry_type = 2;
   */
  chatEntryType: number;

  /**
   * @generated from field: optional string message = 3;
   */
  message: string;

  /**
   * @generated from field: optional bool contains_bbcode = 4;
   */
  containsBbcode: boolean;

  /**
   * @generated from field: optional bool echo_to_sender = 5;
   */
  echoToSender: boolean;

  /**
   * @generated from field: optional bool low_priority = 6;
   */
  lowPriority: boolean;

  /**
   * @generated from field: optional bool override_limits = 7;
   */
  overrideLimits: boolean;

  /**
   * @generated from field: optional string client_message_id = 8;
   */
  clientMessageId: string;

  /**
   * @generated from field: optional bool blocked_in_china = 9;
   */
  blockedInChina: boolean;
};

/**
 * @generated from message CFriendMessages_SendMessage_Request
 */
export type CFriendMessages_SendMessage_RequestJson = {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid?: string;

  /**
   * @generated from field: optional int32 chat_entry_type = 2;
   */
  chatEntryType?: number;

  /**
   * @generated from field: optional string message = 3;
   */
  message?: string;

  /**
   * @generated from field: optional bool contains_bbcode = 4;
   */
  containsBbcode?: boolean;

  /**
   * @generated from field: optional bool echo_to_sender = 5;
   */
  echoToSender?: boolean;

  /**
   * @generated from field: optional bool low_priority = 6;
   */
  lowPriority?: boolean;

  /**
   * @generated from field: optional bool override_limits = 7;
   */
  overrideLimits?: boolean;

  /**
   * @generated from field: optional string client_message_id = 8;
   */
  clientMessageId?: string;

  /**
   * @generated from field: optional bool blocked_in_china = 9;
   */
  blockedInChina?: boolean;
};

/**
 * Describes the message CFriendMessages_SendMessage_Request.
 * Use `create(CFriendMessages_SendMessage_RequestSchema)` to create a new message.
 */
export const CFriendMessages_SendMessage_RequestSchema: GenMessage<CFriendMessages_SendMessage_Request, CFriendMessages_SendMessage_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 9);

/**
 * @generated from message CFriendMessages_SendMessage_Response
 */
export type CFriendMessages_SendMessage_Response = Message<"CFriendMessages_SendMessage_Response"> & {
  /**
   * @generated from field: optional string modified_message = 1;
   */
  modifiedMessage: string;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal: number;

  /**
   * @generated from field: optional string message_without_bb_code = 4;
   */
  messageWithoutBbCode: string;
};

/**
 * @generated from message CFriendMessages_SendMessage_Response
 */
export type CFriendMessages_SendMessage_ResponseJson = {
  /**
   * @generated from field: optional string modified_message = 1;
   */
  modifiedMessage?: string;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp?: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal?: number;

  /**
   * @generated from field: optional string message_without_bb_code = 4;
   */
  messageWithoutBbCode?: string;
};

/**
 * Describes the message CFriendMessages_SendMessage_Response.
 * Use `create(CFriendMessages_SendMessage_ResponseSchema)` to create a new message.
 */
export const CFriendMessages_SendMessage_ResponseSchema: GenMessage<CFriendMessages_SendMessage_Response, CFriendMessages_SendMessage_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 10);

/**
 * @generated from message CFriendMessages_UpdateMessageReaction_Request
 */
export type CFriendMessages_UpdateMessageReaction_Request = Message<"CFriendMessages_UpdateMessageReaction_Request"> & {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid: bigint;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal: number;

  /**
   * @generated from field: optional int32 reaction_type = 4;
   */
  reactionType: number;

  /**
   * @generated from field: optional string reaction = 5;
   */
  reaction: string;

  /**
   * @generated from field: optional bool is_add = 6;
   */
  isAdd: boolean;
};

/**
 * @generated from message CFriendMessages_UpdateMessageReaction_Request
 */
export type CFriendMessages_UpdateMessageReaction_RequestJson = {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid?: string;

  /**
   * @generated from field: optional uint32 server_timestamp = 2;
   */
  serverTimestamp?: number;

  /**
   * @generated from field: optional uint32 ordinal = 3;
   */
  ordinal?: number;

  /**
   * @generated from field: optional int32 reaction_type = 4;
   */
  reactionType?: number;

  /**
   * @generated from field: optional string reaction = 5;
   */
  reaction?: string;

  /**
   * @generated from field: optional bool is_add = 6;
   */
  isAdd?: boolean;
};

/**
 * Describes the message CFriendMessages_UpdateMessageReaction_Request.
 * Use `create(CFriendMessages_UpdateMessageReaction_RequestSchema)` to create a new message.
 */
export const CFriendMessages_UpdateMessageReaction_RequestSchema: GenMessage<CFriendMessages_UpdateMessageReaction_Request, CFriendMessages_UpdateMessageReaction_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 11);

/**
 * @generated from message CFriendMessages_UpdateMessageReaction_Response
 */
export type CFriendMessages_UpdateMessageReaction_Response = Message<"CFriendMessages_UpdateMessageReaction_Response"> & {
  /**
   * @generated from field: repeated uint32 reactors = 1;
   */
  reactors: number[];
};

/**
 * @generated from message CFriendMessages_UpdateMessageReaction_Response
 */
export type CFriendMessages_UpdateMessageReaction_ResponseJson = {
  /**
   * @generated from field: repeated uint32 reactors = 1;
   */
  reactors?: number[];
};

/**
 * Describes the message CFriendMessages_UpdateMessageReaction_Response.
 * Use `create(CFriendMessages_UpdateMessageReaction_ResponseSchema)` to create a new message.
 */
export const CFriendMessages_UpdateMessageReaction_ResponseSchema: GenMessage<CFriendMessages_UpdateMessageReaction_Response, CFriendMessages_UpdateMessageReaction_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 12);

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Request
 */
export type CFriendsMessages_GetActiveMessageSessions_Request = Message<"CFriendsMessages_GetActiveMessageSessions_Request"> & {
  /**
   * @generated from field: optional uint32 lastmessage_since = 1;
   */
  lastmessageSince: number;

  /**
   * @generated from field: optional bool only_sessions_with_messages = 2;
   */
  onlySessionsWithMessages: boolean;
};

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Request
 */
export type CFriendsMessages_GetActiveMessageSessions_RequestJson = {
  /**
   * @generated from field: optional uint32 lastmessage_since = 1;
   */
  lastmessageSince?: number;

  /**
   * @generated from field: optional bool only_sessions_with_messages = 2;
   */
  onlySessionsWithMessages?: boolean;
};

/**
 * Describes the message CFriendsMessages_GetActiveMessageSessions_Request.
 * Use `create(CFriendsMessages_GetActiveMessageSessions_RequestSchema)` to create a new message.
 */
export const CFriendsMessages_GetActiveMessageSessions_RequestSchema: GenMessage<CFriendsMessages_GetActiveMessageSessions_Request, CFriendsMessages_GetActiveMessageSessions_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 13);

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Response
 */
export type CFriendsMessages_GetActiveMessageSessions_Response = Message<"CFriendsMessages_GetActiveMessageSessions_Response"> & {
  /**
   * @generated from field: repeated CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession message_sessions = 1;
   */
  messageSessions: CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession[];

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp: number;
};

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Response
 */
export type CFriendsMessages_GetActiveMessageSessions_ResponseJson = {
  /**
   * @generated from field: repeated CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession message_sessions = 1;
   */
  messageSessions?: CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSessionJson[];

  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp?: number;
};

/**
 * Describes the message CFriendsMessages_GetActiveMessageSessions_Response.
 * Use `create(CFriendsMessages_GetActiveMessageSessions_ResponseSchema)` to create a new message.
 */
export const CFriendsMessages_GetActiveMessageSessions_ResponseSchema: GenMessage<CFriendsMessages_GetActiveMessageSessions_Response, CFriendsMessages_GetActiveMessageSessions_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 14);

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession
 */
export type CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession = Message<"CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession"> & {
  /**
   * @generated from field: optional uint32 accountid_friend = 1;
   */
  accountidFriend: number;

  /**
   * @generated from field: optional uint32 last_message = 2;
   */
  lastMessage: number;

  /**
   * @generated from field: optional uint32 last_view = 3;
   */
  lastView: number;

  /**
   * @generated from field: optional uint32 unread_message_count = 4;
   */
  unreadMessageCount: number;
};

/**
 * @generated from message CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession
 */
export type CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSessionJson = {
  /**
   * @generated from field: optional uint32 accountid_friend = 1;
   */
  accountidFriend?: number;

  /**
   * @generated from field: optional uint32 last_message = 2;
   */
  lastMessage?: number;

  /**
   * @generated from field: optional uint32 last_view = 3;
   */
  lastView?: number;

  /**
   * @generated from field: optional uint32 unread_message_count = 4;
   */
  unreadMessageCount?: number;
};

/**
 * Describes the message CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession.
 * Use `create(CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSessionSchema)` to create a new message.
 */
export const CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSessionSchema: GenMessage<CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession, CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSessionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_friendmessages, 15);

/**
 * @generated from service FriendMessages
 */
export const FriendMessages: GenService<{
  /**
   * @generated from rpc FriendMessages.AckMessage
   */
  ackMessage: {
    methodKind: "unary";
    input: typeof CFriendMessages_AckMessage_NotificationSchema;
    output: typeof NoResponseSchema;
  },
  /**
   * @generated from rpc FriendMessages.GetActiveMessageSessions
   */
  getActiveMessageSessions: {
    methodKind: "unary";
    input: typeof CFriendsMessages_GetActiveMessageSessions_RequestSchema;
    output: typeof CFriendsMessages_GetActiveMessageSessions_ResponseSchema;
  },
  /**
   * @generated from rpc FriendMessages.GetRecentMessages
   */
  getRecentMessages: {
    methodKind: "unary";
    input: typeof CFriendMessages_GetRecentMessages_RequestSchema;
    output: typeof CFriendMessages_GetRecentMessages_ResponseSchema;
  },
  /**
   * @generated from rpc FriendMessages.IsInFriendsUIBeta
   */
  isInFriendsUIBeta: {
    methodKind: "unary";
    input: typeof CFriendMessages_IsInFriendsUIBeta_RequestSchema;
    output: typeof CFriendMessages_IsInFriendsUIBeta_ResponseSchema;
  },
  /**
   * @generated from rpc FriendMessages.SendMessage
   */
  sendMessage: {
    methodKind: "unary";
    input: typeof CFriendMessages_SendMessage_RequestSchema;
    output: typeof CFriendMessages_SendMessage_ResponseSchema;
  },
  /**
   * @generated from rpc FriendMessages.UpdateMessageReaction
   */
  updateMessageReaction: {
    methodKind: "unary";
    input: typeof CFriendMessages_UpdateMessageReaction_RequestSchema;
    output: typeof CFriendMessages_UpdateMessageReaction_ResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_friendmessages, 0);

/**
 * @generated from service FriendMessagesClient
 */
export const FriendMessagesClient: GenService<{
  /**
   * @generated from rpc FriendMessagesClient.IncomingMessage
   */
  incomingMessage: {
    methodKind: "unary";
    input: typeof CFriendMessages_IncomingMessage_NotificationSchema;
    output: typeof NoResponseSchema;
  },
  /**
   * @generated from rpc FriendMessagesClient.MessageReaction
   */
  messageReaction: {
    methodKind: "unary";
    input: typeof CFriendMessages_MessageReaction_NotificationSchema;
    output: typeof NoResponseSchema;
  },
  /**
   * @generated from rpc FriendMessagesClient.NotifyAckMessageEcho
   */
  notifyAckMessageEcho: {
    methodKind: "unary";
    input: typeof CFriendMessages_AckMessage_NotificationSchema;
    output: typeof NoResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_friendmessages, 1);
