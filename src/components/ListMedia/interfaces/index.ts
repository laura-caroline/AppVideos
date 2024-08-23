import { IVideo } from '@services/interfaces/videoServiceInterface';

export interface IListMediaProps {
  mediaData: IVideo[];
  onEndReached: () => void;
  clickItem: (id: string) => void;
}

export interface IRenderItem {
  item: IVideo;
}
