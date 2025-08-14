import axios from 'axios';
import { EventItem, GetEventsParams } from '../../../shared/types';
import { Alert } from 'react-native';

/**
 * TODO: Adding interceptor
 */
const API_BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
/**
 * TODO: Adding to env variables .env.dev / .env.prod
 */
const API_KEY = 'v04mSLuy9caGQtsct77231GcaV5aG5nd';

export const getEventsApi = async (
  options: GetEventsParams = {},
): Promise<EventItem[]> => {
  const params: Record<string, string | number> = {
    size: options.size ?? 5,
    apikey: API_KEY,
  };

  if (options.search) {
    params.keyword = options.search;
  }

  const res = await axios.get(`${API_BASE_URL}/events.json`, { params });

  return res.data?._embedded?.events || [];
};

export const getEventByIdApi = async (id: string): Promise<EventItem> => {
  const res = await axios.get(
    `${API_BASE_URL}/events/${id}.json?apikey=${API_KEY}`,
  );
  return res.data;
};
