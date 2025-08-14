import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventItem } from '../../../shared/types';

const KEY = 'favorites';

export const getFavorites = async (): Promise<EventItem[]> => {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveFavorite = async (item: EventItem) => {
  const items = await getFavorites();
  if (!items.map(i => i.id).includes(item.id)) {
    items.push(item);
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
  }
};

export const removeFavorite = async (id: string) => {
  const items = await getFavorites();
  const filtered = items.filter(i => i.id !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(filtered));
};
