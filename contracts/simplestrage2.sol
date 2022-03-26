// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract PolyCoin is ERC20  {

    address public buyer;
    address public seller;
        
    modifier isSeller(){
        require(msg.sender == buyer, "Not authorised.");
        _;
    }
    modifier isBuyer(){
        require(msg.sender == seller, "Not authorised.");
        _;
   }
    
    mapping (address => uint ) public Buyers;

    mapping (address => uint) balances;

   // event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public ERC20("PolyCoin", "PLYCN") {
        _mint(msg.sender, 1000 * 10 ** decimals());

        seller = msg.sender;
        buyer = msg.sender;

        balances[tx.origin] = 10000;
    }
    function sellproperty(address _seller,uint _marketprice)
         public isSeller() returns (bool)
        {
            Buyers[_seller] = _marketprice;
        return true;
        }
    function showmarketprice(address _buyer,uint _marketprice) public view returns(string memory){
        string memory result = "Check marketprice set by buyer.";
        return string(result);
        }    
    function buyproperty(address _buyer,uint _buyingprice) 
        public isBuyer() view returns (uint)
        {
                require(Buyers[msg.sender] !=0, "Not a legible buyer." );
            return Buyers[_buyer];
        } 

    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }
}
