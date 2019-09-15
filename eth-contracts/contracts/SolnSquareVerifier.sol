pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./Verifier.sol";
import "./ERC721Mintable.sol";

// contract SquareVerifier is Verifier {

// }

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mintable{

Verifier verifier;

constructor(address _address) ERC721Mintable() public{
    verifier = Verifier(_address);
}

// TODO define a solutions struct that can hold an index & an address
struct Solution {
    uint solutionId;
    address solutionAddress;
}

// TODO define an array of the above struct
Solution[] solutions;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => Solution) private solutionsSubmitted;


// TODO Create an event to emit when a solution is added
event solutionAdded(address _address);


// TODO Create a function to add the solutions to the array and emit the event
function addSolution(
    address _solutionadd,
    uint _id,
    bytes32 key
    ) public {
        Solution memory solution = Solution({solutionId : _id,solutionAddress:_solutionadd});
        solutionsSubmitted[key] = solution;
        solutions.push(solution);
    }


function getKey(uint[2] memory a, uint[2][2] memory b,uint[2] memory c, uint[2] memory input) public view returns (bytes32){
    return  keccak256(abi.encodePacked(a,b,c,input));
}

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
function mintNewNFT
(
address _to,
uint256 _tokenId,
uint[2] memory a,
uint[2][2] memory b,
uint[2] memory c,
uint[2] memory input
) public{
        bytes32 key = getKey(a, b, c, input);
        require(solutionsSubmitted[key].solutionAddress == address(0), "Solution must be unique to mint a token.");
		require(verifier.verifyTx(a,b,c, input), "Incorrect solution");
		addSolution(_to, _tokenId, key);
		super.mint(_to, _tokenId);
	}

}

























