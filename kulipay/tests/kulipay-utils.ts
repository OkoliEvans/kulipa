import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BuyGoods,
  FundWithEth,
  FundWithUSDC,
  FundWithUSDT,
  OwnershipTransferred,
  PayBill
} from "../generated/Kulipay/Kulipay"

export function createBuyGoodsEvent(
  tillNumber: BigInt,
  amount: BigInt,
  payer: Address
): BuyGoods {
  let buyGoodsEvent = changetype<BuyGoods>(newMockEvent())

  buyGoodsEvent.parameters = new Array()

  buyGoodsEvent.parameters.push(
    new ethereum.EventParam(
      "tillNumber",
      ethereum.Value.fromUnsignedBigInt(tillNumber)
    )
  )
  buyGoodsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  buyGoodsEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )

  return buyGoodsEvent
}

export function createFundWithEthEvent(
  mpesaAccount: BigInt,
  amount: BigInt,
  payer: Address
): FundWithEth {
  let fundWithEthEvent = changetype<FundWithEth>(newMockEvent())

  fundWithEthEvent.parameters = new Array()

  fundWithEthEvent.parameters.push(
    new ethereum.EventParam(
      "mpesaAccount",
      ethereum.Value.fromUnsignedBigInt(mpesaAccount)
    )
  )
  fundWithEthEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundWithEthEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )

  return fundWithEthEvent
}

export function createFundWithUSDCEvent(
  mpesaAccount: BigInt,
  amount: BigInt,
  payer: Address
): FundWithUSDC {
  let fundWithUsdcEvent = changetype<FundWithUSDC>(newMockEvent())

  fundWithUsdcEvent.parameters = new Array()

  fundWithUsdcEvent.parameters.push(
    new ethereum.EventParam(
      "mpesaAccount",
      ethereum.Value.fromUnsignedBigInt(mpesaAccount)
    )
  )
  fundWithUsdcEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundWithUsdcEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )

  return fundWithUsdcEvent
}

export function createFundWithUSDTEvent(
  mpesaAccount: BigInt,
  amount: BigInt,
  payer: Address
): FundWithUSDT {
  let fundWithUsdtEvent = changetype<FundWithUSDT>(newMockEvent())

  fundWithUsdtEvent.parameters = new Array()

  fundWithUsdtEvent.parameters.push(
    new ethereum.EventParam(
      "mpesaAccount",
      ethereum.Value.fromUnsignedBigInt(mpesaAccount)
    )
  )
  fundWithUsdtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundWithUsdtEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )

  return fundWithUsdtEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPayBillEvent(
  billNumber: BigInt,
  amount: BigInt,
  payer: Address
): PayBill {
  let payBillEvent = changetype<PayBill>(newMockEvent())

  payBillEvent.parameters = new Array()

  payBillEvent.parameters.push(
    new ethereum.EventParam(
      "billNumber",
      ethereum.Value.fromUnsignedBigInt(billNumber)
    )
  )
  payBillEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payBillEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )

  return payBillEvent
}
