import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';
import Popover from './Popover';
import { sculptureList } from './data';

const Bigactivity: React.FC = () => {
  return (
    <View>
      <Text>
        525活动
      </Text>
      {
        sculptureList.map(item => (
          <View key={item.title}>
            <Popover title={item.title} />
          </View>
        ))
      }
    </View>
  );
};

export default Bigactivity;
