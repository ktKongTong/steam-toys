// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file web-ui/common_base.proto (package google.protobuf, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { EnumOptions, EnumValueOptions, FieldOptions, Message, MethodOptions, proto2, ServiceOptions } from "@bufbuild/protobuf";

/**
 * @generated from message google.protobuf.NoResponse
 */
export class NoResponse extends Message<NoResponse> {
  constructor(data?: PartialMessage<NoResponse>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.NoResponse";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NoResponse {
    return new NoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NoResponse {
    return new NoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NoResponse {
    return new NoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: NoResponse | PlainMessage<NoResponse> | undefined, b: NoResponse | PlainMessage<NoResponse> | undefined): boolean {
    return proto2.util.equals(NoResponse, a, b);
  }
}

/**
 * @generated from message google.protobuf.NotImplemented
 */
export class NotImplemented extends Message<NotImplemented> {
  constructor(data?: PartialMessage<NotImplemented>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "google.protobuf.NotImplemented";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotImplemented {
    return new NotImplemented().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotImplemented {
    return new NotImplemented().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotImplemented {
    return new NotImplemented().fromJsonString(jsonString, options);
  }

  static equals(a: NotImplemented | PlainMessage<NotImplemented> | undefined, b: NotImplemented | PlainMessage<NotImplemented> | undefined): boolean {
    return proto2.util.equals(NotImplemented, a, b);
  }
}

/**
 * @generated from extension: optional string description = 50000;
 */
export const description = proto2.makeExtension<FieldOptions, string>(
  "google.protobuf.description", 
  FieldOptions, 
  { no: 50000, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string service_description = 50000;
 */
export const service_description = proto2.makeExtension<ServiceOptions, string>(
  "google.protobuf.service_description", 
  ServiceOptions, 
  { no: 50000, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string method_description = 50000;
 */
export const method_description = proto2.makeExtension<MethodOptions, string>(
  "google.protobuf.method_description", 
  MethodOptions, 
  { no: 50000, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string enum_description = 50000;
 */
export const enum_description = proto2.makeExtension<EnumOptions, string>(
  "google.protobuf.enum_description", 
  EnumOptions, 
  { no: 50000, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string enum_value_description = 50000;
 */
export const enum_value_description = proto2.makeExtension<EnumValueOptions, string>(
  "google.protobuf.enum_value_description", 
  EnumValueOptions, 
  { no: 50000, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);
