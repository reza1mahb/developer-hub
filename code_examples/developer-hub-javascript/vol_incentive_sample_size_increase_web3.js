// THIS IS EXAMPLE CODE. DO NOT USE THIS CODE IN PRODUCTION.
import { Web3 } from "web3";

// FastUpdatesIncentiveManager address (Songbird Testnet Coston)
const INCENTIVE_ADDRESS = "0x8c45666369B174806E1AB78D989ddd79a3267F3b";
const RPC_URL = "https://rpc.ankr.com/flare_coston";
// ABI for FastUpdatesIncentiveManager contract
const ABI =
  '[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_governanceSettings","internalType":"contract IGovernanceSettings"},{"type":"address","name":"_initialGovernance","internalType":"address"},{"type":"address","name":"_addressUpdater","internalType":"address"},{"type":"uint256","name":"_ss","internalType":"SampleSize"},{"type":"uint256","name":"_r","internalType":"Range"},{"type":"uint256","name":"_sil","internalType":"SampleSize"},{"type":"uint256","name":"_ril","internalType":"Range"},{"type":"uint256","name":"_x","internalType":"Fee"},{"type":"uint256","name":"_rip","internalType":"Fee"},{"type":"uint256","name":"_dur","internalType":"uint256"}]},{"type":"event","name":"DailyAuthorizedInflationSet","inputs":[{"type":"uint256","name":"authorizedAmountWei","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GovernanceCallTimelocked","inputs":[{"type":"bytes4","name":"selector","internalType":"bytes4","indexed":false},{"type":"uint256","name":"allowedAfterTimestamp","internalType":"uint256","indexed":false},{"type":"bytes","name":"encodedCall","internalType":"bytes","indexed":false}],"anonymous":false},{"type":"event","name":"GovernanceInitialised","inputs":[{"type":"address","name":"initialGovernance","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"GovernedProductionModeEntered","inputs":[{"type":"address","name":"governanceSettings","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"IncentiveOffered","inputs":[{"type":"uint24","name":"rewardEpochId","internalType":"uint24","indexed":true},{"type":"uint256","name":"rangeIncrease","internalType":"Range","indexed":false},{"type":"uint256","name":"sampleSizeIncrease","internalType":"SampleSize","indexed":false},{"type":"uint256","name":"offerAmount","internalType":"Fee","indexed":false}],"anonymous":false},{"type":"event","name":"InflationReceived","inputs":[{"type":"uint256","name":"amountReceivedWei","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"InflationRewardsOffered","inputs":[{"type":"uint24","name":"rewardEpochId","internalType":"uint24","indexed":true},{"type":"tuple[]","name":"feedConfigurations","internalType":"struct IFastUpdatesConfiguration.FeedConfiguration[]","indexed":false,"components":[{"type":"bytes21","name":"feedId","internalType":"bytes21"},{"type":"uint32","name":"rewardBandValue","internalType":"uint32"},{"type":"uint24","name":"inflationShare","internalType":"uint24"}]},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"TimelockedGovernanceCallCanceled","inputs":[{"type":"bytes4","name":"selector","internalType":"bytes4","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"TimelockedGovernanceCallExecuted","inputs":[{"type":"bytes4","name":"selector","internalType":"bytes4","indexed":false},{"type":"uint256","name":"timestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"advance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"cancelGovernanceCall","inputs":[{"type":"bytes4","name":"_selector","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"dailyAuthorizedInflation","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"executeGovernanceCall","inputs":[{"type":"bytes4","name":"_selector","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"fastUpdater","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IFastUpdatesConfiguration"}],"name":"fastUpdatesConfiguration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIFlareSystemsManager"}],"name":"flareSystemsManager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"_addressUpdater","internalType":"address"}],"name":"getAddressUpdater","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Scale"}],"name":"getBaseScale","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getContractName","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Fee"}],"name":"getCurrentSampleSizeIncreasePrice","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getExpectedBalance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"SampleSize"}],"name":"getExpectedSampleSize","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getIncentiveDuration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getInflationAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Precision"}],"name":"getPrecision","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Range"}],"name":"getRange","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Scale"}],"name":"getScale","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"_lockedFundsWei","internalType":"uint256"},{"type":"uint256","name":"_totalInflationAuthorizedWei","internalType":"uint256"},{"type":"uint256","name":"_totalClaimedWei","internalType":"uint256"}],"name":"getTokenPoolSupplyData","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"governance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IGovernanceSettings"}],"name":"governanceSettings","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialise","inputs":[{"type":"address","name":"_governanceSettings","internalType":"contract IGovernanceSettings"},{"type":"address","name":"_initialGovernance","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExecutor","inputs":[{"type":"address","name":"_address","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastInflationAuthorizationReceivedTs","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastInflationReceivedTs","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"offerIncentive","inputs":[{"type":"tuple","name":"_offer","internalType":"struct IFastUpdateIncentiveManager.IncentiveOffer","components":[{"type":"uint256","name":"rangeIncrease","internalType":"Range"},{"type":"uint256","name":"rangeLimit","internalType":"Range"}]}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"productionMode","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Range"}],"name":"rangeIncreaseLimit","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"Fee"}],"name":"rangeIncreasePrice","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"receiveInflation","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IIRewardManager"}],"name":"rewardManager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"SampleSize"}],"name":"sampleIncreaseLimit","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDailyAuthorizedInflation","inputs":[{"type":"uint256","name":"_toAuthorizeWei","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setIncentiveParameters","inputs":[{"type":"uint256","name":"_ss","internalType":"SampleSize"},{"type":"uint256","name":"_r","internalType":"Range"},{"type":"uint256","name":"_x","internalType":"Fee"},{"type":"uint256","name":"_dur","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRangeIncreaseLimit","inputs":[{"type":"uint256","name":"_lim","internalType":"Range"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRangeIncreasePrice","inputs":[{"type":"uint256","name":"_price","internalType":"Fee"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSampleIncreaseLimit","inputs":[{"type":"uint256","name":"_lim","internalType":"SampleSize"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"switchToProductionMode","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"allowedAfterTimestamp","internalType":"uint256"},{"type":"bytes","name":"encodedCall","internalType":"bytes"}],"name":"timelockedCalls","inputs":[{"type":"bytes4","name":"selector","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalInflationAuthorizedWei","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalInflationReceivedWei","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalInflationRewardsOfferedWei","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"triggerRewardEpochSwitchover","inputs":[{"type":"uint24","name":"_currentRewardEpochId","internalType":"uint24"},{"type":"uint64","name":"_currentRewardEpochExpectedEndTs","internalType":"uint64"},{"type":"uint64","name":"_rewardEpochDurationSeconds","internalType":"uint64"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateContractAddresses","inputs":[{"type":"bytes32[]","name":"_contractNameHashes","internalType":"bytes32[]"},{"type":"address[]","name":"_contractAddresses","internalType":"address[]"}]}]';

