import React, { useContext, useEffect, useState } from 'react';
import { View, Image } from '@tarojs/components';
import BJUT from '../../assets/icons/BJUT.jpg';
import './index.scss';
import Info from './components/Info/Info';
import store from '../../global/store';
import { type BookingInfoProp, type UserInfoProp } from '../../utils/paatype';
import Record from './components/Record/Record';
import RecordModal from './components/RecordModal/RecordModal';
import { getBookedActivities } from '../../apis/api';

const mockBookingInfo = {
  activityId: '',
  activityName: '',
  userId: '',
  userName: '',
  period: ''
};

const Mine: React.FC = () => {
  const { getInfo } = useContext(store);
  const [userInfo, setUserInfo] = useState<UserInfoProp>();
  const [modalData, setModalData] = useState<BookingInfoProp>(mockBookingInfo);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [recordList, setRecordList] = useState<number []>();

  useEffect(() => {
    setUserInfo(getInfo);
  });

  useEffect(() => {
    const getRecordList = async () => {
      return await getBookedActivities();
    };
    void getRecordList().then(res => {
      setRecordList(res);
    });
  });

  return (
    <View>
      <View className='title-box'>
        <View className='title-text'>
          个人中心
        </View>
      </View>
      <View className='information-box'>
        <View className='avator-box'>
          <Image className='avator-image' src={BJUT} mode="heightFix" />
        </View>
        <View className='information-text'>
          <Info title='学号' content={userInfo?.userId} />
          <Info title='姓名' content={userInfo?.userName} />
        </View>
      </View>
      <View className='record-title'>
        预约记录
      </View>
      {
        recordList?.map(item => (
          <Record
            key={item}
            recordId={item as unknown as string}
            setModalVisible={setModalVisible}
            setModalData={setModalData}
          />)
        )
      }
      <RecordModal
        record={modalData}
        isVisible={modalVisible}
        setVisible={setModalVisible}
      />
    </View>
  );
};

export default Mine;
