// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_storesales.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { NotImplementedSchema } from "./common_base_pb";
import { file_web_ui_common_base } from "./common_base_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file web-ui/service_storesales.proto.
 */
export const file_web_ui_service_storesales: GenFile = /*@__PURE__*/
  fileDesc("Ch93ZWItdWkvc2VydmljZV9zdG9yZXNhbGVzLnByb3RvIjEKG0NTdG9yZV9HZXRVc2VyVm90ZXNfUmVxdWVzdBISCgpzYWxlX2FwcGlkGAEgASgNIkgKHENTdG9yZV9HZXRVc2VyVm90ZXNfUmVzcG9uc2USKAoKdXNlcl92b3RlcxgBIAMoCzIULlN0ZWFtQXdhcmRzVXNlclZvdGUiSQohQ1N0b3JlX0dldFZvdGVEZWZpbml0aW9uc19SZXF1ZXN0EhAKCGxhbmd1YWdlGAEgASgJEhIKCnNhbGVfYXBwaWQYAiABKA0iagoiQ1N0b3JlX0dldFZvdGVEZWZpbml0aW9uc19SZXNwb25zZRIlCgV2b3RlcxgBIAMoCzIWLkNTdG9yZV9Wb3RlRGVmaW5pdGlvbhIdChVsYWJvcl9vZl9sb3ZlX3dpbm5lcnMYAiADKA0ifworQ1N0b3JlX0dldFZvdGVEZWZpbml0aW9uc0ZvckV2ZW50c19SZXNwb25zZRJQCgtkZWZpbml0aW9ucxgBIAMoCzI7LkNTdG9yZV9HZXRWb3RlRGVmaW5pdGlvbnNGb3JFdmVudHNfUmVzcG9uc2VfVm90ZV9EZWZpbnRpb24iWwo6Q1N0b3JlX0dldFZvdGVEZWZpbml0aW9uc0ZvckV2ZW50c19SZXNwb25zZV9Wb3RlX0RlZmludGlvbhIOCgZ2b3RlaWQYASABKAUSDQoFYXBwaWQYAiABKA0iSwoWQ1N0b3JlX1NldFZvdGVfUmVxdWVzdBIOCgZ2b3RlaWQYASABKAUSDQoFYXBwaWQYAiABKA0SEgoKc2FsZV9hcHBpZBgDIAEoDSJDChdDU3RvcmVfU2V0Vm90ZV9SZXNwb25zZRIoCgp1c2VyX3ZvdGVzGAEgAygLMhQuU3RlYW1Bd2FyZHNVc2VyVm90ZSLMAwoVQ1N0b3JlX1ZvdGVEZWZpbml0aW9uEg4KBnZvdGVpZBgBIAEoBRIOCgZhY3RpdmUYAiABKAgSEgoKc3RhcnRfdGltZRgDIAEoDRIQCghlbmRfdGltZRgEIAEoDRI7Cg1hcHBfZGlzY291bnRzGAUgAygLMiQuQ1N0b3JlX1ZvdGVEZWZpbml0aW9uX0FwcERlZmluaXRpb24SHAoUZ3JvdXBlZF92b3RlX29wdGlvbnMYBiABKA0SNgoGZ3JvdXBzGAcgAygLMiYuQ1N0b3JlX1ZvdGVEZWZpbml0aW9uX0dyb3VwRGVmaW5pdGlvbhIVCg1pbnRlcm5hbF9uYW1lGAggASgJEjkKDGxvY2FsaXphdGlvbhgJIAEoCzIjLkNTdG9yZV9Wb3RlRGVmaW5pdGlvbl9Mb2NhbGl6YXRpb24SEwoLcmV2ZWFsX3RpbWUYCiABKA0SGAoQcmVsZWFzZV9kYXRlX21pbhgLIAEoDRIUCgx3aW5uZXJfYXBwaWQYDCABKA0SFgoEZmxhZxgNIAEoBUIIgrUYBGVudW0SGAoQcmVsZWFzZV9kYXRlX21heBgOIAEoDRIRCglpdGVtX3R5cGUYDyABKA0iRgojQ1N0b3JlX1ZvdGVEZWZpbml0aW9uX0FwcERlZmluaXRpb24SDQoFYXBwaWQYASABKA0SEAoIZGlzY291bnQYAiABKA0iiQEKJUNTdG9yZV9Wb3RlRGVmaW5pdGlvbl9Hcm91cERlZmluaXRpb24SDwoHZ3JvdXBpZBgBIAEoDRISCgpncm91cF9uYW1lGAIgASgJEjsKDWFwcF9kaXNjb3VudHMYAyADKAsyJC5DU3RvcmVfVm90ZURlZmluaXRpb25fQXBwRGVmaW5pdGlvbiJ8CiJDU3RvcmVfVm90ZURlZmluaXRpb25fTG9jYWxpemF0aW9uEg0KBXRpdGxlGAEgASgJEhcKD3RpdGxlX2xpbmVicmVhaxgCIAEoCRITCgt0aXRsZV9hd2FyZBgDIAEoCRIZChFhd2FyZF9kZXNjcmlwdGlvbhgEIAEoCSJNChNTdGVhbUF3YXJkc1VzZXJWb3RlEg4KBnZvdGVpZBgBIAEoDRINCgVhcHBpZBgCIAEoDRIXCg9jb21tdW5pdHlpdGVtaWQYAyABKAQy1AIKClN0b3JlU2FsZXMSSwoMR2V0VXNlclZvdGVzEhwuQ1N0b3JlX0dldFVzZXJWb3Rlc19SZXF1ZXN0Gh0uQ1N0b3JlX0dldFVzZXJWb3Rlc19SZXNwb25zZRJdChJHZXRWb3RlRGVmaW5pdGlvbnMSIi5DU3RvcmVfR2V0Vm90ZURlZmluaXRpb25zX1JlcXVlc3QaIy5DU3RvcmVfR2V0Vm90ZURlZmluaXRpb25zX1Jlc3BvbnNlElwKG0dldFZvdGVEZWZpbml0aW9uc0ZvckV2ZW50cxIPLk5vdEltcGxlbWVudGVkGiwuQ1N0b3JlX0dldFZvdGVEZWZpbml0aW9uc0ZvckV2ZW50c19SZXNwb25zZRI8CgdTZXRWb3RlEhcuQ1N0b3JlX1NldFZvdGVfUmVxdWVzdBoYLkNTdG9yZV9TZXRWb3RlX1Jlc3BvbnNl", [file_web_ui_common_base]);

