import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import {
  ICredentials,
  ICreateShipment,
  ICancelShipment,
  IQueryShipment,
  ICreateShipmentResponse,
  ICancelShipmentResponse,
  IQueryShipmentResponse,
} from './types';
import { setAccount } from './credentials';
import {
  createShipmentQuery,
  cancelShipmentQuery,
  queryShipmentQuery,
} from './YKQueries';
import { YK_LIVE_URL, YK_TEST_URL } from './constants';

export class YKargo {
  private readonly account: ICredentials;
  constructor(credentials: ICredentials) {
    this.account = setAccount(credentials);
  }
  getAccountDetails() {
    return this.account;
  }

  async createShipment(query: ICreateShipment) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const xmlContent = builder.build(query);
    const SOAPQuery = this.createShipmentTemplate(xmlContent);
    const response = await createShipmentQuery(
      this.account.type === 'TEST' ? YK_TEST_URL : YK_LIVE_URL,
      SOAPQuery
    );
    const responseJSON = this.parseXmlCreateShipmentesponse(response.body);
    return responseJSON;
  }

  async cancelShipment(query: ICancelShipment) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const xmlContent = builder.build(query);
    const SOAPQuery = this.cancelShipmentTemplate(xmlContent);
    const response = await cancelShipmentQuery(
      this.account.type === 'TEST' ? YK_TEST_URL : YK_LIVE_URL,
      SOAPQuery
    );
    const responseJSON = this.parseXmlCancelShipmentesponse(response.body);
    return responseJSON;
  }

  async queryShipment(query: IQueryShipment) {
    const options = {
      ignoreAttributes: false,
    };
    const builder = new XMLBuilder(options);
    const xmlContent = builder.build(query);
    const SOAPQuery = this.queryShipmentTemplate(xmlContent);
    const response = await queryShipmentQuery(
      this.account.type === 'TEST' ? YK_TEST_URL : YK_LIVE_URL,
      SOAPQuery
    );
    const responseJSON = this.parseXmlQueryShipmentesponse(response.body);
    return responseJSON;
  }

  private createShipmentTemplate(xmlContent: string) {
    const query = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ship="http://yurticikargo.com.tr/shippingOrderDispatcherServices"><soapenv:Header/><soapenv:Body><ship:createShipment><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><userLanguage>${this.account.userLanguage}</userLanguage><ShippingOrderVO>${xmlContent}</ShippingOrderVO></ship:createShipment></soapenv:Body></soapenv:Envelope>`;
    return query;
  }
  private parseXmlCreateShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<ICreateShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
  private cancelShipmentTemplate(xmlContent: string) {
    const query = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ship="http://yurticikargo.com.tr/shippingOrderDispatcherServices"><soapenv:Header/><soapenv:Body><ship:dispatch><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><userLanguage>${this.account.userLanguage}</userLanguage><ShippingOrderVO>${xmlContent}</ShippingOrderVO></ship:dispatch></soapenv:Body></soapenv:Envelope>`;
    return query;
  }
  private parseXmlCancelShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<ICancelShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
  private queryShipmentTemplate(xmlContent: string) {
    const query = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ship="http://yurticikargo.com.tr/shippingOrderDispatcherServices"><soapenv:Header/><soapenv:Body><ship:queryShipment><wsUserName>${this.account.wsUserName}</wsUserName><wsPassword>${this.account.wsPassword}</wsPassword><userLanguage>${this.account.userLanguage}</userLanguage>${xmlContent}</ship:queryShipment></soapenv:Body></soapenv:Envelope>`;
    return query;
  }
  private parseXmlQueryShipmentesponse(data: string) {
    const parser = new XMLParser();
    const responseJSON: Partial<IQueryShipmentResponse> = parser.parse(data);
    return responseJSON;
  }
}
