import { IVideo } from '@services/interfaces/videoServiceInterface';

export interface IDetailVideoProps {
  data?: IVideo;
  isLiked: boolean;
  handleLike?: () => void;
}
