import axios from 'axios';
import { VehicleJSON } from '@/types';
import { apiHeader } from '@/libs/redux-api';
import config from '@/config';

const CORS_HANDLER = 'https://my-cors-anywhere-handler.herokuapp.com';

export const retrieveVehicles = async () => {
  const response = await axios.get<VehicleJSON.ApiRes>(
    `${CORS_HANDLER}/${config.API.SAMSARA_API}/fleet/vehicles?limit=50`,
    apiHeader(config.API.SAMSARA_TOKEN)
  );

  return response.data;
};
