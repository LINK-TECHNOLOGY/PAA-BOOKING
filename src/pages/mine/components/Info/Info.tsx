import { View } from '@tarojs/components';
import React from 'react';
import './index.scss';

interface InfoProps {
  title: string
  content: string | undefined
}

const Info: React.FC<InfoProps> = ({ title, content }) => {
  return (
    <View className='information-card'>
      <View className='information-font'>{`${title}: ${content ?? ''}`}</View>
    </View>
  );
};

export default Info;