/**
 * @generated from message CStore_GetUserVotes_Request
 */
export type CStore_GetUserVotes_Request = Message<"CStore_GetUserVotes_Request"> & {
  /**
   * @generated from field: optional uint32 sale_appid = 1;
   */
  saleAppid: number;
};

/**
 * @generated from message CStore_GetUserVotes_Request
 */
export type CStore_GetUserVotes_RequestJson = {
  /**
   * @generated from field: optional uint32 sale_appid = 1;
   */
  saleAppid?: number;
};

/**
 * Describes the message CStore_GetUserVotes_Request.
 * Use `create(CStore_GetUserVotes_RequestSchema)` to create a new message.
 */
export const CStore_GetUserVotes_RequestSchema: GenMessage<CStore_GetUserVotes_Request, CStore_GetUserVotes_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 0);

/**
 * @generated from message CStore_GetUserVotes_Response
 */
export type CStore_GetUserVotes_Response = Message<"CStore_GetUserVotes_Response"> & {
  /**
   * @generated from field: repeated SteamAwardsUserVote user_votes = 1;
   */
  userVotes: SteamAwardsUserVote[];
};

/**
 * @generated from message CStore_GetUserVotes_Response
 */
export type CStore_GetUserVotes_ResponseJson = {
  /**
   * @generated from field: repeated SteamAwardsUserVote user_votes = 1;
   */
  userVotes?: SteamAwardsUserVoteJson[];
};

