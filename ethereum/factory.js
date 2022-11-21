import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd8497EC6e4F460bE2d1EFb1BBCa3a6bb7FE261e2'
);

export default instance;
