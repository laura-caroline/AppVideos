import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { IVideo } from '@services/interfaces/videoServiceInterface';
import { ListMedia } from '..';

describe('ListMedia Component', () => {
  const mockClickItem = jest.fn();
  const mockOnEndReached = jest.fn();

  const mockData: IVideo[] = [
    {
        id: "32839",
        title: "Estratégias para eventos corporativos em tempos de Home Office",
        created_at: "2021-02-01T13:46:56.000000Z",
        category: 3,
        hls_path: "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/741bd684-48f6-49b3-8422-084e3ed3180a/playlist.m3u8",
        description: null,
        thumbnail: "https://static-ott.netshow.me/sites/70/media/237327/Netshow.me-Talks---04.png",
        site_id: 70,
        views: 0,
        likes: 0
      },
      {
        id: "30833",
        title: "Tendências de vídeos para 2021",
        created_at: "2020-12-10T17:09:05.000000Z",
        category: 3,
        hls_path: "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/63c5d54c-4f2c-4f18-acaa-0ffdda21b10f/playlist.m3u8",
        description: null,
        thumbnail: "https://static-ott.netshow.me/sites/70/media/237330/Netshow.me-Talks---05.png",
        site_id: 70,
        views: 0,
        likes: 0
      },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve exibir a mensagem "Não há nenhum vídeo cadastrado no sistema" quando mediaData está vazio', () => {
    const { getByText } = render(
      <ListMedia mediaData={[]} clickItem={mockClickItem} onEndReached={mockOnEndReached} />
    );

    expect(getByText('Não há nenhum vídeo cadastrado no sistema')).toBeTruthy();
  });

  it('deve renderizar a lista de vídeos corretamente quando mediaData contém dados', () => {
    const { getByText } = render(
      <ListMedia mediaData={mockData} clickItem={mockClickItem} onEndReached={mockOnEndReached} />
    );

    expect(getByText(mockData[0].title)).toBeTruthy();
    expect(getByText(mockData[1].title)).toBeTruthy();
  });

  it('deve chamar a função clickItem ao clicar em um item da lista', () => {
    const { getByText } = render(
      <ListMedia mediaData={mockData} clickItem={mockClickItem} onEndReached={mockOnEndReached} />
    );

    act(() => {
      fireEvent.press(getByText(mockData[0].title));
    });

    expect(mockClickItem).toHaveBeenCalledWith(mockData[0].id);
  });
});
