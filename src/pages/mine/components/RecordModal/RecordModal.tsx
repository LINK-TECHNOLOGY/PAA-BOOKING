import { View } from '@tarojs/components';
import React from 'react';
import { AtIcon, AtModal, AtModalContent, AtModalHeader } from 'taro-ui';
import { type BookingInfoProp } from '../../../../utils/paatype';
import Info from '../Info/Info';

interface RecordModalProps {
  record: BookingInfoProp
  isVisible: boolean
  setVisible: (args: boolean) => void
}

const RecordModal: React.FC<RecordModalProps> = ({
  record,
  isVisible,
  setVisible
}) => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <View>
      <AtModal
        isOpened={isVisible}
        onClose={() => { handleClose(); }}
      >
        <AtModalHeader>
          <View className='model-header'>
            <View>预约信息</View>
            <View
              onClick={() => { handleClose(); }}
            >
              <AtIcon value='close' color='#000000' size='16' />
            </View>
          </View>
        </AtModalHeader>
        <AtModalContent>
          <View className='icon-box'>
            <AtIcon value='check-circle' color='#07C160' size='150' />
          </View>
          <View className='info-box'>
            <Info title='预约人' content={record.userName} />
            <Info title='预约时间' content={record.period} />
            <Info title='预约活动' content={record.period} />
          </View>
        </AtModalContent>
      </AtModal>
    </View>
  );
};

export default RecordModal;
