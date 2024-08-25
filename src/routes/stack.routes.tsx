import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenName from './screenName';
import { ListVideos } from '@pages/Home/ListVideos';
import { DetailsVideos } from '@pages/Home/DetailsVideos';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}} >
      <Stack.Screen
        options={{ title: 'Listagem de vídeos' }}
        name={ScreenName.LIST_VIDEOS}
        component={ListVideos}
      />
      <Stack.Screen
        name={ScreenName.DETAILS_VIDEOS}
        options={{ title: 'Detalhes do vídeo' }}
        component={DetailsVideos}
      />
    </Stack.Navigator>
  );
}
