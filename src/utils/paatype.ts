export interface UserInfoProp {
  userId: string
  userName: string
};

export interface BookingInfoProp {
  activityId: string
  activityName: string
  userId: string
  userName: string
  period: string
}

export interface ActivityInfoProp {
  title: string
  time: string
  content: string
  picture: string
  father: boolean
}

export interface BigActivityInfoProp {
  activityList: number[]
}
