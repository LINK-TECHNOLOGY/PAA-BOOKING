import { AtButton } from 'taro-ui'
import './tags.scss'
import { View } from '@tarojs/components';
import {STAT} from './index'

const Tags = ({setCurrentStat}:any) => {
  const {DEFAULT,DOING,DONE,NOT_DONE} = STAT
  const handleClick = (value:number) => {
    setCurrentStat(value)
  };
  return (
    <View className='tags'>
      <AtButton onClick={()=>handleClick(DEFAULT)}>全部</AtButton>
      <AtButton onClick={()=>handleClick(DOING)}>进行中</AtButton>
      <AtButton onClick={()=>handleClick(DONE)}>已开展</AtButton>
      <AtButton onClick={()=>handleClick(NOT_DONE)}>未开展</AtButton>
    </View>
  )
  

}
export default Tags;


