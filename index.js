var gost = require('./gostCrypto');
require('./gostASN1');
require('./gostCert');
require('./gostCipher');
require('./gostCMS');
require('./gostCoding');
require('./gostDigest');
require('./gostEngine');
require('./gostKeys');
require('./gostRandom');
require('./gostSecurity');
require('./gostSign');
require('./gostViewer');

function WebCrypto() {
  Object.assign(this, gost);
};

module.exports = WebCrypto;
