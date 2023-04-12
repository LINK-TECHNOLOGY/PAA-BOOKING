import { View, Text } from '@tarojs/components';

import { useState } from 'react';
import './index.scss';
import Tags from './tags'

export const STAT = {
  DEFAULT: 0,
  DOING: 1,
  DONE: 2,
  NOT_DONE: 3
}

const Index = () => {
  const {DOING,DONE,NOT_DONE} = STAT
  const allTasks = [
  {name:'进行中1',stat:DOING},
  {name:'进行中2',stat:DOING},
  {name:'进行中3',stat:DOING},
  {name:'已开展1',stat:DONE},
  {name:'已开展2',stat:DONE},
  {name:'已开展3',stat:DONE},
  {name:'未开展1',stat:NOT_DONE},
  {name:'未开展2',stat:NOT_DONE},
]
  const [currentStat,setCurrentStat] = useState(0)





  return (
    <View>
      {allTasks.map((item)=>{
        if(currentStat===0){
          return <Text>{item.name}</Text>
        }else if(currentStat===item.stat){
          return <Text>{item.name}</Text>
        }
      })}
      <Tags setCurrentStat={setCurrentStat}></Tags>
    </View>
  );
};

export default Index