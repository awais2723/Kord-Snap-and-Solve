import { Component } from 'react';
import { View } from 'react-native';

import { LatexEditor } from '@/src/components';

type Props = { latex?: string };

class TypeEquationScreen extends Component<Props> {
  render() {
    return (
      <View className="bg-gray-100 flex flex-col flex-1 justify-start items-center">
        <LatexEditor latex={this.props.latex} />
      </View>
    );
  }
}

export default TypeEquationScreen;
