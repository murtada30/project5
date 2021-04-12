const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
    deployer.deploy(Migrations, {
      from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e",
    });
};
