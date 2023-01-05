import type ChargingStation from '../../charging-station/ChargingStation';
import type OCPPError from '../../exception/OCPPError';
import type { JsonType } from '../JsonType';
import { OCPP16DiagnosticsStatus } from './1.6/DiagnosticsStatus';
import type { OCPP16MeterValuesRequest } from './1.6/MeterValues';
import {
  OCPP16AvailabilityType,
  type OCPP16BootNotificationRequest,
  type OCPP16DataTransferRequest,
  OCPP16FirmwareStatus,
  type OCPP16HeartbeatRequest,
  OCPP16IncomingRequestCommand,
  OCPP16MessageTrigger,
  OCPP16RequestCommand,
  type OCPP16StatusNotificationRequest,
} from './1.6/Requests';
import {
  type OCPP20BootNotificationRequest,
  OCPP20IncomingRequestCommand,
  OCPP20RequestCommand,
} from './2.0/Requests';
import type { MessageType } from './MessageType';

export const RequestCommand = {
  ...OCPP16RequestCommand,
  ...OCPP20RequestCommand,
} as const;
export type RequestCommand = OCPP16RequestCommand | OCPP20RequestCommand;

export type OutgoingRequest = [MessageType.CALL_MESSAGE, string, RequestCommand, JsonType];

export type RequestParams = {
  skipBufferingOnError?: boolean;
  triggerMessage?: boolean;
};

export const IncomingRequestCommand = {
  ...OCPP16IncomingRequestCommand,
  ...OCPP20IncomingRequestCommand,
} as const;
export type IncomingRequestCommand = OCPP16IncomingRequestCommand | OCPP20IncomingRequestCommand;

export type IncomingRequest = [MessageType.CALL_MESSAGE, string, IncomingRequestCommand, JsonType];

export type ResponseCallback = (payload: JsonType, requestPayload: JsonType) => void;

export type ErrorCallback = (error: OCPPError, requestStatistic?: boolean) => void;

export type CachedRequest = [
  ResponseCallback,
  ErrorCallback,
  RequestCommand | IncomingRequestCommand,
  JsonType
];

export const MessageTrigger = {
  ...OCPP16MessageTrigger,
} as const;
export type MessageTrigger = OCPP16MessageTrigger;

export type BootNotificationRequest = OCPP16BootNotificationRequest | OCPP20BootNotificationRequest;

export type HeartbeatRequest = OCPP16HeartbeatRequest;

export type StatusNotificationRequest = OCPP16StatusNotificationRequest;

export type MeterValuesRequest = OCPP16MeterValuesRequest;

export type DataTransferRequest = OCPP16DataTransferRequest;

export type IncomingRequestHandler = (
  chargingStation: ChargingStation,
  commandPayload: JsonType
) => JsonType | Promise<JsonType>;

export const AvailabilityType = {
  ...OCPP16AvailabilityType,
} as const;
export type AvailabilityType = OCPP16AvailabilityType;

export const DiagnosticsStatus = {
  ...OCPP16DiagnosticsStatus,
} as const;
export type DiagnosticsStatus = OCPP16DiagnosticsStatus;

export const FirmwareStatus = {
  ...OCPP16FirmwareStatus,
} as const;
export type FirmwareStatus = OCPP16FirmwareStatus;

export type ResponseType = JsonType | OCPPError;
