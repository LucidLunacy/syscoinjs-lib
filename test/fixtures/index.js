var BN = require('bn.js')
var utils = require('../../utils')
const scalarPct = 1000
const COIN = 100000000
module.exports = [{
  description: 'new asset',
  version: utils.SYSCOIN_TX_VERSION_ASSET_ACTIVATE,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'add9bf0783d1e18bccf016e5c779be5cd390d8906f7b2ef4afa28c775c888b21', vout: 0, script: Buffer.from('001495e1cb724b74c32526209265c9f96a4e8ed256db', 'hex'), value: 100000000000 }
    ]
  },
  assetOpts: { precision: 8, symbol: 'CAT', updatecapabilityflags: 255, balance: new BN(10000000000), maxsupply: new BN(100000000000), description: 'publicvalue' },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  expected: {
    hex: ''
  }
},
{
  description: 'update asset',
  version: utils.SYSCOIN_TX_VERSION_ASSET_UPDATE,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'd31783dcbb96cf104970a5fd427f3c9f91921233478f80d8b63d80b2089ea15c', vout: 0, script: Buffer.from('0014f0cb48bf627b8603adfa80be7cbe980f1964294b', 'hex'), value: 99999796, assetInfo: { assetGuid: 1552452385, value: new BN(0) } },
      { txId: 'd31783dcbb96cf104970a5fd427f3c9f91921233478f80d8b63d80b2089ea15c', vout: 2, script: Buffer.from('001493b69b7e29c5869a50a41c122c51423003335184', 'hex'), value: 84900000000 }
    ],
    assets: [
      {
        assetGuid: 1552452385,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  assetGuid: 1552452385,
  assetOpts: { updatecapabilityflags: 127, balance: new BN(42000000000), contract: Buffer.from('2b1e58b979e4b2d72d8bca5bb4646ccc032ddbfc', 'hex'), description: 'new publicvalue' },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1552452385, { changeAddress: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9', outputs: [{ value: new BN(0), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send asset',
  version: utils.SYSCOIN_TX_VERSION_ASSET_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'befed752e1444b66fd91dd121f772d0f2f081c579f04b419eb18960dcd55e84f', vout: 2, script: Buffer.from('0014fb1a61908e16c8c5ad306b6d8ef11a6cc4f91ff5', 'hex'), value: 84900000000 },
      { txId: '5e9c72abf1d3df7ac5f673de603cd7946b25e58de8e8f87a852ba291790a5181', vout: 0, script: Buffer.from('001462621943decf05bd265f6c352db0e42f73a60f68', 'hex'), value: 99999593, assetInfo: { assetGuid: 1635229536, value: new BN(0) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9', outputs: [{ value: new BN(1000000000), address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq' }, { value: new BN(0), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send asset allocation',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a62', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542780', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(1000000000) } },
      { txId: '2cf903537c6c161a1c65d940758b63efd4706fc8f78eb21d252612407e59e865', vout: 0, script: Buffer.from('0014ab0ed68aa74cc422d69e4d675eb029ab93211c4c', 'hex'), value: 100000000 }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(600000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send multi asset allocations with notarization',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a62', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542780', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(100000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a63', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542781', 'hex'), value: 980, assetInfo: { assetGuid: 1635229537, value: new BN(200000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a64', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542782', 'hex'), value: 980, assetInfo: { assetGuid: 1635229538, value: new BN(300000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a65', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542783', 'hex'), value: 980, assetInfo: { assetGuid: 1635229539, value: new BN(400000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a66', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542784', 'hex'), value: 980, assetInfo: { assetGuid: 1635229540, value: new BN(500000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a67', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542785', 'hex'), value: 980, assetInfo: { assetGuid: 1635229541, value: new BN(600000000) } },
      { txId: '2cf903537c6c161a1c65d940758b63efd4706fc8f78eb21d252612407e59e865', vout: 0, script: Buffer.from('0014ab0ed68aa74cc422d69e4d675eb029ab93211c4c', 'hex'), value: 100000000 }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229537,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229538,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229539,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229540,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229541,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }, { value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229537, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(200000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229538, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(250000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229539, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(300000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229540, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(350000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229541, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(500000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send multi asset allocations (varied sys values) with notarization',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a62', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542780', 'hex'), value: 9800, assetInfo: { assetGuid: 1635229536, value: new BN(100000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a63', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542781', 'hex'), value: 9800, assetInfo: { assetGuid: 1635229537, value: new BN(200000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a64', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542782', 'hex'), value: 980, assetInfo: { assetGuid: 1635229538, value: new BN(300000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a65', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542783', 'hex'), value: 9800, assetInfo: { assetGuid: 1635229539, value: new BN(400000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a66', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542784', 'hex'), value: 980, assetInfo: { assetGuid: 1635229540, value: new BN(500000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a67', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542785', 'hex'), value: 980, assetInfo: { assetGuid: 1635229541, value: new BN(600000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229537,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229538,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229539,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229540,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229541,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },

  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }, { value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229537, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(200000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229538, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(250000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229539, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(300000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229540, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(350000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229541, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(500000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send multi asset allocations with notarization + gas in non-selected asset',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a62', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542780', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(100000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a63', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542781', 'hex'), value: 980, assetInfo: { assetGuid: 1635229537, value: new BN(200000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a64', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542782', 'hex'), value: 980, assetInfo: { assetGuid: 1635229538, value: new BN(300000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a65', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542783', 'hex'), value: 980, assetInfo: { assetGuid: 1635229539, value: new BN(400000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a66', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542784', 'hex'), value: 980, assetInfo: { assetGuid: 1635229540, value: new BN(500000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a67', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542785', 'hex'), value: 980, assetInfo: { assetGuid: 1635229541, value: new BN(600000000) } },
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a68', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542786', 'hex'), value: 980000, assetInfo: { assetGuid: 1635229542, value: new BN(1000000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229537,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229538,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229539,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229540,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        notaryKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        notaryDetails: {
          endPoint: 'https://test.com',
          instantTransfers: 1,
          HDRequired: 1
        }
      },
      {
        assetGuid: 1635229541,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      },
      {
        assetGuid: 1635229542,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },

  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }, { value: new BN(50000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229537, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(200000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229538, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(250000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229539, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(300000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229540, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(350000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }],
    [1635229541, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(500000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'send asset allocation with auxfees',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_SEND,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'c6e7702f1ab817bacf81e5678ba89e0b43a8a7b6f56c4c055aa8aeda87197a62', vout: 0, script: Buffer.from('0014712a0433b3be8c2860db2d313c44fa1967542780', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(1000000000) } },
      { txId: '2cf903537c6c161a1c65d940758b63efd4706fc8f78eb21d252612407e59e865', vout: 0, script: Buffer.from('0014ab0ed68aa74cc422d69e4d675eb029ab93211c4c', 'hex'), value: 100000000 }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000),
        auxFeeKeyID: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        auxFeeDetails: {
          auxfees: [{
            bound: 0,
            percent: 1 * scalarPct
          },
          {
            bound: 10 * COIN,
            percent: 0.4 * scalarPct
          },
          {
            bound: 250 * COIN,
            percent: 0.2 * scalarPct
          },
          {
            bound: 2500 * COIN,
            percent: 0.07 * scalarPct
          },
          {
            bound: 25000 * COIN,
            percent: 0.007 * scalarPct
          },
          {
            bound: 250000 * COIN,
            percent: 0
          }
          ]
        }
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(600000000), address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9' }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'burn asset allocation to syscoin',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_BURN_TO_SYSCOIN,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: 'e77901b5181e1ac5dc428d43ccc7e677c8c9179b982c779464e95c3190054c0e', vout: 0, script: Buffer.from('001483516da577935f20272bca9b62d262a4226f9c72', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(600000000) } },
      { txId: 'e77901b5181e1ac5dc428d43ccc7e677c8c9179b982c779464e95c3190054c0e', vout: 2, script: Buffer.from('001461dffc7defeb8e0b5cd00ff24c196f71fe31feee', 'hex'), value: 99999771, assetInfo: { assetGuid: 1635229536, value: new BN(400000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  assetOpts: { ethaddress: Buffer.from('', 'hex') },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(400000000) }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'burn asset allocation to ethereum',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_BURN_TO_ETHEREUM,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 100000914, assetInfo: { assetGuid: 1635229536, value: new BN(900000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  assetOpts: { ethaddress: Buffer.from('9667de58c15475626165eaa4c9970e409e1181d0', 'hex') },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(100000000) }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'burn asset allocation to ethereum multiple inputs',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_BURN_TO_ETHEREUM,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(900000000) } },
      { txId: '36f6b17b715ccd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 0, script: Buffer.from('001497e5ec8eb455b3bba42c5d5f952f67c26793115d', 'hex'), value: 100000914 }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  assetOpts: { ethaddress: Buffer.from('9667de58c15475626165eaa4c9970e409e1181d0', 'hex') },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(100000000) }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'burn asset allocation to ethereum multiple inputs, change has asset',
  version: utils.SYSCOIN_TX_VERSION_ALLOCATION_BURN_TO_ETHEREUM,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 980, assetInfo: { assetGuid: 1635229536, value: new BN(900000000) } },
      { txId: '36f6b17b715ccd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 0, script: Buffer.from('001497e5ec8eb455b3bba42c5d5f952f67c26793115d', 'hex'), value: 100000914, assetInfo: { assetGuid: 1635229536, value: new BN(800000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  assetOpts: { ethaddress: Buffer.from('9667de58c15475626165eaa4c9970e409e1181d0', 'hex') },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  assetMap: new Map([
    [1635229536, { changeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', outputs: [{ value: new BN(100000000) }] }]
  ]),
  expected: {
    hex: ''
  }
},
{
  description: 'standard sys send',
  version: 2,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 100000000 },
      { txId: '36f6b17b715ccd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 0, script: Buffer.from('001497e5ec8eb455b3bba42c5d5f952f67c26793115d', 'hex'), value: 100000914 }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  outputs: [
    { address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9', value: new BN(150000000) }
  ],
  expected: {
    hex: ''
  }
},
{
  description: 'standard sys send with asset inputs',
  version: 2,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 100000000, assetInfo: { assetGuid: 1635229536, value: new BN(900000000) } },
      { txId: '36f6b17b715ccd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 0, script: Buffer.from('001497e5ec8eb455b3bba42c5d5f952f67c26793115d', 'hex'), value: 100000914, assetInfo: { assetGuid: 1635229536, value: new BN(800000000) } }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  outputs: [
    { address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9', value: new BN(150000000) }
  ],
  expected: {
    hex: ''
  }
},
{
  description: 'standard sys send with asset input and regular input',
  version: 2,
  feeRate: new BN(10),
  utxoObj: {
    utxos: [
      { txId: '26f6b17b715bcd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 1, script: Buffer.from('001487e5ec8eb455b3bbf42c5d5f952f67c26793115d', 'hex'), value: 100000000, assetInfo: { assetGuid: 1635229536, value: new BN(900000000) } },
      { txId: '36f6b17b715ccd5fda921108b3bedd9a3d89ea58c666a40a3e5a6f833a454e36', vout: 0, script: Buffer.from('001497e5ec8eb455b3bba42c5d5f952f67c26793115d', 'hex'), value: 100000914 }
    ],
    assets: [
      {
        assetGuid: 1635229536,
        decimals: 8,
        pubData: utils.encodePubDataFromFields('publicvalue').toString(),
        symbol: utils.encodeToBase64('CAT'),
        updateCapabilityFlags: 255,
        balance: new BN(10000000000),
        totalSupply: new BN(0),
        maxSupply: new BN(100000000000)
      }
    ]
  },
  sysChangeAddress: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
  outputs: [
    { address: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9', value: new BN(150000000) }
  ],
  expected: {
    hex: ''
  }
}
]