/**
 * Describes the message CStore_GetUserVotes_Response.
 * Use `create(CStore_GetUserVotes_ResponseSchema)` to create a new message.
 */
export const CStore_GetUserVotes_ResponseSchema: GenMessage<CStore_GetUserVotes_Response, CStore_GetUserVotes_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 1);

/**
 * @generated from message CStore_GetVoteDefinitions_Request
 */
export type CStore_GetVoteDefinitions_Request = Message<"CStore_GetVoteDefinitions_Request"> & {
  /**
   * @generated from field: optional string language = 1;
   */
  language: string;

  /**
   * @generated from field: optional uint32 sale_appid = 2;
   */
  saleAppid: number;
};

/**
 * @generated from message CStore_GetVoteDefinitions_Request
 */
export type CStore_GetVoteDefinitions_RequestJson = {
  /**
   * @generated from field: optional string language = 1;
   */
  language?: string;

  /**
   * @generated from field: optional uint32 sale_appid = 2;
   */
  saleAppid?: number;
};

/**
 * Describes the message CStore_GetVoteDefinitions_Request.
 * Use `create(CStore_GetVoteDefinitions_RequestSchema)` to create a new message.
 */
export const CStore_GetVoteDefinitions_RequestSchema: GenMessage<CStore_GetVoteDefinitions_Request, CStore_GetVoteDefinitions_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 2);

/**
 * @generated from message CStore_GetVoteDefinitions_Response
 */
export type CStore_GetVoteDefinitions_Response = Message<"CStore_GetVoteDefinitions_Response"> & {
  /**
   * @generated from field: repeated CStore_VoteDefinition votes = 1;
   */
  votes: CStore_VoteDefinition[];

  /**
   * @generated from field: repeated uint32 labor_of_love_winners = 2;
   */
  laborOfLoveWinners: number[];
};

/**
 * @generated from message CStore_GetVoteDefinitions_Response
 */
export type CStore_GetVoteDefinitions_ResponseJson = {
  /**
   * @generated from field: repeated CStore_VoteDefinition votes = 1;
   */
  votes?: CStore_VoteDefinitionJson[];

  /**
   * @generated from field: repeated uint32 labor_of_love_winners = 2;
   */
  laborOfLoveWinners?: number[];
};

/**
 * Describes the message CStore_GetVoteDefinitions_Response.
 * Use `create(CStore_GetVoteDefinitions_ResponseSchema)` to create a new message.
 */
export const CStore_GetVoteDefinitions_ResponseSchema: GenMessage<CStore_GetVoteDefinitions_Response, CStore_GetVoteDefinitions_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 3);

/**
 * @generated from message CStore_GetVoteDefinitionsForEvents_Response
 */
export type CStore_GetVoteDefinitionsForEvents_Response = Message<"CStore_GetVoteDefinitionsForEvents_Response"> & {
  /**
   * @generated from field: repeated CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion definitions = 1;
   */
  definitions: CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion[];
};

/**
 * @generated from message CStore_GetVoteDefinitionsForEvents_Response
 */
export type CStore_GetVoteDefinitionsForEvents_ResponseJson = {
  /**
   * @generated from field: repeated CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion definitions = 1;
   */
  definitions?: CStore_GetVoteDefinitionsForEvents_Response_Vote_DefintionJson[];
};

/**
 * Describes the message CStore_GetVoteDefinitionsForEvents_Response.
 * Use `create(CStore_GetVoteDefinitionsForEvents_ResponseSchema)` to create a new message.
 */
export const CStore_GetVoteDefinitionsForEvents_ResponseSchema: GenMessage<CStore_GetVoteDefinitionsForEvents_Response, CStore_GetVoteDefinitionsForEvents_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 4);

/**
 * @generated from message CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion
 */
export type CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion = Message<"CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion"> & {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid: number;
};

/**
 * @generated from message CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion
 */
export type CStore_GetVoteDefinitionsForEvents_Response_Vote_DefintionJson = {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid?: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid?: number;
};

/**
 * Describes the message CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion.
 * Use `create(CStore_GetVoteDefinitionsForEvents_Response_Vote_DefintionSchema)` to create a new message.
 */
