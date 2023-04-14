import { View, Image, Text } from '@tarojs/components';
import React, { useState } from 'react';
import './index.scss';
import LogoImage from '../../assets/icons/logo.png';
import { AtButton, AtDivider } from 'taro-ui';
import Tags from './tags';

const data = {
  activity: 'name',
  state: false
};

// 暂时用来
const STAT = {
  ALL: 0,
  DOING: 1,
  DONE: 2,
  NOT_DONE: 3
};

const Index: React.FC = () => {
  const [activityState, setActivityState] = useState(data.state);
  const [backgroundColor, setBackgroundColor] = useState('write');
  const [color, setColor] = useState('black');

  const { DOING, DONE, NOT_DONE } = STAT;
  const allTasks = [
    { name: '进行中1', stat: DOING },
    { name: '进行中2', stat: DOING },
    { name: '进行中3', stat: DOING },
    { name: '已开展1', stat: DONE },
    { name: '已开展2', stat: DONE },
    { name: '已开展3', stat: DONE },
    { name: '未开展1', stat: NOT_DONE },
    { name: '未开展2', stat: NOT_DONE }
  ];
  const [currentStat, setCurrentStat] = useState(0);

  const handleClick = () => {
    setActivityState(!activityState);
    setBackgroundColor(activityState ? 'white' : 'red');
    setColor(activityState ? 'black' : 'white');
    console.log(activityState);
  };

  return (
    <View>
      <View className="at-row;at-row__align--center">
        <View className='title-text'>
          心理中心活动预约
        </View>
        <Image className="at-col at-col-2.5" src={LogoImage} mode="widthFix" />
      </View>
      <AtDivider height="50" />
      {allTasks.map((item) => {
        if (currentStat === 0) {
          return <Text key={item.name}>{item.name}</Text>;
        } else if (currentStat === item.stat) {
          return <Text key={item.name}>{item.name}</Text>;
        } else {
          return <></>;
        }
      })}
      <AtDivider height="50" />
      <Tags setCurrentStat={setCurrentStat}></Tags>
      <AtDivider height="50" />
      <AtButton
        className="new-button"
        customStyle={{ backgroundColor, color }}
        size="normal"
        onClick={handleClick}
      >{`预约${activityState ? '成功' : ''}`}</AtButton>
    </View>
  );
};

export default Index;
