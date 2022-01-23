export interface ICredentials {
  wsUserName: string;
  wsPassword: string;
  userLanguage: string;
  type: string;
}
export interface ICreateShipment {
  cargoKey: string;
  invoiceKey: string;
  receiverCustName: string;
  receiverAddress: string;
  cityName: string;
  townName: string;
  receiverPhone1: string;
  receiverPhone2?: string;
  receiverPhone3?: string;
  custProdId?: string;
  desi?: number;
  desiSpecified?: boolean;
  kg?: number;
  kgSpecified?: boolean;
  cargoCount?: number;
  waybillNo?: string;
  specialField1?: string;
  specialField2?: string;
  specialField3?: string;
  ttCollectionType?: string;
  ttInvoiceAmount?: number;
  ttInvoiceAmountSpecified?: boolean;
  ttDocumentId?: number;
  ttDocumentSaveType?: string;
  orgReceiverCustId?: string;
  description?: string;
  taxNumber?: string;
  taxOfficeId?: number;
  taxOfficeName?: string;
  orgGeoCode?: string;
  privilegeOrder?: string;
  dcSelectedCredit?: number;
  dcCreditRule?: number;
  emailAddress?: string;
}
export interface ICreateShipmentResponse {
  shippingOrderResultVO: {
    outFlag: string;
    outResult: string;
    jobId: number;
    count: number;
    shippingOrderDetails: IShippingOrderDetail[];
  };
}
export interface IShippingOrderDetail {
  cargoKey: string;
  invoiceKey: string;
  errCode: number;
  errMessage: string;
}
export interface ICancelShipment {
  cargoKey: string;
}
export interface ICancelShipmentResponse {
  shippingCancelResultVO: {
    outFlag: string;
    outResult: string;
    senderCustId: number;
    count: number;
    shippingCancelDetailVO: IShippingCancelDetail[];
  };
}
export interface IShippingCancelDetail {
  cargoKey: string;
  invoiceKey: string;
  jobId: number;
  docId: number;
  operationCode: number;
  operationMessage: string;
  operationStatus: string;
  errCode: number;
  errMessage: string;
}
export interface IQueryShipment {
  keys: string[];
  keyType: number;
  addHistoricalData: boolean;
  onlyTracking: boolean;
}
export interface IQueryShipmentResponse {
  shippingDeliveryResultVO: {
    outFlag: string;
    outResult: string;
    senderCustId: number;
    count: number;
    shippingDeliveryDetailVO: IShippingDeliveryDetail[];
  };
}
export interface IShippingDeliveryDetail {
  cargoKey: string;
  invoiceKey: string;
  jobId: number;
  docId: number;
  operationCode: number;
  operationMessage: string;
  operationStatus: string;
  errCode: number;
  errMessage: string;
  ShippingDeliveryItemDetailVO: IShippingDeliveryItemDetail[];
}
export interface IShippingDeliveryItemDetail {
  arrivalTrCenterName: string;
  arrivalTrCenterUnitId: string;
  arrivalUnitId: string;
  arrivalUnitName: string;
  cargoEventExplanation: string;
  cargoEventId: string;
  cargoKey: string;
  cargoReasonExplanation: string;
  cargoReasonId: string;
  cargoType: string;
  cargoTypeExplanation: string;
  contractId: string;
  delEmpId: string;
  delEmpName: string;
  deliveryDate: string;
  deliveryTime: string;
  deliveryType: string;
  deliveryTypeExplanation: string;
  deliveryUnitId: string;
  deliveryUnitName: string;
  deliveryUnitType: string;
  deliveryUnitTypeExplanation: string;
  departureTrCenterName: string;
  departureTrCenterUnitId: string;
  departureUnitId: string;
  departureUnitName: string;
  docId: string;
  docNumber: string;
  docType: string;
  docTypeExplanation: string;
  documentDate: string;
  documentDelFlag: string;
  documentEventExplanation: string;
  documentEventId: string;
  documentReasonExplanation: string;
  documentReasonId: string;
  documentTime: string;
  invoiceNumber: string;
  pickupType: string;
  pickupTypeExplanation: string;
  product: string;
  receiverAddressTxt: string;
  receiverCustId: string;
  receiverCustName: string;
  receiverInfo: string;
  rejectStatus: string;
  rejectStatusExplanation: string;
  rejectDescription: string;
  rejectReasonExplanation: string;
  returnDocId: string;
  returnDocumentDate: string;
  returnDeliveryDate: string;
  returnStatus: string;
  returnStatusExplanation: string;
  senderAddressTxt: string;
  senderCustId: string;
  senderCustName: string;
  totalAmount: string;
  totalCargo: string;
  totalDesi: string;
  totalDesiKg: string;
  totalKg: string;
  totalPrice: string;
  totalVat: string;
  trackingUrl: string;
  invDocFieldVOArray: IInvDocField[];
  invDocCargoVOArray: IInvDocCargo[];
}
export interface IInvDocField {
  fieldName: string;
  fieldNameExplanation: string;
  fieldValue: string;
}
export interface IInvDocCargo {
  unitId: string;
  unitName: string;
  eventId: string;
  eventName: string;
  reasonId: string;
  reasonName: string;
  eventDate: string;
  eventTime: string;
  cityName: string;
  townName: string;
}
