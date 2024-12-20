// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_accountprivacy.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_web_ui_common_base } from "./common_base_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file web-ui/service_accountprivacy.proto.
 */
export const file_web_ui_service_accountprivacy: GenFile = /*@__PURE__*/
  fileDesc("CiN3ZWItdWkvc2VydmljZV9hY2NvdW50cHJpdmFjeS5wcm90byIuCixDQWNjb3VudFByaXZhY3lfR2V0Q29va2llUHJlZmVyZW5jZXNfUmVxdWVzdCJnCi1DQWNjb3VudFByaXZhY3lfR2V0Q29va2llUHJlZmVyZW5jZXNfUmVzcG9uc2USNgoLcHJlZmVyZW5jZXMYASABKAsyIS5DQWNjb3VudFByaXZhY3lDb29raWVQcmVmZXJlbmNlcyLGAwogQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXMSGQoHdmVyc2lvbhgBIAEoBUIIgrUYBGVudW0SIgoQcHJlZmVyZW5jZV9zdGF0ZRgCIAEoBUIIgrUYBGVudW0SVQoVY29udGVudF9jdXN0b21pemF0aW9uGAMgASgLMjYuQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfQ29udGVudEN1c3RvbWl6YXRpb24SSQoPdmFsdmVfYW5hbHl0aWNzGAQgASgLMjAuQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfVmFsdmVBbmFseXRpY3MSVAoVdGhpcmRfcGFydHlfYW5hbHl0aWNzGAUgASgLMjUuQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfVGhpcmRQYXJ0eUFuYWx5dGljcxJQChN0aGlyZF9wYXJ0eV9jb250ZW50GAYgASgLMjMuQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfVGhpcmRQYXJ0eUNvbnRlbnQSGQoLdXRtX2VuYWJsZWQYByABKAg6BHRydWUiSwo1Q0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfQ29udGVudEN1c3RvbWl6YXRpb24SEgoKcmVjZW50YXBwcxgBIAEoCCJQCjRDQWNjb3VudFByaXZhY3lDb29raWVQcmVmZXJlbmNlc19UaGlyZFBhcnR5QW5hbHl0aWNzEhgKEGdvb2dsZV9hbmFseXRpY3MYASABKAgieAoyQ0FjY291bnRQcml2YWN5Q29va2llUHJlZmVyZW5jZXNfVGhpcmRQYXJ0eUNvbnRlbnQSDwoHeW91dHViZRgBIAEoCBINCgV2aW1lbxgCIAEoCBIRCglza2V0Y2hmYWIYAyABKAgSDwoHdHdpdHRlchgEIAEoCCJXCi9DQWNjb3VudFByaXZhY3lDb29raWVQcmVmZXJlbmNlc19WYWx2ZUFuYWx5dGljcxIkChxwcm9kdWN0X2ltcHJlc3Npb25zX3RyYWNraW5nGAEgASgIMocBCg5BY2NvdW50UHJpdmFjeRJ1ChRHZXRDb29raWVQcmVmZXJlbmNlcxItLkNBY2NvdW50UHJpdmFjeV9HZXRDb29raWVQcmVmZXJlbmNlc19SZXF1ZXN0Gi4uQ0FjY291bnRQcml2YWN5X0dldENvb2tpZVByZWZlcmVuY2VzX1Jlc3BvbnNl", [file_web_ui_common_base]);

/**
 * @generated from message CAccountPrivacy_GetCookiePreferences_Request
 */
export type CAccountPrivacy_GetCookiePreferences_Request = Message<"CAccountPrivacy_GetCookiePreferences_Request"> & {
};

/**
 * @generated from message CAccountPrivacy_GetCookiePreferences_Request
 */
export type CAccountPrivacy_GetCookiePreferences_RequestJson = {
};

/**
 * Describes the message CAccountPrivacy_GetCookiePreferences_Request.
 * Use `create(CAccountPrivacy_GetCookiePreferences_RequestSchema)` to create a new message.
 */
export const CAccountPrivacy_GetCookiePreferences_RequestSchema: GenMessage<CAccountPrivacy_GetCookiePreferences_Request, CAccountPrivacy_GetCookiePreferences_RequestJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 0);

/**
 * @generated from message CAccountPrivacy_GetCookiePreferences_Response
 */
export type CAccountPrivacy_GetCookiePreferences_Response = Message<"CAccountPrivacy_GetCookiePreferences_Response"> & {
  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences preferences = 1;
   */
  preferences?: CAccountPrivacyCookiePreferences;
};

