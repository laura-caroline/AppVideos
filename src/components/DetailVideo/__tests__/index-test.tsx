import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { IVideo } from '@services/interfaces/videoServiceInterface';
import { DetailVideo } from '..';

describe('DetailVideo Component', () => {
  const mockHandleLike = jest.fn();

  const mockData: IVideo = {
    id: '32839',
    title: 'Estratégias para eventos corporativos em tempos de Home Office',
    created_at: '2021-02-01T13:46:56.000000Z',
    category: 3,
    hls_path: 'https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/741bd684-48f6-49b3-8422-084e3ed3180a/playlist.m3u8',
    description: 'teste',
    thumbnail: 'https://static-ott.netshow.me/sites/70/media/237327/Netshow.me-Talks---04.png',
    site_id: 70,
    views: 0,
    likes: 0,
  };

  const mockDataWithoutDescription: IVideo = {
    id: '30833',
    title: 'Tendências de vídeos para 2021',
    created_at: '2020-12-10T17:09:05.000000Z',
    category: 3,
    hls_path: 'https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/63c5d54c-4f2c-4f18-acaa-0ffdda21b10f/playlist.m3u8',
    description: null,
    thumbnail: 'https://static-ott.netshow.me/sites/70/media/237330/Netshow.me-Talks---05.png',
    site_id: 70,
    views: 0,
    likes: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o vídeo corretamente com a URL fornecida', () => {
    const { getByTestId } = render(
      <DetailVideo data={mockData} isLiked={false} handleLike={mockHandleLike} />
    );

    const videoPlayer = getByTestId('video-player');
    expect(videoPlayer.props.source.uri).toBe(mockData.hls_path);
  });

  it('deve renderizar o título, descrição e estatísticas corretamente quando description está presente', () => {
    const { getByText } = render(
      <DetailVideo data={mockData} isLiked={false} handleLike={mockHandleLike} />
    );

    expect(getByText(mockData.title)).toBeTruthy();
    if (mockData.description) {
      expect(getByText(mockData.description)).toBeTruthy();
    }
    expect(getByText('0 views • 0 likes')).toBeTruthy();
  });

  it('deve renderizar corretamente quando description está ausente', () => {
    const { getByText, queryByText } = render(
      <DetailVideo data={mockDataWithoutDescription} isLiked={false} handleLike={mockHandleLike} />
    );

    expect(getByText(mockDataWithoutDescription.title)).toBeTruthy();
    expect(queryByText('teste')).toBeNull(); // Verifique que a descrição não está presente
    expect(getByText('0 views • 0 likes')).toBeTruthy();
  });

  it('deve chamar a função handleLike ao pressionar o botão "Curtir"', () => {
    const { getByText } = render(
      <DetailVideo data={mockData} isLiked={false} handleLike={mockHandleLike} />
    );

    const likeButton = getByText('Curtir');
    fireEvent.press(likeButton);

    expect(mockHandleLike).toHaveBeenCalled();
  });

  it('deve exibir "Descurtir" se isLiked for verdadeiro', () => {
    const { getByText } = render(
      <DetailVideo data={mockData} isLiked={true} handleLike={mockHandleLike} />
    );

    expect(getByText('Descurtir')).toBeTruthy();
  });
});