export const CStore_GetVoteDefinitionsForEvents_Response_Vote_DefintionSchema: GenMessage<CStore_GetVoteDefinitionsForEvents_Response_Vote_Defintion, CStore_GetVoteDefinitionsForEvents_Response_Vote_DefintionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 5);

/**
 * @generated from message CStore_SetVote_Request
 */
export type CStore_SetVote_Request = Message<"CStore_SetVote_Request"> & {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid: number;

  /**
   * @generated from field: optional uint32 sale_appid = 3;
   */
  saleAppid: number;
};

/**
 * @generated from message CStore_SetVote_Request
 */
export type CStore_SetVote_RequestJson = {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid?: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid?: number;

  /**
   * @generated from field: optional uint32 sale_appid = 3;
   */
  saleAppid?: number;
};

/**
 * Describes the message CStore_SetVote_Request.
 * Use `create(CStore_SetVote_RequestSchema)` to create a new message.
 */
export const CStore_SetVote_RequestSchema: GenMessage<CStore_SetVote_Request, CStore_SetVote_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 6);

/**
 * @generated from message CStore_SetVote_Response
 */
export type CStore_SetVote_Response = Message<"CStore_SetVote_Response"> & {
  /**
   * @generated from field: repeated SteamAwardsUserVote user_votes = 1;
   */
  userVotes: SteamAwardsUserVote[];
};

/**
 * @generated from message CStore_SetVote_Response
 */
export type CStore_SetVote_ResponseJson = {
  /**
   * @generated from field: repeated SteamAwardsUserVote user_votes = 1;
   */
  userVotes?: SteamAwardsUserVoteJson[];
};

/**
 * Describes the message CStore_SetVote_Response.
 * Use `create(CStore_SetVote_ResponseSchema)` to create a new message.
 */
export const CStore_SetVote_ResponseSchema: GenMessage<CStore_SetVote_Response, CStore_SetVote_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 7);

/**
 * @generated from message CStore_VoteDefinition
 */
export type CStore_VoteDefinition = Message<"CStore_VoteDefinition"> & {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid: number;

  /**
   * @generated from field: optional bool active = 2;
   */
  active: boolean;

  /**
   * @generated from field: optional uint32 start_time = 3;
   */
  startTime: number;

  /**
   * @generated from field: optional uint32 end_time = 4;
   */
  endTime: number;

  /**
   * @generated from field: repeated CStore_VoteDefinition_AppDefinition app_discounts = 5;
   */
  appDiscounts: CStore_VoteDefinition_AppDefinition[];

  /**
   * @generated from field: optional uint32 grouped_vote_options = 6;
   */
  groupedVoteOptions: number;

  /**
   * @generated from field: repeated CStore_VoteDefinition_GroupDefinition groups = 7;
   */
  groups: CStore_VoteDefinition_GroupDefinition[];

  /**
   * @generated from field: optional string internal_name = 8;
   */
  internalName: string;

  /**
   * @generated from field: optional CStore_VoteDefinition_Localization localization = 9;
   */
  localization?: CStore_VoteDefinition_Localization;

  /**
   * @generated from field: optional uint32 reveal_time = 10;
   */
  revealTime: number;

  /**
   * @generated from field: optional uint32 release_date_min = 11;
   */
  releaseDateMin: number;

  /**
   * @generated from field: optional uint32 winner_appid = 12;
   */
  winnerAppid: number;

  /**
   * @generated from field: optional int32 flag = 13;
   */
  flag: number;

  /**
   * @generated from field: optional uint32 release_date_max = 14;
   */
  releaseDateMax: number;

  /**
   * @generated from field: optional uint32 item_type = 15;
   */
  itemType: number;
};

/**
 * @generated from message CStore_VoteDefinition
 */