/**
 * @generated from message CAccountPrivacy_GetCookiePreferences_Response
 */
export type CAccountPrivacy_GetCookiePreferences_ResponseJson = {
  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences preferences = 1;
   */
  preferences?: CAccountPrivacyCookiePreferencesJson;
};

/**
 * Describes the message CAccountPrivacy_GetCookiePreferences_Response.
 * Use `create(CAccountPrivacy_GetCookiePreferences_ResponseSchema)` to create a new message.
 */
export const CAccountPrivacy_GetCookiePreferences_ResponseSchema: GenMessage<CAccountPrivacy_GetCookiePreferences_Response, CAccountPrivacy_GetCookiePreferences_ResponseJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 1);

/**
 * @generated from message CAccountPrivacyCookiePreferences
 */
export type CAccountPrivacyCookiePreferences = Message<"CAccountPrivacyCookiePreferences"> & {
  /**
   * @generated from field: optional int32 version = 1;
   */
  version: number;

  /**
   * @generated from field: optional int32 preference_state = 2;
   */
  preferenceState: number;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ContentCustomization content_customization = 3;
   */
  contentCustomization?: CAccountPrivacyCookiePreferences_ContentCustomization;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ValveAnalytics valve_analytics = 4;
   */
  valveAnalytics?: CAccountPrivacyCookiePreferences_ValveAnalytics;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ThirdPartyAnalytics third_party_analytics = 5;
   */
  thirdPartyAnalytics?: CAccountPrivacyCookiePreferences_ThirdPartyAnalytics;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ThirdPartyContent third_party_content = 6;
   */
  thirdPartyContent?: CAccountPrivacyCookiePreferences_ThirdPartyContent;

  /**
   * @generated from field: optional bool utm_enabled = 7 [default = true];
   */
  utmEnabled: boolean;
};

/**
 * @generated from message CAccountPrivacyCookiePreferences
 */
export type CAccountPrivacyCookiePreferencesJson = {
  /**
   * @generated from field: optional int32 version = 1;
   */
  version?: number;

  /**
   * @generated from field: optional int32 preference_state = 2;
   */
  preferenceState?: number;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ContentCustomization content_customization = 3;
   */
  contentCustomization?: CAccountPrivacyCookiePreferences_ContentCustomizationJson;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ValveAnalytics valve_analytics = 4;
   */
  valveAnalytics?: CAccountPrivacyCookiePreferences_ValveAnalyticsJson;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ThirdPartyAnalytics third_party_analytics = 5;
   */
  thirdPartyAnalytics?: CAccountPrivacyCookiePreferences_ThirdPartyAnalyticsJson;

  /**
   * @generated from field: optional CAccountPrivacyCookiePreferences_ThirdPartyContent third_party_content = 6;
   */
  thirdPartyContent?: CAccountPrivacyCookiePreferences_ThirdPartyContentJson;

  /**
   * @generated from field: optional bool utm_enabled = 7 [default = true];
   */
  utmEnabled?: boolean;
};

/**
 * Describes the message CAccountPrivacyCookiePreferences.
 * Use `create(CAccountPrivacyCookiePreferencesSchema)` to create a new message.
 */
export const CAccountPrivacyCookiePreferencesSchema: GenMessage<CAccountPrivacyCookiePreferences, CAccountPrivacyCookiePreferencesJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 2);

/**
 * @generated from message CAccountPrivacyCookiePreferences_ContentCustomization
 */
export type CAccountPrivacyCookiePreferences_ContentCustomization = Message<"CAccountPrivacyCookiePreferences_ContentCustomization"> & {
  /**
   * @generated from field: optional bool recentapps = 1;
   */
  recentapps: boolean;
};

/**
 * @generated from message CAccountPrivacyCookiePreferences_ContentCustomization
 */
export type CAccountPrivacyCookiePreferences_ContentCustomizationJson = {
  /**
   * @generated from field: optional bool recentapps = 1;
   */
  recentapps?: boolean;
};

/**
 * Describes the message CAccountPrivacyCookiePreferences_ContentCustomization.
 * Use `create(CAccountPrivacyCookiePreferences_ContentCustomizationSchema)` to create a new message.
 */
export const CAccountPrivacyCookiePreferences_ContentCustomizationSchema: GenMessage<CAccountPrivacyCookiePreferences_ContentCustomization, CAccountPrivacyCookiePreferences_ContentCustomizationJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 3);

/**
 * @generated from message CAccountPrivacyCookiePreferences_ThirdPartyAnalytics
 */
