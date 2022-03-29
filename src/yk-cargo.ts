import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import {
  ICredentials,
  ICreateShipmentResponse,
  ICancelShipmentResponse,
  IUpdateShipmentDesiWeightData,
  ICancelShipmentData,
  ICustomerParams,
  IQueryParams,
  IUpdateShipmentResponse,
  IQueryResponse,
  ICreateShipment,
} from './types';
import { setAccount } from './credentials';
import { ykQuery } from './YKQueries';
import {
  YK_LIVE_MAIN_URL,
  YK_LIVE_REPORT_URL,
  YK_TEST_MAIN_URL,
  YK_TEST_REPORT_URL,
} from './constants';

export class YKargo {
  private readonly account: ICredentials;
  constructor(credentials: ICredentials) {
    this.account = setAccount(credentials);
  }
  getAccountDetails() {
    return this.account;
  }

  async createShipment(createNgiShipmentWithAddress: ICreateShipment) {
    const builder = new XMLBuilder({
      ignoreAttributes: false,
      //preserveOrder: true,
      //processEntities: false,
      suppressEmptyNode: true,
    });

    const data = builder.build(createNgiShipmentWithAddress);

    const SOAPQuery = this.createShipmentTemplate(data).replace(/\n|\r/g, '');
    console.log('SOAPQuery:', SOAPQuery);
    const response = await ykQuery(
      this.account.type === 'TEST' ? YK_TEST_MAIN_URL : YK_LIVE_MAIN_URL,
      SOAPQuery
    );
    const responseJSON = this.parseXmlCreateShipmentesponse(response.body);
    return responseJSON;
  }

  async updateShipmentDesiWeight(query: IUpdateShipmentDesiWeightData) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const xmlContent = builder.build(query);
    const SOAPQuery = this.updateShipmentDesiWeightTemplate(xmlContent).replace(
      /\n|\r/g,
      ''
    );
    const response = await ykQuery(
      this.account.type === 'TEST' ? YK_TEST_MAIN_URL : YK_LIVE_MAIN_URL,
      SOAPQuery
    );
    console.log({ response });
    const responseJSON = this.parseXmlUpdateShipmentesponse(response.body);
    return responseJSON;
  }

  async cancelShipment(query: ICancelShipmentData) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const xmlContent = builder.build(query);
    const SOAPQuery = this.cancelShipmentTemplate(xmlContent).replace(
      /\n|\r/g,
      ''
    );
    const response = await ykQuery(
      this.account.type === 'TEST' ? YK_TEST_MAIN_URL : YK_LIVE_MAIN_URL,
      SOAPQuery
    );
    console.log({ response });
    const responseJSON = this.parseXmlCancelShipmentesponse(response.body);
    return responseJSON;
  }

  async queryShipment(
    customerParams: ICustomerParams,
    queryParams: IQueryParams
  ) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const customerParamsData = builder.build(customerParams);
    const queryParamsData = builder.build(queryParams);
    const SOAPQuery = this.queryShipmentTemplate(
      customerParamsData,
      queryParamsData
    ).replace(/\n|\r/g, '');
    console.log(SOAPQuery);

    const response = await ykQuery(
      this.account.type === 'TEST' ? YK_TEST_REPORT_URL : YK_LIVE_REPORT_URL,
      SOAPQuery
    );
    console.log({ response });
    const responseJSON = this.parseXmlQueryShipmentesponse(response.body);
    return responseJSON;
  }

  private createShipmentTemplate(data: string) {
    const query = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ngis="http://yurticikargo.com.tr/NgiShipmentInterfaceServices"><soapenv:Header /><soapenv:Body><ngis:createNgiShipmentWithAddress><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><wsUserLanguage>${this.account.userLanguage}</wsUserLanguage>${data}<payerCustData><invCustId>${this.account.companyYKId}</invCustId></payerCustData></ngis:createNgiShipmentWithAddress></soapenv:Body></soapenv:Envelope>`;
    return query;
  }

  private updateShipmentDesiWeightTemplate(
    updateShipmentDesiWeightContent: string
  ) {
    const query = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ngis="http://yurticikargo.com.tr/NgiShipmentInterfaceServices"><soapenv:Header /><soapenv:Body><ngis:updateShipmentDesiWeight><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><wsUserLanguage>${this.account.userLanguage}</wsUserLanguage>${updateShipmentDesiWeightContent}</ngis:updateShipmentDesiWeight></soapenv:Body></soapenv:Envelope>`;
    return query;
  }

  private cancelShipmentTemplate(cancelShipmentContent: string) {
    const query = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ngis="http://yurticikargo.com.tr/NgiShipmentInterfaceServices"><soapenv:Header/><soapenv:Body><ngis:cancelNgiShipment><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><wsUserLanguage>${this.account.userLanguage}</wsUserLanguage>${cancelShipmentContent}</ngis:cancelNgiShipment></soapenv:Body></soapenv:Envelope>`;
    return query;
  }

  private queryShipmentTemplate(customerParams: string, queryParams: string) {
    const query = `<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ssw="http://yurticikargo.com.tr/sswIntegrationServices"><soapenv:Header/><soapenv:Body><ssw:listInvDocumentInterfaceByReference><userName>${this.account.wsUserName}</userName><password>${this.account.wsPassword}</password><language>${this.account.userLanguage}</language><custParamsVO>${customerParams}</custParamsVO>${queryParams}</ssw:listInvDocumentInterfaceByReference></soapenv:Body></soapenv:Envelope>`;
    return query;
  }
  private parseXmlCreateShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<ICreateShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
  private parseXmlUpdateShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<IUpdateShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
  private parseXmlCancelShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<ICancelShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
  private parseXmlQueryShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<IQueryResponse> = parser.parse(data);
    return responseJSON;
  }
}
