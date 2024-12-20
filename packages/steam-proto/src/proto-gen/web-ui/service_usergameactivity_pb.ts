// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_usergameactivity.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_web_ui_common_base } from "./common_base_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file web-ui/service_usergameactivity.proto.
 */
export const file_web_ui_service_usergameactivity: GenFile = /*@__PURE__*/
  fileDesc("CiV3ZWItdWkvc2VydmljZV91c2VyZ2FtZWFjdGl2aXR5LnByb3RvIvQBChdDVXNlckdhbWVBY3Rpdml0eV9FdmVudBIRCgl0aW1lc3RhbXAYAiABKA0SHAoKZXZlbnRfdHlwZRgDIAEoBUIIgrUYBGVudW0SFgoOZXZlbnRfc3ViX3R5cGUYBCABKA0SDQoFZGF0YTEYBSABKAMSDQoFZGF0YTIYBiABKAMSDQoFZGF0YTMYByABKAMSDQoFZGF0YTQYCCABKAMSEgoKaXRlbV9hcHBpZBgKIAEoDRIWCg5pdGVtX2NvbnRleHRpZBgLIAEoBBIUCgxpdGVtX2Fzc2V0aWQYDCABKAQSEgoKcHJvdG9fZGF0YRgNIAEoDCJ6CiVDVXNlckdhbWVBY3Rpdml0eV9HZXRBY3Rpdml0eV9SZXF1ZXN0Eg8KB3N0ZWFtaWQYASABKAYSDQoFYXBwaWQYAiABKA0SDQoFY291bnQYAyABKAUSEQoJc3RhcnR0aW1lGAQgASgNEg8KB2VuZHRpbWUYBSABKA0icgomQ1VzZXJHYW1lQWN0aXZpdHlfR2V0QWN0aXZpdHlfUmVzcG9uc2USDwoHc3RlYW1pZBgBIAEoBhINCgVhcHBpZBgCIAEoDRIoCgZldmVudHMYAyADKAsyGC5DVXNlckdhbWVBY3Rpdml0eV9FdmVudDJyChBVc2VyR2FtZUFjdGl2aXR5El4KC0dldEFjdGl2aXR5EiYuQ1VzZXJHYW1lQWN0aXZpdHlfR2V0QWN0aXZpdHlfUmVxdWVzdBonLkNVc2VyR2FtZUFjdGl2aXR5X0dldEFjdGl2aXR5X1Jlc3BvbnNl", [file_web_ui_common_base]);

/**
 * @generated from message CUserGameActivity_Event
 */
export type CUserGameActivity_Event = Message<"CUserGameActivity_Event"> & {
  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp: number;

  /**
   * @generated from field: optional int32 event_type = 3;
   */
  eventType: number;

  /**
   * @generated from field: optional uint32 event_sub_type = 4;
   */
  eventSubType: number;

  /**
   * @generated from field: optional int64 data1 = 5;
   */
  data1: bigint;

  /**
   * @generated from field: optional int64 data2 = 6;
   */
  data2: bigint;

  /**
   * @generated from field: optional int64 data3 = 7;
   */
  data3: bigint;

  /**
   * @generated from field: optional int64 data4 = 8;
   */
  data4: bigint;

  /**
   * @generated from field: optional uint32 item_appid = 10;
   */
  itemAppid: number;

  /**
   * @generated from field: optional uint64 item_contextid = 11;
   */
  itemContextid: bigint;

  /**
   * @generated from field: optional uint64 item_assetid = 12;
   */
  itemAssetid: bigint;

  /**
   * @generated from field: optional bytes proto_data = 13;
   */
  protoData: Uint8Array;
};

/**
 * @generated from message CUserGameActivity_Event
 */
