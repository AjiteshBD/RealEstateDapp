var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});

            // TODO: mint multiple tokens
            let mint  =  await this.contract.mint(account_one,1);
            let mint2 =  await this.contract.mint(account_one,2);
            let mint3 =  await this.contract.mint(account_one,3);
            let mint4 =  await this.contract.mint(account_one,4);

        })

        it('should return total supply', async function () { 
            let result = await this.contract.totalSupply();
            assert.equal(result,4 ,"Count is differ from minted tokens");
        })

        it('should get token balance', async function () { 
            let bal = await this.contract.balanceOf(account_one);
            console.log(bal);
            assert.equal(bal,4 ,"Incorrect token balance of account one");
            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance,0,"Incorrect token balance of account two");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1","Token URI not found!!")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one,account_two,2);
            let owner = await this.contract.ownerOf(2);
            assert.equal(owner,account_two,"Ownership was not transferred");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let result = false;
            try{
                let mint = await this.contract.mint(account_one,2,"BaseUri1",{from:account_two});
            }catch(e){
                result = true;
                console.log(e);
            }
            assert.equal(result,true,"it's minting when address is not owner");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.isOwner({from:account_one});
            assert.equal(owner,true,"it does not a owner");

        })

    });
})