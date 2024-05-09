# kulipa
## A decentralized finance network for processing payments to M-Pesa using crypto. <br>

Kulipa provides an easy system for performing transactions to Mpesa accounts directly from your crypto wallets.
Users can send funds, buy goods, and pay bills such as water bills, electricity bills, TV subscriptions etc without
needing to use P2P or escrow platforms. This removes the risks involved with P2P transactions, the distasteful waiting 
periods for the other peer to either pay or release Ksh, transaction issues that may arise sometimes due to transaction
delays or other issues that might take days to be settled by the escrow platform.

Kulipay brings a new total flex, as users can perform seamless transactions with just one or two click of the button. <br>

## How to use

**fund Mpesa Account**: This sends the Ksh equivalent of the sent token to the desired Mpesa account. Users can fund accounts using either of USDT, USDC or Ether.
params: ( MpesaAccount: uint256, amount: uint256 ) <br>

**buy goods**: Users can buy goods simply by passing the vendor's "till number" and the amount to pay. Payment can also be done with either USDT, USDC or Ether.
params: (tillNumber: uint256, amount: uint256) <br>

**pay bills**: This enables users to pay utility bills and other bills. Users can pay for TV and internet, Electricity, Water, Government services etc using the three crypto 
tokens and coin mentioned above.
params: (billnumber: uin256, amount: uint256) <br>

**More services coming...**
In the coming versions, other services such as medical bills, insurance, travels, postcard, event bookings, cinema and others will be added. <br>

## Developers
The Kulipay team is making the Kulipay code base open source following the old web3 tradition, hence we implore all developers and non developers alike who finds any buys, has any feedbacks or suggestions to open an issue, or make a pull request with the improved code or correction. 

Kulipay contract address on Base Sepolia: **0xE0Bb821fEced4cd10206445e69959175d2b86884**
Kulipay token address on Base Sepolia: **0x0ABfaa36626E589D5D55a92F02e3cBbF950A8ce2**
