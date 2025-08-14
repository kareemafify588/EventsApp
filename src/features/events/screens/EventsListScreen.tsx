import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { setFavorites } from '../../favorites/store/favoritesSlice';
import { getFavorites, saveFavorite as saveFavoriteAPI, removeFavorite as removeFavoriteAPI } from '../../favorites/services/favoritesStorage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { fetchEvents, setSearchTerm } from '../store/eventsSlice';
import { addFavorite, removeFavorite } from '../../favorites/store/favoritesSlice';
import { EventItem } from '../../../shared/types';
import moment from 'moment';
import { HeartIcon as HeartIconOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { EventDetailsScreenNavigationProp } from '../../../navigation/types';
import { ResouceLoading } from '../../../shared/components/ResouceLoading';
import { ResouceNoData } from '../../../shared/components/ResouceNoData';
import { ResouceError } from '../../../shared/components/ResouceError';
import { useThemeContext } from '../../../themes/ThemeContext';
import { createEventsStyles } from '../styles/eventsList';


export default function EventsListScreen() {
  const { theme } = useThemeContext();
  const styles = createEventsStyles(theme);
  const dispatch = useDispatch();
  const navigation = useNavigation<EventDetailsScreenNavigationProp>();
  const { list, loading, error, searchTerm, } = useSelector((state: RootState) => state.events);
  const { items } = useSelector((state: RootState) => state.favorites);
  const favoritesIds = items.map(item => item.id);


  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(fetchEvents() as any);
    }, 600); // waits 600ms after typing stops
    return () => clearTimeout(handler);
  }, [searchTerm]);


  useEffect(() => {
    dispatch(fetchEvents() as any);
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const events = await getFavorites();
      dispatch(setFavorites(events));
    })();
  }, [dispatch]);

  const renderItem = ({ item }: { item: EventItem }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EventDetails', { id: item.id })}>
      {item.images.length && <Image src={item.images[0].url} style={styles.cardImage} />}
      <Text style={styles.title}>{item.name}</Text>
      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
        <View>
          <Text>{moment(item.dates.start.dateTime).format('MMMM Do YYYY, h:mm A')}</Text>
          <Text>{moment(item.dates.start.dateTime).fromNow()}</Text>
        </View>
        <View
          style={{ paddingHorizontal: 20 }}
        >
          {favoritesIds.includes(item.id) ? <TouchableOpacity onPress={
            async () => {
              await removeFavoriteAPI(item.id);
              dispatch(removeFavorite(item.id));
            }
          }
          >
            <HeartIconSolid />
          </TouchableOpacity> :

            <TouchableOpacity onPress={
              async () => {
                await saveFavoriteAPI(item);
                dispatch(addFavorite(item));
              }
            }
            >
              <HeartIconOutline />
            </TouchableOpacity>
          }
        </View>
      </View>
    </TouchableOpacity>
  );

  const EventsSection = () => {
    if (error) {
      return <ResouceError error={error} onRetry={async () => fetchEvents() as any} />
    }
    if (loading) {
      return <ResouceLoading />
    }

    if (!list.length) {
      return <ResouceNoData noDataMessage='No avliables events' />

    }
    return (
      <FlatList
        data={list}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        // contentContainerStyle={{ padding: 12 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // spacing
        showsVerticalScrollIndicator={false}
      />
    );
  }





  return (
    <View style={{ flex: 1, padding: 12 }}>
      <TextInput
        style={styles.search}
        placeholder="Search events..."
        value={searchTerm}
        onChangeText={(text) => dispatch(setSearchTerm(text))}
      />
      <EventsSection />

    </View>
  );
}

