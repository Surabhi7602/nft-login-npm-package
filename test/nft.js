const { verifyNFT } = require("nft-verify");
verifyNFT(
  "88484291872826645549206056394261872118284797679821832582028695917951321112826",
  "0x4fBe07b5c6973d69ED80729e33f47b7Eb3999744",
  "0x2953399124f0cbb46d2cbacd8a89cf0599974963"
).then((res) => console.log(res));
