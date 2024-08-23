import React, { useRef } from 'react';
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

export const ListMedia = ({
  mediaData,
  onEndReached,
  clickItem,
}: IListMediaProps) => {
  const renderItem = ({ item }: IRenderItem) => (
    <TouchableOpacity
      activeOpacity={1}
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
      {!mediaData?.length ? (
        <Text style={styles.emptyMessage}>
          Não há nenhum vídeo cadastrado no sistema
        </Text>
      ) : (
        <FlatList
          data={mediaData}
          maintainVisibleContentPosition={{
            minIndexForVisible: 0, 
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          onEndReached={onEndReached} 
        />
      )}
    </View>
  );
};
