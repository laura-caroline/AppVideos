export interface IVideo {
  id: string;
  title: string;
  created_at: string;
  category: number;
  hls_path: string;
  description?: string | null;
  thumbnail: string;
  site_id: number;
  views: number;
  likes: number;
}
