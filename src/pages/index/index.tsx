import { View, Image } from '@tarojs/components'
import React, { useState } from 'react'
import './index.scss'
import LogoImage from '../../common/assets/icons/logo.png';
import TextTitle from '../../common/assets/icons/MentalTitle.png'
import { AtButton, AtDivider } from 'taro-ui';

const data = {
  activity: 'name',
  state: false,
}

const Index: React.FC = () => {
  const [activityState, setActivityState] = useState(data.state);
  const [backgroundColor, setBackgroundColor] = useState('write');
  const [color, setColor] = useState('black');

  const handleClick = async (): Promise<void> => {
    setActivityState(!activityState);
    setBackgroundColor(activityState ? 'white' : 'red');
    setColor(activityState ? 'black' : 'white');
    console.log(activityState);
  };

  return (
    <View>
      <View className='at-row;at-row__align--center'>
        <Image className='at-col at-col-8 at-col__offset-1' src={TextTitle} mode="widthFix" />
        <Image className='at-col at-col-2.5' src={LogoImage} mode="widthFix" />
      </View>
      <AtDivider height='50'/>
      <AtButton className='new-button' customStyle={{ backgroundColor: backgroundColor, color: color }} size='normal' onClick = {handleClick}>{`预约${activityState ? '成功' : ''}`}</AtButton>
    </View>
  );
};

export default Index;
