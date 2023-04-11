import { type UserInfoProp } from 'src/utils/paatype';

const mockUserInfo: UserInfoProp = {
  userId: '21372319',
  userName: 'srt'
};

export const getUserInfo = async () => {
  return mockUserInfo;
};

export const postUserRegister = async (userInfo: UserInfoProp) => {
  console.log(userInfo.userId + '  ' + userInfo.userName);
  return mockUserInfo;
};
