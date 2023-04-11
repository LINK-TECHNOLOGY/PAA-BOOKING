export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/mine/index',
    'pages/activity/index',
    'pages/bigactivity/index',
    'pages/appointment/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#515151',
    selectedColor: '#515151',
    borderStyle: 'white',
    list: [{
      selectedIconPath: 'common/assets/tabBar/index_selected.jpg',
      iconPath: 'common/assets/tabBar/index.jpg',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      selectedIconPath: 'common/assets/tabBar/mine_selected.jpg',
      iconPath: 'common/assets/tabBar/mine.jpg',
      pagePath: 'pages/mine/index',
      text: '我的'
    }]
  }
});
