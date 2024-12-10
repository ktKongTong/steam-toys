// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_achievements.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file web-ui/service_achievements.proto.
 */
export const file_web_ui_service_achievements: GenFile = /*@__PURE__*/
  fileDesc("CiF3ZWItdWkvc2VydmljZV9hY2hpZXZlbWVudHMucHJvdG8iLwodQ0FjaGlldmVtZW50c19HZXRJbmZvX1JlcXVlc3QSDgoGZ2FtZWlkGAEgASgEIlwKHkNBY2hpZXZlbWVudHNfR2V0SW5mb19SZXNwb25zZRI6CgxhY2hpZXZlbWVudHMYASADKAsyJC5DQWNoaWV2ZW1lbnRzX0dldEluZm9fUmVzcG9uc2VfSW5mbyKwAQojQ0FjaGlldmVtZW50c19HZXRJbmZvX1Jlc3BvbnNlX0luZm8SCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRIMCgRkZXNjGAMgASgJEhoKEmltYWdlX3VybF9hY2hpZXZlZBgEIAEoCRIeChZpbWFnZV91cmxfbm90X2FjaGlldmVkGAUgASgJEhAKCGFjaGlldmVkGAYgASgIEhMKC3VubG9ja190aW1lGAcgASgNMloKDEFjaGlldmVtZW50cxJKCgdHZXRJbmZvEh4uQ0FjaGlldmVtZW50c19HZXRJbmZvX1JlcXVlc3QaHy5DQWNoaWV2ZW1lbnRzX0dldEluZm9fUmVzcG9uc2U");

/**
 * @generated from message CAchievements_GetInfo_Request
 */
export type CAchievements_GetInfo_Request = Message<"CAchievements_GetInfo_Request"> & {
  /**
   * @generated from field: optional uint64 gameid = 1;
   */
  gameid: bigint;
};

/**
 * @generated from message CAchievements_GetInfo_Request
 */
export type CAchievements_GetInfo_RequestJson = {
  /**
   * @generated from field: optional uint64 gameid = 1;
   */
  gameid?: string;
};

/**
 * Describes the message CAchievements_GetInfo_Request.
 * Use `create(CAchievements_GetInfo_RequestSchema)` to create a new message.
 */
export const CAchievements_GetInfo_RequestSchema: GenMessage<CAchievements_GetInfo_Request, CAchievements_GetInfo_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_achievements, 0);

/**
 * @generated from message CAchievements_GetInfo_Response
 */
export type CAchievements_GetInfo_Response = Message<"CAchievements_GetInfo_Response"> & {
  /**
   * @generated from field: repeated CAchievements_GetInfo_Response_Info achievements = 1;
   */
  achievements: CAchievements_GetInfo_Response_Info[];
};

/**
 * @generated from message CAchievements_GetInfo_Response
 */
export type CAchievements_GetInfo_ResponseJson = {
  /**
   * @generated from field: repeated CAchievements_GetInfo_Response_Info achievements = 1;
   */
  achievements?: CAchievements_GetInfo_Response_InfoJson[];
};

/**
 * Describes the message CAchievements_GetInfo_Response.
 * Use `create(CAchievements_GetInfo_ResponseSchema)` to create a new message.
 */
export const CAchievements_GetInfo_ResponseSchema: GenMessage<CAchievements_GetInfo_Response, CAchievements_GetInfo_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_achievements, 1);

/**
 * @generated from message CAchievements_GetInfo_Response_Info
 */
export type CAchievements_GetInfo_Response_Info = Message<"CAchievements_GetInfo_Response_Info"> & {
  /**
   * @generated from field: optional string id = 1;
   */
  id: string;

  /**
   * @generated from field: optional string name = 2;
   */
  name: string;

  /**
   * @generated from field: optional string desc = 3;
   */
  desc: string;

  /**
   * @generated from field: optional string image_url_achieved = 4;
   */
  imageUrlAchieved: string;

  /**
   * @generated from field: optional string image_url_not_achieved = 5;
   */
  imageUrlNotAchieved: string;

  /**
   * @generated from field: optional bool achieved = 6;
   */
  achieved: boolean;

  /**
   * @generated from field: optional uint32 unlock_time = 7;
   */
  unlockTime: number;
};

/**
 * @generated from message CAchievements_GetInfo_Response_Info
 */
export type CAchievements_GetInfo_Response_InfoJson = {
  /**
   * @generated from field: optional string id = 1;
   */
  id?: string;

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * @generated from field: optional string desc = 3;
   */
  desc?: string;

  /**
   * @generated from field: optional string image_url_achieved = 4;
   */
  imageUrlAchieved?: string;

  /**
   * @generated from field: optional string image_url_not_achieved = 5;
   */
  imageUrlNotAchieved?: string;

  /**
   * @generated from field: optional bool achieved = 6;
   */
  achieved?: boolean;

  /**
   * @generated from field: optional uint32 unlock_time = 7;
   */
  unlockTime?: number;
};

/**
 * Describes the message CAchievements_GetInfo_Response_Info.
 * Use `create(CAchievements_GetInfo_Response_InfoSchema)` to create a new message.
 */
export const CAchievements_GetInfo_Response_InfoSchema: GenMessage<CAchievements_GetInfo_Response_Info, CAchievements_GetInfo_Response_InfoJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_achievements, 2);

/**
 * @generated from service Achievements
 */
export const Achievements: GenService<{
  /**
   * @generated from rpc Achievements.GetInfo
   */
  getInfo: {
    methodKind: "unary";
    input: typeof CAchievements_GetInfo_RequestSchema;
    output: typeof CAchievements_GetInfo_ResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_achievements, 0);

