const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require("web3")
const { abi, evm } = require("./compile")

const provider = new HDWalletProvider(
    "motor glide hockey spin crater erase caution february regular pig subject core",
    "https://rinkeby.infura.io/v3/5ca9623103474a3fa0cc3dc1118aa829"
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log("Attempting to deploy for account", accounts[0])
    const result = await new web3.eth.Contract(abi)
        .deploy({ 
            data: evm.bytecode.object
        })
        .send({ 
             gas: "1000000", 
             from: accounts[0]
        })
    console.log("Contract deployed to: ", result.options.address)
    provider.engine.stop()
}

deploy()