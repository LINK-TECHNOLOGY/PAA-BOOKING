import { View, Image } from '@tarojs/components';
import React, { useContext, useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { AtButton, AtInput } from 'taro-ui';
import LogoImage from '../../assets/icons/logo.jpg';
import './index.scss';
import { getUserInfo, postUserRegister } from '../../apis/api';
import { type UserInfoProp } from '../../utils/paatype';
import store from '../../global/store';
import { observer } from 'mobx-react';

const Login: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [logined, setLogined] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoProp>();
  const { setInfo } = useContext(store);

  const handleLogin = async () => {
    const tempInfo: UserInfoProp = {
      userId: studentId,
      userName: name
    };
    await postUserRegister(tempInfo).then(res => {
      setUserInfo(res);
      setLogined(true);
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    const getUserLogin = async () => {
      await getUserInfo().then((res: UserInfoProp) => {
        if (res.userId !== '') {
          setUserInfo(res);
          setLogined(true);
        }
      });
    };

    getUserLogin().catch(err => {
      console.log(err);
    });
  });

  useEffect(() => {
    if (logined) {
      setInfo(userInfo as UserInfoProp);
      void Taro.switchTab({
        url: '/pages/index/index'
      });
    }
  }, [logined]);

  return (
    <View className='login'>
      <View className='logo'>
        <Image className='loginImage' src={LogoImage} mode='widthFix' />
      </View>
      <View className='registration'>
        <AtInput
          required
          title='学号'
          type='number'
          placeholder='请输入学号'
          value={studentId.toString()}
          onChange={(value) => { setStudentId(value as string); }}
          name=''
        />
        <AtInput
          required
          title='姓名'
          type='text'
          placeholder='请输入姓名'
          value={name}
          onChange={(value) => { setName(value as string); }}
          name=''
        />
        <AtButton
          className='loginButton'
          type='primary'
          onClick={handleLogin}>
          登录
        </AtButton>
      </View>
    </View>
  );
};

export default observer(Login);
