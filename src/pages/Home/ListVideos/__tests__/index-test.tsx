import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { ListVideos } from '..';
import { useNavigation } from '@react-navigation/native';
import { VideoService } from '@services/VideoService';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));


jest.mock('@services/VideoService');

describe('ListVideos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the SkeletonListVideos component while loading', async () => {
    VideoService.getListVideosPagination = jest.fn().mockResolvedValue([]);
    
    const {getByTestId} = render(<ListVideos />);

    expect(getByTestId('skeleton-list-videos')).toBeTruthy();
  });

  it('should render the video list after loading', async () => {
    const mockVideos = [{ id: '1', title: 'Video 1' }, { id: '2', title: 'Video 2' }];
    VideoService.getListVideosPagination = jest.fn().mockResolvedValue(mockVideos);
    
    const { queryByTestId, getByTestId } = render(<ListVideos />);
    
    // Verifica se o skeleton está presente enquanto carrega
    expect(queryByTestId('skeleton-list-videos')).toBeTruthy();

    // Aguarda o carregamento e remoção do skeleton
    await waitFor(() => {
      expect(queryByTestId('skeleton-list-videos')).toBeNull(); // Confirma que o skeleton foi removido
      expect(getByTestId('list-media')).toBeTruthy(); // Confirma que a lista foi renderizada
    });
});



it('should navigate to video details when an item is clicked', async () => {
  const mockVideos = [{ id: '1', title: 'Video 1' }];
  const mockNavigate = jest.fn();
  
  // Configura o mock do useNavigation para retornar a função navigate mockada
  (useNavigation as jest.Mock).mockReturnValue({
    navigate: mockNavigate,
  });
  // Mock do VideoService para retornar os vídeos mockados
  VideoService.getListVideosPagination = jest.fn().mockResolvedValue(mockVideos);
  
  const { getByText } = render(<ListVideos />);
  
  await waitFor(() => {
    expect(getByText('Video 1')).toBeTruthy();
  });

  // Dispara o evento de clique
  fireEvent.press(getByText('Video 1'));

  // Verifica se a navegação foi chamada corretamente
  expect(mockNavigate).toHaveBeenCalledWith('DETAILS_VIDEOS', { idVideo: '1' });
});


  it('should show an error alert when failing to load videos', async () => {
    const mockAlert = jest.spyOn(Alert, 'alert');
    VideoService.getListVideosPagination = jest.fn().mockRejectedValue(new Error('Erro ao carregar vídeos'));
    
    render(<ListVideos />);
  
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledTimes(1);
      expect(mockAlert).toHaveBeenCalledWith(
        'Error',
        'Erro ao carregar vídeos'
      );
    });
  });
  });
