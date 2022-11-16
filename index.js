const { Network, Alchemy } = require("alchemy-sdk");

async function checkNFT(tokenId, walletAddress, contractID) {
  //#endregion
  const networks = [
    Network.MATIC_MAINNET,
    Network.ETH_MAINNET,
    Network.OPT_MAINNET,
    Network.ARB_MAINNET,
  ];
  const settings = {
    apiKey: "alchemy_key_goes_here",
    network: null,
  };
  for (network of networks) {
    settings.network = network;
    const web3 = new Alchemy(settings);
    const nfts = await web3.nft.getNftsForOwner(walletAddress);

    const nftList = nfts["ownedNfts"];
    for (nft of nftList) {
      if (nft.contract.address.toLowerCase() === contractID.toLowerCase()) {
        if (nft.tokenId == tokenId) {
          return true;
        }
      }
    }
  }
  return false;
}

exports.verifyNFT = checkNFT;
