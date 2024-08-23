import React, { useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Animated,
} from 'react-native';
import { styles } from './styles';
import { IListMediaProps, IRenderItem } from './interfaces';

export const ListMedia = ({
  mediaData,
  onEndReached,
  clickItem,
}: IListMediaProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current;

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

  const renderItem = ({ item}: IRenderItem) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => clickItem(item.id)}
        style={styles.videoContainer}
      >
        <Animated.View
          style={[
            {
              opacity: opacity,
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
          <Text style={styles.title}>{item.title}</Text>
          <Button title='Ver detalhes' onPress={() => clickItem(item.id)} />
        </Animated.View>
      </TouchableOpacity>
    );
  };    

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
