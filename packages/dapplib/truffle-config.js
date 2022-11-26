require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong crawl remember unlock gentle light army gas'; 
let testAccounts = [
"0xb4c0521e8b9ea570b2b8886db2f97d4269430c780383ad1a18b2c2fc7caaf47c",
"0x812697eed95d9efa62749a975dda2d8655914163816b560de8d8383c8c8dae42",
"0x186cd4017455c9b99159f3a8bb0cc57cbfa79eb756c7feca528decb22a6f75dd",
"0xbd584fcd60c9ed807d736e52aad44f210f09bc097aa9eb1b223a4e4c12ac1d00",
"0xbb8c0705f4e670441d4298d6d14be3ea0631c04d6ca1e3fc883e9dc5767db650",
"0x34999ee458a135b6fb5241e31a544ae26f618eb8b5f10c60b273a68c491a3c02",
"0x9d20c487e260defb3fc9431dd3160353f1ffaa75039eca89c5acbc7921a3b9e4",
"0xd45876fd2dbc808b47fc5131aeb9f2ee2376f26bb616337372f13e39eb3f9a13",
"0x3319652c6cf6ef77634dd2cb1cb13f07770faf3ecbf85e168ad17c013ec9de76",
"0x468123028b05869146ae0ea4fa461770cd13f548d81f12783f032ff21d0c852b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


