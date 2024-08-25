import { DetailVideo } from '@components/DetailVideo';
import { useRoute } from '@react-navigation/native';
import { IVideo } from '@services/interfaces/videoServiceInterface';
import { VideoService } from '@services/VideoService';
import { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import { SkeletonDetailsVideo } from '@components/Skeleton/DetailVideo';

export const DetailsVideos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailVideo, setDetailVideo] = useState<IVideo>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const route = useRoute();

  const {idVideo}: string | any = route?.params;

  const getDetailVideo = async (idVideo: string) => {
    try {
      setIsLoading(true);
      const details = await VideoService.getDetailVideo(idVideo);
      setDetailVideo(details);
      setIsLiked(Boolean(details.likes == 1));
      newNumberPageAccess(details);
    } catch (err: any) {
      Alert.alert(
        'Error',
        err.message ?? 'Ocorreu um erro, tente novamente mais tarde!'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLikeVideo = async () => {
    try {
      setIsLoading(true);
      setIsLiked(!isLiked);
      if (detailVideo) {
        const updateNumbersLikes = !isLiked
          ? detailVideo.likes + 1
          : detailVideo.likes - 1;
        await VideoService.updateLikesVideo(idVideo, updateNumbersLikes);
        setDetailVideo({ ...detailVideo, likes: updateNumbersLikes });
      }
    } catch (err: any) {
      setIsLiked(!isLiked);
      Alert.alert(
        'Error',
        err.message ?? 'Erro ao carregar vídeos!'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const newNumberPageAccess = async (details) => {
    try {
      const newNumberPageAccess: number = details.views + 1;
      await VideoService.updateViewsVideo(details.id, newNumberPageAccess);
      setDetailVideo({ ...details, views: newNumberPageAccess });
    } catch (err: any) {
      Alert.alert(
        'Error',
        err.message ?? 'Erro ao atualizar acessos da pagina'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDetailVideo(idVideo);
  }, [idVideo]);

  return (
    <View style={styles.containerView}>
      {isLoading ? (
        <SkeletonDetailsVideo />
      ) : (
        <DetailVideo
          data={detailVideo}
          isLiked={isLiked}
          handleLike={handleLikeVideo}
        />
      )}
    </View>
  );
};
