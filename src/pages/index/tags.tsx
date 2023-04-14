import React from 'react';
import { AtButton } from 'taro-ui';
import './tags.scss';
import { View } from '@tarojs/components';

const STAT = {
  ALL: 0,
  DOING: 1,
  DONE: 2,
  NOT_DONE: 3
};

interface TagesProps {
  setCurrentStat: (args: number) => void
}

const Tags: React.FC<TagesProps> = ({ setCurrentStat }) => {
  const { ALL, DOING, DONE, NOT_DONE } = STAT;
  const handleClick = (value: number) => {
    setCurrentStat(value);
  };
  return (
    <View className='tags'>
      <AtButton className='tag' onClick={() => { handleClick(ALL); }}>
        全部
      </AtButton>
      <AtButton className='tag' onClick={() => { handleClick(DOING); }}>
        进行中
      </AtButton>
      <AtButton className='tag' onClick={() => { handleClick(DONE); }}>
        已开展
      </AtButton>
      <AtButton className='tag' onClick={() => { handleClick(NOT_DONE); }}>
        未开展
      </AtButton>
    </View>
  );
};
export default Tags;
