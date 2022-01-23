Not tested yet. As soon as I got an account I'll test and update the package.

This package is for the ones using TypeScript/Nodejs (like Nestjs for their apis) and having trouble with yuricikargo xml api.

To work this package, u need to have at least a test account on yurticikargo api. And for that u must have a static ip address and your firm must be registered.

usage:

const account = { wsUserName: 'YKTEST', wsPassword: 'YK', userLanguage: 'TR', type: 'TEST', }; const createQuery = { cargoKey: '123456789', invoiceKey: '123456', receiverCustName: 'John Doe', receiverAddress: 'gdfgdfsg g fdsgfdgfd g fgfdgfg 22', cityName: 'Ankara', townName: 'Yenimahalle', receiverPhone1: '05331111111', };

const yKargo = new YKargo(account); yKargo.createShipment(createQuery).then((response) => console.log('response', response));

Contributions are welcome :)
