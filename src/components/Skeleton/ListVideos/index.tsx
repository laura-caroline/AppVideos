import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { colors } from 'src/stylesSystem';

export const SkeletonListVideos = () => {
  const Item = ()=> (
    <View style={styles.card}>
      <ContentLoader
        speed={1}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#adadad"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="10" ry="10" width="200" height="300" />
      </ContentLoader>

      <View style={styles.textContainer}>
        <ContentLoader
          speed={1}
          width={180}
          height={20}
          viewBox="0 0 180 20"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="100%" height="10" />
          <Rect x="0" y="20" rx="5" ry="5" width="80%" height="10" />
        </ContentLoader>
      </View>

      <View style={styles.buttonContainer}>
        <ContentLoader
          speed={1}
          width={200}
          height={40}
          viewBox="0 0 200 40"
          backgroundColor="#adadad"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="5" ry="5" width="200" height="40" />
        </ContentLoader>
      </View>
    </View>
  )
  return (
    <ScrollView testID='skeleton-list-videos'>
      <Item/>
      <Item/>
    </ScrollView> 
    
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});
