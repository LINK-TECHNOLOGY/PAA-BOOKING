import { type BookingInfoProp, type UserInfoProp } from 'src/utils/paatype';

const mockUserInfo: UserInfoProp = {
  userId: '21372319',
  userName: 'srt'
};

const mockBookedInfo: BookingInfoProp = {
  activityId: '111',
  activityName: 'string',
  userId: '222',
  userName: 'string',
  period: 'string'
};

const mockBookedActivitiesList = [1, 2, 3];

export const getUserInfo = async () => {
  return mockUserInfo;
};

export const postUserRegister = async (userInfo: UserInfoProp) => {
  console.log(userInfo.userId + '  ' + userInfo.userName);
  return mockUserInfo;
};

export const getBookedActivities = async () => {
  return mockBookedActivitiesList;
};

export const getBookedInfo = async (activityId: string) => {
  console.log(activityId);
  return mockBookedInfo;
};
