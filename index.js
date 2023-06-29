const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerText = this;
  this.signatories.forEach((signatory) => 
    console.log (`${outerText.closing[signatory]}, ${signatory}`)
);
};

printCard.call(messageConfig);