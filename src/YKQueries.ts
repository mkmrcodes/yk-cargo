import soaprequest from 'easy-soap-request';

export const createShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 2000,
    });
    //const { headers, body, statusCode } = response;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const cancelShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 2000,
    });
    //const { headers, body, statusCode } = response;
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const queryShipmentQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 2000,
    });
    //const { headers, body, statusCode } = response;
    return response;
  } catch (err) {
    console.log(err);
  }
};
