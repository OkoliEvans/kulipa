import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BuyGoods } from "../generated/schema"
import { BuyGoods as BuyGoodsEvent } from "../generated/Kulipay/Kulipay"
import { handleBuyGoods } from "../src/kulipay"
import { createBuyGoodsEvent } from "./kulipay-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tillNumber = BigInt.fromI32(234)
    let amount = BigInt.fromI32(234)
    let payer = Address.fromString("0x0000000000000000000000000000000000000001")
    let newBuyGoodsEvent = createBuyGoodsEvent(tillNumber, amount, payer)
    handleBuyGoods(newBuyGoodsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BuyGoods created and stored", () => {
    assert.entityCount("BuyGoods", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BuyGoods",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tillNumber",
      "234"
    )
    assert.fieldEquals(
      "BuyGoods",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "BuyGoods",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "payer",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
