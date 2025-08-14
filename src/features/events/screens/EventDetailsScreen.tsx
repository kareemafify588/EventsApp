// src/features/events/screens/EventDetailsScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Swiper from 'react-native-swiper';
import { useRoute } from '@react-navigation/native';
import { RootState } from '../../../app/store';
import { fetchEventById } from '../store/eventsSlice';
import { addFavorite, removeFavorite } from '../../favorites/store/favoritesSlice';
import { saveFavorite as saveFavoriteAPI, removeFavorite as removeFavoriteAPI } from '../../favorites/services/favoritesStorage';
import moment from 'moment';
import { HeartIcon as HeartIconOutline } from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid';
import { ResouceLoading } from '../../../shared/components/ResouceLoading';
import { ResouceNoData } from '../../../shared/components/ResouceNoData';
import { ResouceError } from '../../../shared/components/ResouceError';
import { useThemeContext } from '../../../themes/ThemeContext';
import { createWventDetailsStyles } from '../styles/eventDetails';
import { isRTL } from '../../../styles/rtl';

export default function EventDetailsScreen() {
  const route = useRoute<any>();
  const { theme } = useThemeContext();
  const styles = createWventDetailsStyles(theme);
  const { id } = route.params;

  const dispatch = useDispatch();
  const { selectedEvent: event, loading, error } = useSelector((state: RootState) => state.events);
  const { items: favorites } = useSelector((state: RootState) => state.favorites);
  const favoritesIds = favorites.map(f => f.id);

  useEffect(() => {
    dispatch(fetchEventById(id) as any);
  }, [id]);

  if (loading) {
    return <ResouceLoading />
  }


  if (error) {
    return <ResouceError error={error} onRetry={async () => fetchEventById(id) as any} />
  }

  if (!event) {
    return <ResouceNoData />
  }

  return (

    <ScrollView contentContainerStyle={styles.container}>

      {event.images?.length > 0 && (
        <View style={{ height: 220, marginBottom: 16 }}>
          <Swiper
            autoplay
            activeDotColor="#000"
            showsPagination

          >
            {event.images.map((img, idx) => (
              <Image
                key={idx}
                source={{ uri: img.url }}
                style={styles.image}
                resizeMode="cover"
              />
            ))}
          </Swiper>
        </View>
      )}
      <View style={styles.headerRow}>
        {/* Just test arabic language  */}

        <Text style={styles.title}>{isRTL() ? 'مرحبااا' : event.name}</Text>
        <TouchableOpacity
          onPress={async () => {
            if (favoritesIds.includes(event.id)) {
              await removeFavoriteAPI(event.id);
              dispatch(removeFavorite(event.id));
            } else {
              await saveFavoriteAPI(event);
              dispatch(addFavorite(event));
            }
          }}
        >
          {favoritesIds.includes(event.id) ? <HeartIconSolid size={28} /> : <HeartIconOutline size={28} color="black" />}
        </TouchableOpacity>
      </View>

      <Text style={styles.date}>
        {moment(event.dates.start.dateTime).format('MMMM Do YYYY, h:mm A')} ({moment(event.dates.start.dateTime).fromNow()})
      </Text>

      {event.info && (
        <Text style={styles.description}>{event.info}</Text>
      )}

      {event._embedded?.venues?.[0] && (
        <View style={styles.venue}>
          <Text style={styles.venueLabel}>Venue:</Text>
          <Text style={styles.venueText}>{event._embedded.venues[0].name}</Text>
          <Text style={styles.venueText}>{event._embedded.venues[0].city?.name}, {event._embedded.venues[0].country?.name}</Text>
        </View>
      )}
    </ScrollView>

  );
}

