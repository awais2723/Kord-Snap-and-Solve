import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';

import CustomScrollView from '@/src/screens/CustomScrollView';

type Props = object;

type State = {
  data: { id: string; image: any }[];
};

class HistoryScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [
        { id: 'image-1', image: require('../assets/images/google.png') },
        { id: 'image-2', image: require('../assets/images/facebook.png') },
        { id: 'image-3', image: require('../assets/images/premiumPicture.jpg') },
      ],
    };
  }

  renderItem = ({ item }: { item: { id: string; image: any } }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  keyExtractor = (item: { id: string }) => item.id;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomScrollView
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.contentContainer}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 50,
  },
  imageContainer: {
    width: '92%', // 11/12th of the width
    borderWidth: 1,
    borderColor: '#000', // Change this color as needed
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    overflow: 'hidden', // Ensures that the border-radius is applied to the images
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default HistoryScreen;
