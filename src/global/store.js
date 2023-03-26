import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

// const Store = observable({
//     counter: 1,
//     res(){
//         return this.counter * 2;
//     },
// })
class Store {
  counter = 1
  constructor () {
    makeAutoObservable(this)
  }
}


export default createContext(new Store())