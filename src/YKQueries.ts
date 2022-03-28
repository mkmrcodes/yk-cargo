import soaprequest from 'easy-soap-request';

export const createShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    SOAPAction: '',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 5000,
    });
    const { headers, body, statusCode } = response;
    console.log('headers:', headers);
    console.log('body:', body);
    console.log('statusCode:', statusCode);
    return response;
  } catch (err) {
    console.log('error from yk:', err);
  }
};

export const updateShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    SOAPAction: '',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 5000,
    });
    const { headers, body, statusCode } = response;
    console.log('headers:', headers);
    console.log('body:', body);
    console.log('statusCode:', statusCode);
    return response;
  } catch (err) {
    console.log('error from yk:', err);
  }
};
export const cancelShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    SOAPAction: '',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 5000,
    });
    const { headers, body, statusCode } = response;
    console.log('headers:', headers);
    console.log('body:', body);
    console.log('statusCode:', statusCode);
    return response;
  } catch (err) {
    console.log('error from yk:', err);
  }
};
export const queryShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    SOAPAction: '',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 5000,
    });
    const { headers, body, statusCode } = response;
    console.log('headers:', headers);
    console.log('body:', body);
    console.log('statusCode:', statusCode);
    return response;
  } catch (err) {
    console.log('error from yk:', err);
  }
};
