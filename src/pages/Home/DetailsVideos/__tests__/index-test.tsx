import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { VideoService } from '@services/VideoService';
import { Alert } from 'react-native';
import { DetailsVideos } from '..';

// Mock do serviço de navegação e VideoService
jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: { idVideo: '123' },
  }),
}));

jest.mock('@services/VideoService');

describe('DetailsVideos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o componente SkeletonDetailsVideo enquanto está carregando', async () => {
    VideoService.getDetailVideo = jest.fn().mockResolvedValue(null);
    const { getByTestId } = render(<DetailsVideos />);
    
    expect(getByTestId('skeleton-details-video')).toBeTruthy();
  });

  it('deve renderizar o componente DetailVideo após o carregamento', async () => {
    const mockDetail = { id: '123', title: 'Video 1', likes: 1, views: 100 };
    VideoService.getDetailVideo = jest.fn().mockResolvedValue(mockDetail);
    
    const { getByTestId, queryByTestId } = render(<DetailsVideos />);

    // Esperar o carregamento dos detalhes do vídeo
    await waitFor(() => {
      expect(queryByTestId('skeleton-details-video')).toBeNull();
      expect(getByTestId('detail-video')).toBeTruthy();
    });
  });

  it('deve aumentar o número de visualizações ao carregar os detalhes', async () => {
    const mockDetail = { id: '123', title: 'Video 1', likes: 1, views: 100 };
    VideoService.getDetailVideo = jest.fn().mockResolvedValue(mockDetail);
    VideoService.updateViewsVideo = jest.fn().mockResolvedValue(true);
    
    const { getByTestId } = render(<DetailsVideos />);

    await waitFor(() => {
      expect(getByTestId('detail-video')).toBeTruthy();
    });

    expect(VideoService.updateViewsVideo).toHaveBeenCalledWith('123', 101);
  });

  it('deve alternar entre curtir e descurtir o vídeo', async () => {
    const mockDetail = { id: '123', title: 'Video 1', likes: 0, views: 100 };
    VideoService.getDetailVideo = jest.fn().mockResolvedValue(mockDetail);
    VideoService.updateLikesVideo = jest.fn().mockResolvedValue(true);
    
    const { getByTestId } = render(<DetailsVideos />);

    await waitFor(() => {
      expect(getByTestId('detail-video')).toBeTruthy();
    });

    fireEvent.press(getByTestId('like-button'));

    expect(VideoService.updateLikesVideo).toHaveBeenCalledWith('123', 1);
  });

  it('deve mostrar um alerta de erro ao falhar na obtenção dos detalhes do vídeo', async () => {
    const mockAlert = jest.spyOn(Alert, 'alert');
    VideoService.getDetailVideo = jest.fn().mockRejectedValue(new Error('Erro ao carregar detalhes'));

    render(<DetailsVideos />);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith(
        'Error',
        'Erro ao carregar detalhes'
      );
    });
  });

  it('deve mostrar um alerta de erro ao falhar na atualização das curtidas', async () => {
    const mockDetail = { id: '123', title: 'Video 1', likes: 0, views: 100 };
    const mockAlert = jest.spyOn(Alert, 'alert');
    VideoService.getDetailVideo = jest.fn().mockResolvedValue(mockDetail);
    VideoService.updateLikesVideo = jest.fn().mockRejectedValue(new Error('Erro ao atualizar curtidas'));
    
    const { getByTestId } = render(<DetailsVideos />);

    await waitFor(() => {
      expect(getByTestId('detail-video')).toBeTruthy();
    });

    fireEvent.press(getByTestId('like-button'));

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith(
        'Error',
        'Erro ao atualizar curtidas'
      );
    });
  });
});
