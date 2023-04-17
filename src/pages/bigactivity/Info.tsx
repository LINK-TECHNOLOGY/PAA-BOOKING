import { View } from '@tarojs/components';
import React from 'react';

interface InfoProps {
  title: string
  content: string | undefined
}

const Info: React.FC<InfoProps> = ({ title, content }) => {
  return (
    <View>
      <View>{`${title}: ${content ?? ''}`}</View>
    </View>
  );
};

export default Info;
