import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getFavorites, removeFavorite } from '../services/favoritesStorage';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setFavorites, removeFavorite as removeFavoriteAction } from '../store/favoritesSlice';
import { TrashIcon } from 'react-native-heroicons/outline';
import { ResouceLoading } from '../../../shared/components/ResouceLoading';
import { ResouceNoData } from '../../../shared/components/ResouceNoData';
import { useThemeContext } from '../../../themes/ThemeContext';
import { createFavouritesStyles } from '../styles/favouritesListStyles';

export default function FavoritesListScreen() {
  const { theme } = useThemeContext();
  const styles = createFavouritesStyles(theme);

  const dispatch = useAppDispatch();
  const favs = useAppSelector(s => s.favorites.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const events = await getFavorites();
      dispatch(setFavorites(events));
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) return <ResouceLoading />;
  if (!favs.length) return <ResouceNoData noDataMessage='No favorites yet' />;

  return (
    <FlatList
      data={favs}
      keyExtractor={(i) => i.id}
      contentContainerStyle={{ padding: 12 }}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text>{item.name}</Text>
          <TouchableOpacity onPress={async () => {
            await removeFavorite(item.id);
            dispatch(removeFavoriteAction(item.id));
          }}
          >
            <TrashIcon />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

