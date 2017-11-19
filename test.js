const WebCrypto = require('./index');
console.log(WebCrypto);

const instance = new WebCrypto();
console.log(instance);

const rv = instance.getRandomValues(new Uint8Array(32));
console.log(JSON.stringify(rv));

require('./gostCipher.test')();
require('./gostDigest.test')();
require('./gostSign.test')();
