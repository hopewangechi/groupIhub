var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(Migrations);
};

// Stage deploying A before B
deployer.deploy(A);
deployer.deploy(B);

// Deploy A, then deploy B, passing in A's newly deployed address
deployer.deploy(A).then(function () {
  return deployer.deploy(B, A.address);
});
module.exports = function (deployer, network) {
  if (network == "live") {
    // Do something specific to the network named "live".
  } else {
    // Perform a different step otherwise.
  }
}
module.exports = function (deployer, network, accounts) {
  // Use the accounts within your migrations.
}
// Deploy a single contract without constructor arguments
deployer.deploy(A);

// Deploy a single contract with constructor arguments
deployer.deploy(A, arg1, arg2, ...);

// Don't deploy this contract if it has already been deployed
deployer.deploy(A, { overwrite: false });

// Set a maximum amount of gas and `from` address for the deployment
deployer.deploy(A, { gas: 4612388, from: "0x...." });

// Deploying multiple contracts as an array is now deprecated.
// This used to be quicker than writing three `deployer.deploy()` statements as the deployer
// can perform the deployment as a single batched request.
// deployer.deploy([
//   [A, arg1, arg2, ...],
//   B,
//   [C, arg1]
// ]);

// External dependency example:
//
// For this example, our dependency provides an address when we're deploying to the
// live network, but not for any other networks like testing and development.
// When we're deploying to the live network we want it to use that address, but in
// testing and development we need to deploy a version of our own. Instead of writing
// a bunch of conditionals, we can simply use the `overwrite` key.
deployer.deploy(SomeDependency, { overwrite: false });
// Deploy library LibA, then link LibA to contract B, then deploy B.
deployer.deploy(LibA);
deployer.link(LibA, B);
deployer.deploy(B);

// Link LibA to many contracts
deployer.link(LibA, [B, C, D]);

// Link to a copy of LibA at a custom address
const instanceOfLibA = await LibA.at(address);
await deployer.link(instanceOfLibA, B);

var a, b;
deployer.then(function () {
  // Create a new version of A
  return A.new();
}).then(function (instance) {
  a = instance;
  // Get the deployed instance of B
  return B.deployed();
}).then(function (instance) {
  b = instance;
  // Set the new instance of A's address on B via B's setA() function.
  return b.setA(a.address);
});
module.exports = async function (deployer) {
  // deploy a contract
  await deployer.deploy(MyContract);
  //access information about your deployed contract instance
  const instance = await MyContract.deployed();
}
