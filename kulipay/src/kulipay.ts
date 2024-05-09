import {
  BuyGoods as BuyGoodsEvent,
  FundWithEth as FundWithEthEvent,
  FundWithUSDC as FundWithUSDCEvent,
  FundWithUSDT as FundWithUSDTEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PayBill as PayBillEvent
} from "../generated/Kulipay/Kulipay"
import {
  BuyGoods,
  FundWithEth,
  FundWithUSDC,
  FundWithUSDT,
  OwnershipTransferred,
  PayBill
} from "../generated/schema"

export function handleBuyGoods(event: BuyGoodsEvent): void {
  let entity = new BuyGoods(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tillNumber = event.params.tillNumber
  entity.amount = event.params.amount
  entity.payer = event.params.payer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundWithEth(event: FundWithEthEvent): void {
  let entity = new FundWithEth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mpesaAccount = event.params.mpesaAccount
  entity.amount = event.params.amount
  entity.payer = event.params.payer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundWithUSDC(event: FundWithUSDCEvent): void {
  let entity = new FundWithUSDC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mpesaAccount = event.params.mpesaAccount
  entity.amount = event.params.amount
  entity.payer = event.params.payer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundWithUSDT(event: FundWithUSDTEvent): void {
  let entity = new FundWithUSDT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mpesaAccount = event.params.mpesaAccount
  entity.amount = event.params.amount
  entity.payer = event.params.payer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayBill(event: PayBillEvent): void {
  let entity = new PayBill(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.billNumber = event.params.billNumber
  entity.amount = event.params.amount
  entity.payer = event.params.payer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
