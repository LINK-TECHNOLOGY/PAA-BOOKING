import { action, computed, makeObservable, observable } from 'mobx';
import { createContext } from 'react';

class Store {
  constructor (value) {
    makeObservable(this, {
      Info: observable,
      setInfo: action,
      getInfo: computed
    });
    this.Info = value;
  }

  Info;

  setInfo = (info) => {
    this.Info = info || {};
  };

  get getInfo () {
    return this.Info.a;
  }
}

export default createContext(new Store({}));