export type CStore_VoteDefinitionJson = {
  /**
   * @generated from field: optional int32 voteid = 1;
   */
  voteid?: number;

  /**
   * @generated from field: optional bool active = 2;
   */
  active?: boolean;

  /**
   * @generated from field: optional uint32 start_time = 3;
   */
  startTime?: number;

  /**
   * @generated from field: optional uint32 end_time = 4;
   */
  endTime?: number;

  /**
   * @generated from field: repeated CStore_VoteDefinition_AppDefinition app_discounts = 5;
   */
  appDiscounts?: CStore_VoteDefinition_AppDefinitionJson[];

  /**
   * @generated from field: optional uint32 grouped_vote_options = 6;
   */
  groupedVoteOptions?: number;

  /**
   * @generated from field: repeated CStore_VoteDefinition_GroupDefinition groups = 7;
   */
  groups?: CStore_VoteDefinition_GroupDefinitionJson[];

  /**
   * @generated from field: optional string internal_name = 8;
   */
  internalName?: string;

  /**
   * @generated from field: optional CStore_VoteDefinition_Localization localization = 9;
   */
  localization?: CStore_VoteDefinition_LocalizationJson;

  /**
   * @generated from field: optional uint32 reveal_time = 10;
   */
  revealTime?: number;

  /**
   * @generated from field: optional uint32 release_date_min = 11;
   */
  releaseDateMin?: number;

  /**
   * @generated from field: optional uint32 winner_appid = 12;
   */
  winnerAppid?: number;

  /**
   * @generated from field: optional int32 flag = 13;
   */
  flag?: number;

  /**
   * @generated from field: optional uint32 release_date_max = 14;
   */
  releaseDateMax?: number;

  /**
   * @generated from field: optional uint32 item_type = 15;
   */
  itemType?: number;
};

/**
 * Describes the message CStore_VoteDefinition.
 * Use `create(CStore_VoteDefinitionSchema)` to create a new message.
 */
export const CStore_VoteDefinitionSchema: GenMessage<CStore_VoteDefinition, CStore_VoteDefinitionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 8);

/**
 * @generated from message CStore_VoteDefinition_AppDefinition
 */
export type CStore_VoteDefinition_AppDefinition = Message<"CStore_VoteDefinition_AppDefinition"> & {
  /**
   * @generated from field: optional uint32 appid = 1;
   */
  appid: number;

  /**
   * @generated from field: optional uint32 discount = 2;
   */
  discount: number;
};

/**
 * @generated from message CStore_VoteDefinition_AppDefinition
 */
export type CStore_VoteDefinition_AppDefinitionJson = {
  /**
   * @generated from field: optional uint32 appid = 1;
   */
  appid?: number;

  /**
   * @generated from field: optional uint32 discount = 2;
   */
  discount?: number;
};

/**
 * Describes the message CStore_VoteDefinition_AppDefinition.
 * Use `create(CStore_VoteDefinition_AppDefinitionSchema)` to create a new message.
 */
export const CStore_VoteDefinition_AppDefinitionSchema: GenMessage<CStore_VoteDefinition_AppDefinition, CStore_VoteDefinition_AppDefinitionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 9);

/**
 * @generated from message CStore_VoteDefinition_GroupDefinition
 */
export type CStore_VoteDefinition_GroupDefinition = Message<"CStore_VoteDefinition_GroupDefinition"> & {
  /**
   * @generated from field: optional uint32 groupid = 1;
   */
  groupid: number;

  /**
   * @generated from field: optional string group_name = 2;
   */
  groupName: string;

  /**
   * @generated from field: repeated CStore_VoteDefinition_AppDefinition app_discounts = 3;
   */
  appDiscounts: CStore_VoteDefinition_AppDefinition[];
};

/**
 * @generated from message CStore_VoteDefinition_GroupDefinition
 */
export type CStore_VoteDefinition_GroupDefinitionJson = {
  /**
   * @generated from field: optional uint32 groupid = 1;
   */
  groupid?: number;

  /**
   * @generated from field: optional string group_name = 2;
   */
  groupName?: string;

  /**
   * @generated from field: repeated CStore_VoteDefinition_AppDefinition app_discounts = 3;
   */
  appDiscounts?: CStore_VoteDefinition_AppDefinitionJson[];
};

