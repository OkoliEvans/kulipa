// SPDX-License-Identifier: APACHE3.0
pragma solidity ^0.8.2;

import "./IKulipay.sol";
import "./pricefeed.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-contracts/contracts/access/Ownable.sol";

contract Kulipay is Ownable, PriceConsumerV3 {

    event FundWithUSDT(uint256 mpesaAccount, uint256 amount, address payer);
    event FundWithUSDC(uint256 mpesaAccount, uint256 amount, address payer);
    event FundWithEth(uint256 mpesaAccount, uint256 amount, address payer);
    event PayBill(uint256 billNumber, uint256 amount, address payer);
    event BuyGoods(uint256 tillNumber, uint256 amount, address payer);

    /// accounts deployed on Base sepolia
    address public USDT = 0x22c0DB4CC9B339E34956A5699E5E95dC0E00c800;
    address public USDC = 0x081827b8C3Aa05287b5aA2bC3051fbE638F33152;
    address public KulipayToken = 0x0ABfaa36626E589D5D55a92F02e3cBbF950A8ce2;
    address public vault = 0xd2aD6C9147281CC2759b48EBF78681C00Ddf12af;

    struct User {
        uint256 mpesaAccount;
        uint256 totalFundings;
    }

    address[] users;
    mapping(address user => User userStruct) userDetail;

    constructor() Ownable(msg.sender) {}

    function getUserDetails(address user) external view returns(User memory) {
        return userDetail[user];
    }

    function setNewVault(address newVault) external onlyOwner {
        require(newVault != address(0), "Invalid newVault");
        vault = newVault;
    }

    function fundWithUSDT(uint256 mpesaAccount, uint256 amount) external {
        require(mpesaAccount > 0, "Invalid mpesa account");
        require(
            amount >= IERC20(USDT).balanceOf(msg.sender),
            "Insufficient balance"
        );
        uint256 latestUSDTPrice = uint256(LatestUSDTprice());
        uint256 rate = amount * latestUSDTPrice;
        IERC20(USDT).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        userDetail[msg.sender].mpesaAccount = mpesaAccount;
        userDetail[msg.sender].totalFundings += rate;
        emit FundWithUSDT(mpesaAccount, rate, msg.sender);
    }

    function fundWithUSDC(uint256 mpesaAccount, uint256 amount) external {
        require(mpesaAccount > 0, "Invalid mpesa account");
        require(
            amount >= IERC20(USDC).balanceOf(msg.sender),
            "Insufficient balance"
        );
        uint256 latestUSDCPrice = uint256(LatestUSDCprice());
        uint256 rate = amount * latestUSDCPrice;
        IERC20(USDC).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        userDetail[msg.sender].mpesaAccount = mpesaAccount;
        userDetail[msg.sender].totalFundings += rate;
        emit FundWithUSDC(mpesaAccount, rate, msg.sender);
    }

    function fundWithEth(
        uint256 mpesaAccount
    ) external payable {
        require(mpesaAccount > 0, "Invalid params");
        uint256 latestEthPrice = uint256(LatestETHprice());
        uint256 rate = msg.value * latestEthPrice;
        (bool success, bytes memory data) = payable(vault).call{value: msg.value}(
            ""
        );
        require(success, "Ether funding failed");
        users.push(msg.sender);
        userDetail[msg.sender].mpesaAccount = mpesaAccount;
        userDetail[msg.sender].totalFundings += rate;
        emit FundWithEth(mpesaAccount, rate, msg.sender);
    }

    function payBillWithUSDT(uint256 billNumber, uint256 amount) external {
        require(billNumber > 0, "Invalid bill number");
        require(
            amount >= IERC20(USDT).balanceOf(msg.sender),
            "Insufficient USDT balance"
        );
        uint256 latestUSDTPrice = uint256(LatestUSDTprice());
        uint256 rate = amount * latestUSDTPrice;
        IERC20(USDT).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        emit PayBill(billNumber, rate, msg.sender);
    }

    function payBillWithUSDC(uint256 billNumber, uint256 amount) external {
        require(billNumber > 0, "Invalid bill number");
        require(
            amount >= IERC20(USDC).balanceOf(msg.sender),
            "Insufficient USDC balance"
        );
        uint256 latestUSDCPrice = uint256(LatestUSDCprice());
        uint256 rate = amount * latestUSDCPrice;
        IERC20(USDC).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        emit PayBill(billNumber, rate, msg.sender);
    }

    function payBillWithETH(
        uint256 billNumber
    ) external payable {
        require(billNumber > 0 && msg.value > 0, "Invalid params");
        uint256 latestETHPrice = uint256(LatestETHprice());
        uint256 rate = msg.value * latestETHPrice;
        (bool success, bytes memory data) = payable(vault).call{value: msg.value}("");
        require(success, "Ether send fail");
        users.push(msg.sender);
        emit PayBill(billNumber, rate, msg.sender);
    }

    function buyGoodsWithUSDT(uint256 tillNumber, uint256 amount) external {
        require(tillNumber > 0, "Invalid bill number");
        require(
            amount >= IERC20(USDT).balanceOf(msg.sender),
            "Insufficient USDT balance"
        );
        uint256 latestUSDTPrice = uint256(LatestUSDTprice());
        uint256 rate = amount * latestUSDTPrice;
        IERC20(USDT).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        emit BuyGoods(tillNumber, rate, msg.sender);
    }

    function buyGoodsWithUSDC(uint256 tillNumber, uint256 amount) external {
        require(tillNumber > 0, "Invalid bill number");
        require(
            amount >= IERC20(USDC).balanceOf(msg.sender),
            "Insufficient USDC balance"
        );
        uint256 latestUSDCPrice = uint256(LatestUSDCprice());
        uint256 rate = amount * latestUSDCPrice;
        IERC20(USDT).transferFrom(msg.sender, vault, rate);
        users.push(msg.sender);
        emit BuyGoods(tillNumber, rate, msg.sender);
    }

    function buyGoodsWithETH(
        uint256 tillNumber
    ) external payable {
        require(tillNumber > 0 && msg.value > 0, "Invalid params");
        uint256 latestETHPrice = uint256(LatestETHprice());
        uint256 rate = msg.value * latestETHPrice;
        (bool success, bytes memory data) = payable(vault).call{value: msg.value}("");
        require(success, "Ether send fail");
        users.push(msg.sender);
        emit BuyGoods(tillNumber, rate, msg.sender);
    }

    function withdrawUSDT(uint256 amount, address to) external onlyOwner {
        require(
            amount >= IERC20(USDT).balanceOf(vault),
            "Insufficient vault balance"
        );
        require(to != address(0), "Invalid receiver");
       IERC20(USDT).transferFrom(vault, to, amount);
    }

    function withdrawUSDC(uint256 amount, address to) external onlyOwner {
        require(
            amount >= IERC20(USDC).balanceOf(vault),
            "Insufficient vault balance"
        );
        require(to != address(0), "Invalid receiver");
       IERC20(USDC).transferFrom(vault, to, amount);
    }

    function withdrawETH(
        address payable to
    ) external payable onlyOwner {
        require(to != address(0) && msg.value > 0, "Invalid params");
        (bool success, bytes memory data) = to.call{value: msg.value}("");
        require(success, "Ether withdraw fail");
    }

    receive() external payable {}
}
