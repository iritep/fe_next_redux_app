import axios from 'axios';
import { PaginateParam, WidgetJSON } from '@/types';
import { apiHeader } from '@/libs/redux-api';
import config from '@/config';

export const retrieveStories = async (params: PaginateParam) => {
  const response = await axios.get<WidgetJSON.Story[]>(
    `${config.API.FAKE_IMAGE}/v2/list`,
    apiHeader(undefined, params)
  );

  return response.data;
};