export type CAccountPrivacyCookiePreferences_ThirdPartyAnalytics = Message<"CAccountPrivacyCookiePreferences_ThirdPartyAnalytics"> & {
  /**
   * @generated from field: optional bool google_analytics = 1;
   */
  googleAnalytics: boolean;
};

/**
 * @generated from message CAccountPrivacyCookiePreferences_ThirdPartyAnalytics
 */
export type CAccountPrivacyCookiePreferences_ThirdPartyAnalyticsJson = {
  /**
   * @generated from field: optional bool google_analytics = 1;
   */
  googleAnalytics?: boolean;
};

/**
 * Describes the message CAccountPrivacyCookiePreferences_ThirdPartyAnalytics.
 * Use `create(CAccountPrivacyCookiePreferences_ThirdPartyAnalyticsSchema)` to create a new message.
 */
export const CAccountPrivacyCookiePreferences_ThirdPartyAnalyticsSchema: GenMessage<CAccountPrivacyCookiePreferences_ThirdPartyAnalytics, CAccountPrivacyCookiePreferences_ThirdPartyAnalyticsJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 4);

/**
 * @generated from message CAccountPrivacyCookiePreferences_ThirdPartyContent
 */
export type CAccountPrivacyCookiePreferences_ThirdPartyContent = Message<"CAccountPrivacyCookiePreferences_ThirdPartyContent"> & {
  /**
   * @generated from field: optional bool youtube = 1;
   */
  youtube: boolean;

  /**
   * @generated from field: optional bool vimeo = 2;
   */
  vimeo: boolean;

  /**
   * @generated from field: optional bool sketchfab = 3;
   */
  sketchfab: boolean;

  /**
   * @generated from field: optional bool twitter = 4;
   */
  twitter: boolean;
};

/**
 * @generated from message CAccountPrivacyCookiePreferences_ThirdPartyContent
 */
export type CAccountPrivacyCookiePreferences_ThirdPartyContentJson = {
  /**
   * @generated from field: optional bool youtube = 1;
   */
  youtube?: boolean;

  /**
   * @generated from field: optional bool vimeo = 2;
   */
  vimeo?: boolean;

  /**
   * @generated from field: optional bool sketchfab = 3;
   */
  sketchfab?: boolean;

  /**
   * @generated from field: optional bool twitter = 4;
   */
  twitter?: boolean;
};

/**
 * Describes the message CAccountPrivacyCookiePreferences_ThirdPartyContent.
 * Use `create(CAccountPrivacyCookiePreferences_ThirdPartyContentSchema)` to create a new message.
 */
export const CAccountPrivacyCookiePreferences_ThirdPartyContentSchema: GenMessage<CAccountPrivacyCookiePreferences_ThirdPartyContent, CAccountPrivacyCookiePreferences_ThirdPartyContentJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 5);

/**
 * @generated from message CAccountPrivacyCookiePreferences_ValveAnalytics
 */
export type CAccountPrivacyCookiePreferences_ValveAnalytics = Message<"CAccountPrivacyCookiePreferences_ValveAnalytics"> & {
  /**
   * @generated from field: optional bool product_impressions_tracking = 1;
   */
  productImpressionsTracking: boolean;
};

/**
 * @generated from message CAccountPrivacyCookiePreferences_ValveAnalytics
 */
export type CAccountPrivacyCookiePreferences_ValveAnalyticsJson = {
  /**
   * @generated from field: optional bool product_impressions_tracking = 1;
   */
  productImpressionsTracking?: boolean;
};

/**
 * Describes the message CAccountPrivacyCookiePreferences_ValveAnalytics.
 * Use `create(CAccountPrivacyCookiePreferences_ValveAnalyticsSchema)` to create a new message.
 */
export const CAccountPrivacyCookiePreferences_ValveAnalyticsSchema: GenMessage<CAccountPrivacyCookiePreferences_ValveAnalytics, CAccountPrivacyCookiePreferences_ValveAnalyticsJson> = /*@__PURE__*/
  messageDesc(file_web_ui_service_accountprivacy, 6);

/**
 * @generated from service AccountPrivacy
 */
export const AccountPrivacy: GenService<{
  /**
   * @generated from rpc AccountPrivacy.GetCookiePreferences
   */
  getCookiePreferences: {
    methodKind: "unary";
    input: typeof CAccountPrivacy_GetCookiePreferences_RequestSchema;
    output: typeof CAccountPrivacy_GetCookiePreferences_ResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_accountprivacy, 0);