export type CUserGameActivity_EventJson = {
  /**
   * @generated from field: optional uint32 timestamp = 2;
   */
  timestamp?: number;

  /**
   * @generated from field: optional int32 event_type = 3;
   */
  eventType?: number;

  /**
   * @generated from field: optional uint32 event_sub_type = 4;
   */
  eventSubType?: number;

  /**
   * @generated from field: optional int64 data1 = 5;
   */
  data1?: string;

  /**
   * @generated from field: optional int64 data2 = 6;
   */
  data2?: string;

  /**
   * @generated from field: optional int64 data3 = 7;
   */
  data3?: string;

  /**
   * @generated from field: optional int64 data4 = 8;
   */
  data4?: string;

  /**
   * @generated from field: optional uint32 item_appid = 10;
   */
  itemAppid?: number;

  /**
   * @generated from field: optional uint64 item_contextid = 11;
   */
  itemContextid?: string;

  /**
   * @generated from field: optional uint64 item_assetid = 12;
   */
  itemAssetid?: string;

  /**
   * @generated from field: optional bytes proto_data = 13;
   */
  protoData?: string;
};

/**
 * Describes the message CUserGameActivity_Event.
 * Use `create(CUserGameActivity_EventSchema)` to create a new message.
 */
export const CUserGameActivity_EventSchema: GenMessage<CUserGameActivity_Event, CUserGameActivity_EventJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_usergameactivity, 0);

/**
 * @generated from message CUserGameActivity_GetActivity_Request
 */
export type CUserGameActivity_GetActivity_Request = Message<"CUserGameActivity_GetActivity_Request"> & {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid: bigint;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid: number;

  /**
   * @generated from field: optional int32 count = 3;
   */
  count: number;

  /**
   * @generated from field: optional uint32 starttime = 4;
   */
  starttime: number;

  /**
   * @generated from field: optional uint32 endtime = 5;
   */
  endtime: number;
};

/**
 * @generated from message CUserGameActivity_GetActivity_Request
 */
export type CUserGameActivity_GetActivity_RequestJson = {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid?: string;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid?: number;

  /**
   * @generated from field: optional int32 count = 3;
   */
  count?: number;

  /**
   * @generated from field: optional uint32 starttime = 4;
   */
  starttime?: number;

  /**
   * @generated from field: optional uint32 endtime = 5;
   */
  endtime?: number;
};

/**
 * Describes the message CUserGameActivity_GetActivity_Request.
 * Use `create(CUserGameActivity_GetActivity_RequestSchema)` to create a new message.
 */
export const CUserGameActivity_GetActivity_RequestSchema: GenMessage<CUserGameActivity_GetActivity_Request, CUserGameActivity_GetActivity_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_usergameactivity, 1);

/**
 * @generated from message CUserGameActivity_GetActivity_Response
 */
export type CUserGameActivity_GetActivity_Response = Message<"CUserGameActivity_GetActivity_Response"> & {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid: bigint;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid: number;

  /**
   * @generated from field: repeated CUserGameActivity_Event events = 3;
   */
  events: CUserGameActivity_Event[];
};

/**
 * @generated from message CUserGameActivity_GetActivity_Response
 */
export type CUserGameActivity_GetActivity_ResponseJson = {
  /**
   * @generated from field: optional fixed64 steamid = 1;
   */
  steamid?: string;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid?: number;

  /**
   * @generated from field: repeated CUserGameActivity_Event events = 3;
   */
  events?: CUserGameActivity_EventJson[];
};

/**
 * Describes the message CUserGameActivity_GetActivity_Response.
 * Use `create(CUserGameActivity_GetActivity_ResponseSchema)` to create a new message.
 */
export const CUserGameActivity_GetActivity_ResponseSchema: GenMessage<CUserGameActivity_GetActivity_Response, CUserGameActivity_GetActivity_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_usergameactivity, 2);

/**
 * @generated from service UserGameActivity
 */
export const UserGameActivity: GenService<{
  /**
   * @generated from rpc UserGameActivity.GetActivity
   */
  getActivity: {
    methodKind: "unary";
    input: typeof CUserGameActivity_GetActivity_RequestSchema;
    output: typeof CUserGameActivity_GetActivity_ResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_usergameactivity, 0);

