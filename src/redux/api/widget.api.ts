import axios from 'axios';
import { PaginateParam, WidgetTypes } from '@/types';
import { apiHeader } from '@/libs/redux-api';
import config from '@/config';

export const retrieveStories = async (params: PaginateParam) => {
  const response = await axios.get<WidgetTypes.Story[]>(
    `${config.API.FAKE_IMAGE}/v2/list`,
    apiHeader(null, params)
  );

  return response.data;
};
