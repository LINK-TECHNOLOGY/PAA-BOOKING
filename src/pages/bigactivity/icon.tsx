/* eslint-disable max-len */
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { AtIcon, AtModalContent, AtModalHeader, AtModal, AtButton } from 'taro-ui';
import { sculptureList } from './data';
import Info from './Info';
import './index.scss';

const Popover: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  const [visible, setVisible] = useState(false);
  const sculpures = sculptureList.filter(sculptures => sculptures.title === title);
  return (
    <View>
      <AtModal
      isOpened={visible}
      onClose={ () => { setVisible(false); }}
      >
        <AtModalHeader>
          <View>预约信息</View>
          <View
            onClick={() => { setVisible(false); }}
          >
            <AtIcon value='close' color='#000000' size='16' />
          </View>
        </AtModalHeader>
        <AtModalContent>
          <View>
            <Info title='标题' content={sculpures[0].title} />
            <Info title='预约时间' content={sculpures[0].time} />
            <Info title='预约活动' content={sculpures[0].content} />
            <Info title='预约图片' content={sculpures[0].picture} />
          </View>
          <View className='small'>
            <AtButton type='secondary' size='small' onClick={() => { setVisible(false); } }>预约成功</AtButton>
          </View>
          </AtModalContent>
        </AtModal>
    <AtIcon value='map-pin' size='50' color='#66CCFF' onClick={() => { setVisible(true); }}></AtIcon>
    </View>
  );
};

export default Popover;
