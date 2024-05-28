import { View } from 'react-native';

import { LatexEditor } from '@/src/components/function';

type Props = object;

const TypeEquationScreen: React.FC<Props> = (_props: Props) => (
  <View className="bg-gray-100 flex flex-col flex-1 justify-start items-center">
    <LatexEditor />
  </View>
);

export default TypeEquationScreen;
