const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = ""; // Replace with your private key
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

const blackHole = "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"; // Black hole address

const memo = 'data:,{"p":"trc-20","op":"mint","tick":"pepe","amt":"1000"}';

async function main() {
  try {
    const unSignedTxn = await tronWeb.transactionBuilder.sendTrx(blackHole, 1); // 0.000001 TRX is the minimum transfer amount.
    const unSignedTxnWithNote = await tronWeb.transactionBuilder.addUpdateData(
      unSignedTxn,
      memo,
      "utf8"
    );
    const signedTxn = await tronWeb.trx.sign(unSignedTxnWithNote);
    console.log("signed =>", signedTxn);
    const ret = await tronWeb.trx.sendRawTransaction(signedTxn);
    console.log("broadcast =>", ret);
  } catch (err) {
    console.log("error:", err);
  }
}

// Run main function every 3 seconds
setInterval(main, 3000);
