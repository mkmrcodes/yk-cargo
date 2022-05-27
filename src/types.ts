export interface ICredentials {
  wsUserName: string;
  wsPassword: string;
  userLanguage: string;
  type: string;
  companyYKId: string;
}

export interface DocCargoDataArray {
  ngiCargoKey: string;
  cargoType: string;
  cargoDesi: number;
  cargoWeight: number;
  cargoCount: number;
  length: string;
  width: string;
  height: string;
}

export interface SpecialFieldDataArray {
  specialFieldName: number;
  specialFieldValue: string;
}

export interface CodData {
  ttInvoiceAmount: number | string;
  ttDocumentId?: string;
  ttCollectionType?: string;
  ttDocumentSaveType?: string;
  dcSelectedCredit: number | string;
  dcCreditRule?: string;
}

export interface ShipmentData {
  ngiDocumentKey: string;
  cargoType: string;
  totalCargoCount: number;
  totalDesi: number;
  totalWeight: number;
  personGiver: string;
  productCode: string;
  specialFieldDataArray: SpecialFieldDataArray[];
  codData: CodData | string;
  docCargoDataArray: DocCargoDataArray;
}

export interface XSenderCustAddress {
  senderCustName: string;
  senderAddress: string;
  cityId: string | number;
  townName: string;
  senderPhone: string;
  senderMobilePhone: string;
}

export interface XConsigneeCustAddress {
  consigneeCustName: string;
  consigneeAddress: string;
  cityId: string | number;
  townName: string;
  consigneePhone: string;
  consigneeMobilePhone: string;
}

export interface PayerCustData {
  invCustId: string;
}

export interface ICreateShipment {
  shipmentData: ShipmentData;
  XSenderCustAddress: XSenderCustAddress;
  XConsigneeCustAddress: XConsigneeCustAddress;
}
export interface IUpdateShipmentDesiWeightData {
  ngiCargoKey: string;
  ngiDocumentKey: string;
  desi: number;
  weight: number;
}
export interface ICancelShipmentData {
  ngiCargoKey: string;
  ngiDocumentKey: string;
  cancellationDescription: string;
}

export interface ICustomerParams {
  invCustIdArray: string;
}

export interface IQueryParams {
  fieldName: string;
  fieldValueArray: string;
  startDate: string;
  endDate: string;
  dateParamType: string;
  withCargoLifecycle: string;
}

export interface ISpecialFieldArray {
  specialFieldName: string;
  specialFieldValue: string;
}
export interface ICreateShipmentResponse {
  'env:Envelope': {
    'env:Header': string;
    'env:Body': {
      'ns1:createNgiShipmentWithAddressResponse': {
        XShipmentDataResponse: {
          outFlag: string;
          projectId: string;
          specialFieldDataArray: ISpecialFieldArray[];
        };
      };
    };
  };
}

export interface IUpdateShipmentResponse {
  XUpdateShipmentResponse: {
    outFlag: number;
    errorCode?: number;
    outResult: string;
    ngiCargoKey: string;
    ngiDocumentKey: string;
    desi: number;
    weight: number;
  };
}

export interface ICancelShipmentResponse {
  XCancelShipmentResponse: {
    outFlag: number;
    errorCode?: number;
    outResult: string;
    ngiCargoKey: string;
    ngiDocumentKey: string;
    docId: number;
  };
}
export interface IQueryResponse {
  ShippingDataResponseVO: {
    outFlag: number;
    shippingDataDetailVOArray: IShippingDataDetailVOArray[];
  };
}
export interface IShippingDataDetailVOArray {
  transactionStatus: number;
  transactionErrCode: number;
  transactionMessage: string;
  fieldName: string;
  fieldValue: string;
  docId: number;
  invoiceNumber: number;
  docNumber: string;
  waybillNo: string;
  docCargoId: number;
  senderCustId: number;
  senderCustName: string;
  senderAddressTxt: string;
  invCustId: number;
  invCustName: string;
  receiverCustId: number;
  receiverCustName: string;
  receiverAddressTxt: string;
  senderAddressId: string;
  receiverAddressId: string;
  senderCityId: number;
  receiverCityId: number;
  senderCityName: string;
  receiverCityName: string;
  senderTownId: string;
  receiverTownId: string;
  senderTownName: string;
  receiverTownName: string;
  senderMobilePhoneNumber: string;
  receiverMobilePhoneNumber: string;
  documentReceiverMobilePhoneNumber: string;
  documentDate: string;
  documentTime: number;
  documentDelFlag: number;
  receiverInfo: string;
  docType: number;
  docTypeExplanation: string;
  trackingUrl: string;
  shipmentDistance: string;
  estimatedDeliveryDate: string;
  cargoType: number;
  cargoTypeExplanation: string;
  pickupType: number;
  pickupTypeExplanation: string;
  deliveryType: number;
  deliveryTypeExplanation: string;
  deliveryDate: number;
  deliveryTime: number;
  totalPrice: number;
  totalVat: number;
  totalAmount: number;
  product: string;
  totalDesi: number;
  totalKg: number;
  totalDesiKg: number;
  totalCargo: number;
  arrivalUnitId: number;
  arrivalUnitName: string;
  departureUnitId: number;
  departureUnitName: string;
  deliveryUnitId: number;
  deliveryUnitName: string;
  cargoEventId: string;
  cargoEventExplanation: string;
  cargoReasonId: string;
  cargoReasonExplanation: string;
  documentEventId: string;
  documentReasonId: string;
  documentEventExplanation: string;
  documentReasonExplanation: string;
  delInfoDeliveryFlag: string;
  delInfoDelUnitId: string;
  delEmpName: string;
  rejectFlag: number;
  rejectStatus: string;
  rejectStatusExplanation: string;
  rejectDescription: string;
  rejectReasonExplanation: string;
  returnDocId: string;
  returnDocumentDate: string;
  returnDeliveryDate: string;
  returnStatus: string;
  returnStatusExplanation: string;
  invDocFieldVOArray: IInvDocFieldVOArray[];
  docCargoVOArray: IDocCargoVOArray[];
}
export interface IInvDocFieldVOArray {
  docId: number;
  fieldName: number;
  fieldNameExplanation: string;
  fieldValue: number;
}
export interface IDocCargoVOArray {
  docCargoId: number;
  docId: number;
  cargoNumber: number;
  cargoType: number;
  desi: number;
  kg: number;
  barcodeStringValue: number;
}
