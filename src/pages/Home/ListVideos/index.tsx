import { ListMedia } from '@components/ListMedia';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenName from '@routes/screenName';
import { IVideo } from '@services/interfaces/videoServiceInterface';
import { VideoService } from '@services/VideoService';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import { SkeletonListVideos } from '@components/Skeleton/ListVideos';

export const ListVideos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listVideos, setListVideos] = useState<IVideo[]>([]);
  const [perPage, setPerPage] = useState<number>(10);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const page = 1;

  const getListVideos = async (perPage: number) => {
    try {
      setIsLoading(true);
      const videosPaginated = await VideoService.getListVideosPagination(
        page,
        perPage
      );
      setListVideos(videosPaginated);
      
    } catch (err: any) {
      Alert.alert(
        'Error',
        err.message ?? 'Ocorreu um erro ao buscar os vídeos'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListVideos(perPage);
  }, [perPage]);

  const onEndListVideos = () => {
    setPerPage((prevPerPage) => prevPerPage + 10);
  };
  
  const showDetailsVideo = (idVideo: string) => {
    navigation.navigate(ScreenName.DETAILS_VIDEOS, { idVideo });
  }

    return (
      <View style={styles.containerView}>
        {isLoading && <SkeletonListVideos/>}
        {listVideos?.length ? (
          <ListMedia
              clickItem={showDetailsVideo}
              onEndReached={onEndListVideos}
              mediaData={listVideos}
            />
        ): null}
      </View>
      
  );
};
