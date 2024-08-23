import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { IDetailVideoProps } from './interfaces';
import { ResizeMode, Video } from 'expo-av';

export const DetailVideo = ({
  data,
  isLiked,
  handleLike,
}: IDetailVideoProps) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: data?.hls_path!! }}
        style={styles.videoPlayer}
        resizeMode={ResizeMode.COVER}
        useNativeControls
        shouldPlay
        isMuted={false}
      />
      <Text style={styles.title}>{data?.title}</Text>
      {data?.description && (
        <Text style={styles.description}>{data?.description}</Text>
      )}
      <Text style={styles.stats}>
        {data?.views} views • {data?.likes} likes
      </Text>
      <Button title={isLiked ? 'Descurtir' : 'Curtir'} onPress={handleLike} />
    </View>
  );
};
