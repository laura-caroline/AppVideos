import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { styles } from './styles';
import { IListMediaProps, IRenderItem } from './interfaces';

export const ListMedia = ({ mediaData, clickItem }: IListMediaProps) => {
  const renderItem = ({ item }: IRenderItem) => (
    <TouchableOpacity
      onPress={() => clickItem(item.id)}
      style={styles.videoContainer}
    >
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      <Text style={styles.title}>{item.title}</Text>
      <Button title='Ver detalhes' onPress={() => clickItem(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.list}>
      {!mediaData.length ? (
        <Text style={styles.emptyMessage}>
          Não há nenhum vídeo cadastrado no sistema
        </Text>
      ) : (
        <FlatList
          data={mediaData}
          keyExtractor={(media) => media.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};
