import { ListMedia } from '@components/ListMedia';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenName from '@routes/screenName';
import { VideoService } from '@services/VideoService';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import { IVideo } from '@services/interfaces/videoServiceInterface';
import { Skeleton } from '@components/Skeleton';

export const ListVideos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listVideos, setListVideos] = useState<IVideo[]>([]);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const getListVideos = async () => {
    try {
      setIsLoading(true);
      const videosPaginated = await VideoService.getListVideosPagination();
      setListVideos(videosPaginated);
    } catch (err: any) {
      Alert.alert(
        'Error',
        err.message ?? 'Ocorreu um erro, tente novamente mais tarde!'
      );
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getListVideos();
  }, []);

  const showDetailsVideo = (idVideo: string) => {
    navigation.navigate(ScreenName.DETAILS_VIDEOS, { idVideo });
  };
  return (
    <View style={styles.containerView}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <ListMedia clickItem={showDetailsVideo} mediaData={listVideos} />
      )}
    </View>
  );
};
