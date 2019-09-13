var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');

contract('SolnSquareVerifier', accounts =>{
    const account_one = accounts[0];
    const account_two = accounts[1];
    let proof = require('../../zokrates/code/square/proof.json');

    describe('Test - SolnSquareVerifier', function(){
        beforeEach(async function(){
            this.verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(this.verifier.address,{from: account_one});
        })

        it('Test if a new solution can be added for contract',async function(){
            const{proof:{a,b,c},inputs:input} =proof;
            let key = await this.contract.getKey(a,b,c,input);
            //console.log(key);
            let result = await this.contract.addSolution(account_two,2,key);

            //console.log(result);
            assert.equal(result.receipt.status,true,"Solution not added");
        });


        it('Test if an ERC721 token can be minted for contract', async function () {
            const { proof: { a, b, c }, inputs: input } = proof;
            
            let totalSupply = (await this.contract.totalSupply.call()).toNumber();            
            await this.contract.mintNewNFT(account_two, 5, a, b, c, input, {from: account_one});

            let newTotalSupply = (await this.contract.totalSupply.call()).toNumber();

            assert.equal(totalSupply + 1, newTotalSupply, "Invalid proof result");
        })



    });


})