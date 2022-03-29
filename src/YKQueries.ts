import soaprequest from 'easy-soap-request';

export const ykQuery = async (url: string, query: string) => {
  const reqHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    soapAction: '',
  };
  try {
    const { response } = await soaprequest({
      url: url,
      headers: reqHeaders,
      xml: query,
      timeout: 2000,
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
