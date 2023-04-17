import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';
import Popover from './icon';

const Bigactivity: React.FC = () => {
  return (
    <View>
      <Text>
        525活动
      </Text>
      <View className='Psychology activity 1'>
        <Popover
          title='Psychology activity 1'
        />
      </View>
      <View className='Psychology activity 2'>
        <Popover
          title='Psychology activity 2'
        />
      </View>
      <View className='Psychology activity 3'>
        <Popover
          title='Psychology activity 3'
        />
      </View>
      <View className='Psychology activity 4'>
        <Popover
          title='Psychology activity 4'
        />
      </View>
      <View className='Psychology activity 5'>
        <Popover
          title='Psychology activity 5'
        />
      </View>
      <View className='Psychology activity 6'>
        <Popover
          title='Psychology activity 6'
        />
      </View>
    </View>
  );
};

export default Bigactivity;
