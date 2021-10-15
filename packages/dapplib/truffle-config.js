require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stove deny remember upgrade inflict close borrow ghost'; 
let testAccounts = [
"0xc00eed8ae2403a30143e2880892350f798ad4d383dfc6b8517cbb20d96e7bec5",
"0x627872ec631f1c8c5ccd9ba706c106605bed36366ca2abdcc55997c508ea3114",
"0x8b5d8f408c5830ff0cb295ae3f3559bbc106812ecbc0b525091a85624ed41543",
"0x6c1aac7f1ed49c8c33bf2a4c443db8f6615cb4a469d9073748aec5529cee1121",
"0x8eb3dbd1c5cab949b09ede38de883ab97e89cd6c885d1da61fd6ee9400eb05aa",
"0x1fc65060351c7483e009111555bc4c756a4c29084d402c25ad70c97df3785349",
"0xc1ddce735546a463054420610af43b27d71c866bca110125a639b300465d10a5",
"0x0a786a5c686fc4b73fe07f0038be71d1997a88bd79d25eaeffcae417f42fdd84",
"0x61633fb95faf8d4b1a5c8117bf9910b44d123d034a12011971a868a01ce56ff5",
"0xc4543120def495e4c91ad0e491ab8243fd18cc99eee6b282f8e9669c1809cd2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

