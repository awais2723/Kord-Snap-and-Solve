// CustomScrollView.tsx
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, ViewStyle } from 'react-native';

type CustomScrollViewProps = {
  data: any[];
  renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode;
  keyExtractor: (item: any, index: number) => string;
  contentContainerStyle?: ViewStyle;
};

class CustomScrollView extends Component<CustomScrollViewProps> {
  render() {
    const { data, renderItem, keyExtractor, contentContainerStyle } = this.props;

    return (
      <ScrollView contentContainerStyle={contentContainerStyle}>
        {data.map((item, index) => (
          <View key={keyExtractor(item, index)} style={styles.itemContainer}>
            {renderItem({ item, index })}
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
  },
});

export default CustomScrollView;