/**
 * Describes the message CStore_VoteDefinition_GroupDefinition.
 * Use `create(CStore_VoteDefinition_GroupDefinitionSchema)` to create a new message.
 */
export const CStore_VoteDefinition_GroupDefinitionSchema: GenMessage<CStore_VoteDefinition_GroupDefinition, CStore_VoteDefinition_GroupDefinitionJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 10);

/**
 * @generated from message CStore_VoteDefinition_Localization
 */
export type CStore_VoteDefinition_Localization = Message<"CStore_VoteDefinition_Localization"> & {
  /**
   * @generated from field: optional string title = 1;
   */
  title: string;

  /**
   * @generated from field: optional string title_linebreak = 2;
   */
  titleLinebreak: string;

  /**
   * @generated from field: optional string title_award = 3;
   */
  titleAward: string;

  /**
   * @generated from field: optional string award_description = 4;
   */
  awardDescription: string;
};

/**
 * @generated from message CStore_VoteDefinition_Localization
 */
export type CStore_VoteDefinition_LocalizationJson = {
  /**
   * @generated from field: optional string title = 1;
   */
  title?: string;

  /**
   * @generated from field: optional string title_linebreak = 2;
   */
  titleLinebreak?: string;

  /**
   * @generated from field: optional string title_award = 3;
   */
  titleAward?: string;

  /**
   * @generated from field: optional string award_description = 4;
   */
  awardDescription?: string;
};

/**
 * Describes the message CStore_VoteDefinition_Localization.
 * Use `create(CStore_VoteDefinition_LocalizationSchema)` to create a new message.
 */
export const CStore_VoteDefinition_LocalizationSchema: GenMessage<CStore_VoteDefinition_Localization, CStore_VoteDefinition_LocalizationJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 11);

/**
 * @generated from message SteamAwardsUserVote
 */
export type SteamAwardsUserVote = Message<"SteamAwardsUserVote"> & {
  /**
   * @generated from field: optional uint32 voteid = 1;
   */
  voteid: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid: number;

  /**
   * @generated from field: optional uint64 communityitemid = 3;
   */
  communityitemid: bigint;
};

/**
 * @generated from message SteamAwardsUserVote
 */
export type SteamAwardsUserVoteJson = {
  /**
   * @generated from field: optional uint32 voteid = 1;
   */
  voteid?: number;

  /**
   * @generated from field: optional uint32 appid = 2;
   */
  appid?: number;

  /**
   * @generated from field: optional uint64 communityitemid = 3;
   */
  communityitemid?: string;
};

/**
 * Describes the message SteamAwardsUserVote.
 * Use `create(SteamAwardsUserVoteSchema)` to create a new message.
 */
export const SteamAwardsUserVoteSchema: GenMessage<SteamAwardsUserVote, SteamAwardsUserVoteJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_storesales, 12);

/**
 * @generated from service StoreSales
 */
export const StoreSales: GenService<{
  /**
   * @generated from rpc StoreSales.GetUserVotes
   */
  getUserVotes: {
    methodKind: "unary";
    input: typeof CStore_GetUserVotes_RequestSchema;
    output: typeof CStore_GetUserVotes_ResponseSchema;
  },
  /**
   * @generated from rpc StoreSales.GetVoteDefinitions
   */
  getVoteDefinitions: {
    methodKind: "unary";
    input: typeof CStore_GetVoteDefinitions_RequestSchema;
    output: typeof CStore_GetVoteDefinitions_ResponseSchema;
  },
  /**
   * @generated from rpc StoreSales.GetVoteDefinitionsForEvents
   */
  getVoteDefinitionsForEvents: {
    methodKind: "unary";
    input: typeof NotImplementedSchema;
    output: typeof CStore_GetVoteDefinitionsForEvents_ResponseSchema;
  },
  /**
   * @generated from rpc StoreSales.SetVote
   */
  setVote: {
    methodKind: "unary";
    input: typeof CStore_SetVote_RequestSchema;
    output: typeof CStore_SetVote_ResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_storesales, 0);
