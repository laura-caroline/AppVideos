import { api } from './config/api';
import { IVideo } from './interfaces/videoServiceInterface';

export class VideoService {
  static async getListVideosPagination(
    page: number = 1,
    perPage: number = 10
  ): Promise<IVideo[]> {
    const response = await api.get(
      `/videos?_page=${page}&_per_page=${perPage}}`
    );
    return response.data.data;
  }

  static async getDetailVideo(idVideo: string) {
    const response = await api.get(`/videos/${idVideo}`);
    return response.data;
  }
  static async updateViewsVideo(
    idVideo: string,
    numberViews: number
  ): Promise<void> {
    const response = await api.patch(`/videos/${idVideo}`, {
      views: numberViews,
    });
    return response.data;
  }

  static async updateLikesVideo(
    idVideo: string,
    numberLikes: number
  ): Promise<void> {
    const response = await api.patch(`/videos/${idVideo}`, {
      likes: numberLikes,
    });
    return response.data;
  }
}
