import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { colors } from 'src/stylesSystem';

export const SkeletonDetailsVideo = () => {
  return (
    <View style={styles.container} testID='skeleton-details-video'>
      <ContentLoader
        speed={1}
        width="100%"
        height={200}
        viewBox="0 0 360 200"
        backgroundColor="#adadad"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
      </ContentLoader>

      <View style={styles.title}>
        <ContentLoader
          speed={1}
          width="100%"
          height={20}
          viewBox="0 0 360 20"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="100%" height="20" />
        </ContentLoader>
      </View>

      <View style={styles.description}>
        <ContentLoader
          speed={1}
          width="100%"
          height={60}
          viewBox="0 0 360 60"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="100%" height="10" />
          <Rect x="0" y="20" rx="5" ry="5" width="90%" height="10" />
          <Rect x="0" y="40" rx="5" ry="5" width="80%" height="10" />
        </ContentLoader>
      </View>

      <View style={styles.stats}>
        <ContentLoader
          speed={1}
          width={100}
          height={20}
          viewBox="0 0 100 20"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="50%" height="10" />
        </ContentLoader>
      </View>

      <View style={styles.button}>
        <ContentLoader
          speed={1}
          width="100%"
          height={40}
          viewBox="0 0 360 40"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="100%" height="40" />
        </ContentLoader>
      </View>
    </View>
  );
};


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    marginVertical: 8,
  },
  stats: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 8,
  },
  button: {
    marginTop: 16, 
    width: '100%', 
    height: 40, 
    backgroundColor: colors.blueLight, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 5, 
  },

});