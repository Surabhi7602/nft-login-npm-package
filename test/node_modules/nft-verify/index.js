const { Network, Alchemy } = require("alchemy-sdk");

async function checkNFT(tokenId, walletAddress) {
  //#endregion
  const networks = [
    Network.MATIC_MAINNET,
    Network.ETH_MAINNET,
    Network.OPT_MAINNET,
    Network.ARB_MAINNET,
  ];
  const settings = {
    apiKey: "SaWxdyK3cbchwIi54sG4P6vPMA6MrXrz",
    network: null,
  };
  for (network of networks) {
    settings.network = network;
    const web3 = new Alchemy(settings);
    const nfts = await web3.nft.getNftsForOwner(walletAddress);

    const nftList = nfts["ownedNfts"];
    //   console.log(nftList);
    for (nft of nftList) {
      if (nft.tokenId == tokenId) {
        return true;
      }
    }
  }

  return false;
}

exports.verifyNFT = checkNFT;