async function main() {
  // Connect to an RPC node
  const w3 = new Web3(RPC_URL);
  const privateKey = process.env.ACCOUNT_PRIVATE_KEY.toString();
  const wallet = w3.eth.accounts.wallet.add(privateKey);
  // Set up contract instance
  const incentive = new w3.eth.Contract(JSON.parse(ABI), INCENTIVE_ADDRESS);
  // Get the current sample size, sample size increase price, precision, and scale
  const sampleSizeIncreasePrice = await incentive.methods
    .getCurrentSampleSizeIncreasePrice()
    .call();
  console.log("Sample Size Increase Price:", sampleSizeIncreasePrice);
  // Log the current sample size, precision, and scale
  console.log(
    "Current Sample Size:",
    await incentive.methods.getExpectedSampleSize().call(),
  );
  console.log(
    "Current Precision:",
    await incentive.methods.getPrecision().call(),
  );
  console.log("Current Scale:", await incentive.methods.getScale().call());

  // Offer the incentive
  const tx = await incentive.methods
    .offerIncentive({ rangeIncrease: 0, rangeLimit: 0 })
    .send({
      from: wallet[0].address,
      nonce: await w3.eth.getTransactionCount(wallet[0].address),
      gasPrice: await w3.eth.getGasPrice(),
      value: sampleSizeIncreasePrice,
    });
  console.log("Transaction hash:", tx.transactionHash);

  // Log the new sample size, precision, and scale
  console.log(
    "New Sample Size:",
    await incentive.methods.getExpectedSampleSize().call(),
  );
  console.log("New Precision:", await incentive.methods.getPrecision().call());
  console.log("New Scale:", await incentive.methods.getScale().call());
}

main();
