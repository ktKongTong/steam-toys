// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file web-ui/service_experimentservice.proto (syntax proto2)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { NoResponseSchema, NotImplementedSchema } from "./common_base_pb";
import { file_web_ui_common_base } from "./common_base_pb";

/**
 * Describes the file web-ui/service_experimentservice.proto.
 */
export const file_web_ui_service_experimentservice: GenFile = /*@__PURE__*/
  fileDesc("CiZ3ZWItdWkvc2VydmljZV9leHBlcmltZW50c2VydmljZS5wcm90bzJXChFFeHBlcmltZW50U2VydmljZRJCCiJSZXBvcnRQcm9kdWN0SW1wcmVzc2lvbnNGcm9tQ2xpZW50Eg8uTm90SW1wbGVtZW50ZWQaCy5Ob1Jlc3BvbnNl", [file_web_ui_common_base]);

/**
 * @generated from service ExperimentService
 */
export const ExperimentService: GenService<{
  /**
   * @generated from rpc ExperimentService.ReportProductImpressionsFromClient
   */
  reportProductImpressionsFromClient: {
    methodKind: "unary";
    input: typeof NotImplementedSchema;
    output: typeof NoResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_web_ui_service_experimentservice, 0);

