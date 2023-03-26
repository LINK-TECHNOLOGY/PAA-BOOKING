import { View, Image } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { AtButton, AtInput } from 'taro-ui';
import LogoImage from '../../assets/icons/logo.jpg';
import './index.scss';

const Login: React.FC = () => {
  const [studentId, setStudentId] = useState(0);
  const [name, setName] = useState('');

  const handleLogin = (): void => {
    // get userinfo and store them
    // console.log(studentId + ' ' + name)
    console.log(`${studentId} and ${name}`);
  };

  const checkOpenId = (): boolean => {
    // ask for openid and check if the user had...
    // console.log('ooo')
    return false;
  };

  useEffect(() => {
    // use openid check if the user had already registered.
    // if true, nevigate to index.
    // else, show this page.
    const check = checkOpenId();
    if (check) {
      // get userinfo and store them

      void Taro.switchTab({
        url: '/pages/index/index'
      });
    }
  });

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
          onChange={(value) => { setStudentId(value as number); }}
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
        <AtButton className='loginButton' type='primary' onClick={handleLogin}>
          登录
        </AtButton>
      </View>
    </View>
  );
};

export default Login;
