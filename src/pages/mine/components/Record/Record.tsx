import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { getBookedInfo } from '../../../../apis/api';
import { type BookingInfoProp } from '../../../../utils/paatype';
import './index.scss';

interface RecordProps {
  recordId: string
  setModalVisible: (args: boolean) => void
  setModalData: (args: BookingInfoProp) => void
};

const Record: React.FC<RecordProps> = ({
  recordId,
  setModalData,
  setModalVisible
}) => {
  const [record, setRecord] = useState<BookingInfoProp>();

  useEffect(() => {
    const getRecord = async (id: string) => {
      await getBookedInfo(id).then(res => {
        setRecord(res);
      }).catch(e => {
        console.log(e);
      });
    };
    void getRecord(recordId);
  }, [recordId]);

  const handleClick = () => {
    setModalVisible(true);
    setModalData(record as BookingInfoProp);
  };

  return (
    <View className='record-box' onClick={handleClick}>
      <View className='record-content'>
        <View>{`活动名称: ${record?.activityName ?? ''}`}</View>
        <View>{`活动时间: ${record?.period ?? ''}`}</View>
      </View>
      <View className='record-state'>预约成功</View>
    </View>
  );
};

export default Record;
