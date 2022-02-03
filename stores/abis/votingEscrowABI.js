export const votingEscrowABI = [
  {
    name: 'CommitOwnership',
    inputs: [{ type: 'address', name: 'admin', indexed: false }],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'ApplyOwnership',
    inputs: [{ type: 'address', name: 'admin', indexed: false }],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Deposit',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'value', indexed: false },
      { type: 'uint256', name: 'locktime', indexed: true },
      { type: 'int128', name: 'type', indexed: false },
      { type: 'uint256', name: 'ts', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Withdraw',
    inputs: [
      { type: 'address', name: 'provider', indexed: true },
      { type: 'uint256', name: 'value', indexed: false },
      { type: 'uint256', name: 'ts', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Supply',
    inputs: [
      { type: 'uint256', name: 'prevSupply', indexed: false },
      { type: 'uint256', name: 'supply', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    outputs: [],
    inputs: [
      { type: 'address', name: 'token_addr' },
      { type: 'string', name: '_name' },
      { type: 'string', name: '_symbol' },
      { type: 'string', name: '_version' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    name: 'commit_transfer_ownership',
    outputs: [],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 37597,
  },
  {
    name: 'apply_transfer_ownership',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 38497,
  },
  {
    name: 'commit_smart_wallet_checker',
    outputs: [],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 36307,
  },
  {
    name: 'apply_smart_wallet_checker',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 37095,
  },
  {
    name: 'get_last_user_slope',
    outputs: [{ type: 'int128', name: '' }],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2569,
  },
  {
    name: 'user_point_history__ts',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'address', name: '_addr' },
      { type: 'uint256', name: '_idx' },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 1672,
  },
  {
    name: 'locked__end',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: '_addr' }],
    stateMutability: 'view',
    type: 'function',
    gas: 1593,
  },
  {
    name: 'checkpoint',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 37052342,
  },
  {
    name: 'deposit_for',
    outputs: [],
    inputs: [
      { type: 'address', name: '_addr' },
      { type: 'uint256', name: '_value' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 74279891,
  },
  {
    name: 'create_lock',
    outputs: [],
    inputs: [
      { type: 'uint256', name: '_value' },
      { type: 'uint256', name: '_unlock_time' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 74281465,
  },
  {
    name: 'increase_amount',
    outputs: [],
    inputs: [{ type: 'uint256', name: '_value' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 74280830,
  },
  {
    name: 'increase_unlock_time',
    outputs: [],
    inputs: [{ type: 'uint256', name: '_unlock_time' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 74281578,
  },
  {
    name: 'withdraw',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 37223566,
  },
  {
    name: 'balanceOf',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'addr' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'balanceOf',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'address', name: 'addr' },
      { type: 'uint256', name: '_t' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'balanceOfAt',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [
      { type: 'address', name: 'addr' },
      { type: 'uint256', name: '_block' },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 514333,
  },
  {
    name: 'totalSupply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'totalSupply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'uint256', name: 't' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'totalSupplyAt',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'uint256', name: '_block' }],
    stateMutability: 'view',
    type: 'function',
    gas: 812560,
  },
  {
    name: 'changeController',
    outputs: [],
    inputs: [{ type: 'address', name: '_newController' }],
    stateMutability: 'nonpayable',
    type: 'function',
    gas: 36907,
  },
  {
    name: 'token',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1841,
  },
  {
    name: 'supply',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1871,
  },
  {
    name: 'locked',
    outputs: [
      { type: 'int128', name: 'amount' },
      { type: 'uint256', name: 'end' },
    ],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 3359,
  },
  {
    name: 'epoch',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 1931,
  },
  {
    name: 'point_history',
    outputs: [
      { type: 'int128', name: 'bias' },
      { type: 'int128', name: 'slope' },
      { type: 'uint256', name: 'ts' },
      { type: 'uint256', name: 'blk' },
    ],
    inputs: [{ type: 'uint256', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 5550,
  },
  {
    name: 'user_point_history',
    outputs: [
      { type: 'int128', name: 'bias' },
      { type: 'int128', name: 'slope' },
      { type: 'uint256', name: 'ts' },
      { type: 'uint256', name: 'blk' },
    ],
    inputs: [
      { type: 'address', name: 'arg0' },
      { type: 'uint256', name: 'arg1' },
    ],
    stateMutability: 'view',
    type: 'function',
    gas: 6079,
  },
  {
    name: 'user_point_epoch',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [{ type: 'address', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2175,
  },
  {
    name: 'slope_changes',
    outputs: [{ type: 'int128', name: '' }],
    inputs: [{ type: 'uint256', name: 'arg0' }],
    stateMutability: 'view',
    type: 'function',
    gas: 2166,
  },
  {
    name: 'controller',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2081,
  },
  {
    name: 'transfersEnabled',
    outputs: [{ type: 'bool', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2111,
  },
  {
    name: 'name',
    outputs: [{ type: 'string', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 8543,
  },
  {
    name: 'symbol',
    outputs: [{ type: 'string', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 7596,
  },
  {
    name: 'version',
    outputs: [{ type: 'string', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 7626,
  },
  {
    name: 'decimals',
    outputs: [{ type: 'uint256', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2231,
  },
  {
    name: 'future_smart_wallet_checker',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2261,
  },
  {
    name: 'smart_wallet_checker',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2291,
  },
  {
    name: 'admin',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2321,
  },
  {
    name: 'future_admin',
    outputs: [{ type: 'address', name: '' }],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
    gas: 2351,
  },
];
