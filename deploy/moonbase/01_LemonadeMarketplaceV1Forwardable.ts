import { DeployFunction } from 'hardhat-deploy/types';

const from = '0xFB756b44060e426731e54e9F433c43c75ee90d9f';

const FEE_ACCOUNT = from;
const FEE_VALUE = '200';
const TRUSTED_FORWARDER = '0x3AF14449e18f2c3677bFCB5F954Dc68d5fb74a75';

const deployFunction: DeployFunction = async function ({ deployments: { deploy } }) {
  await deploy('LemonadeMarketplaceV1Forwardable', {
    args: [FEE_ACCOUNT, FEE_VALUE, TRUSTED_FORWARDER],
    from,
  });
};

export default deployFunction;
