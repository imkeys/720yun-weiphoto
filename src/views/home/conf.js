const screenList = [
  {
    id: 0,
    label: '廉政展厅',
    name: '正厅',
    icon: require('@/assets/vr1.jpg'),
    imgurl: require('@/assets/vr1.jpg'),
    marker: [
      {
        mode: 'next',
        icon: require('@/assets/home-pointer5.gif'),
        latitude: -0.3,
        longitude: 1.3,
        sid: 3,
        title: '清风文苑'
      },
      {
        mode: 'next',
        icon: require('@/assets/home-pointer4.gif'),
        latitude: -0.5,
        longitude: -1.4,
        sid: 1,
        title: '监督执纪'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: 0,
        longitude: 0,
        url: '/zhiji',
        title: '监督执纪'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: -0.1,
        longitude: -1.7,
        url: '/zhiji',
        title: '监督执纪'
      }
    ]
  },
  {
    id: 1,
    label: '监督执纪',
    name: '监督执纪',
    icon: require('@/assets/vr2.jpg'),
    imgurl: require('@/assets/vr2.jpg'),
    marker: [
      {
        mode: 'next',
        icon: require('@/assets/home-pointer5.gif'),
        latitude: -0.5,
        longitude: 0.5,
        sid: 0,
        title: '正厅'
      },
      {
        mode: 'next',
        icon: require('@/assets/home-pointer4.gif'),
        latitude: -0.5,
        longitude: -0.5,
        sid: 2,
        title: '修身齐家'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: 0,
        longitude: 4.8,
        url: '/xiushen',
        title: '修身齐家'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: 0,
        longitude: -4.1,
        url: '/zhiji',
        title: '监督执纪'
      }
    ]
  },
  {
    id: 2,
    label: '修身齐家,法规制度',
    name: '修身齐家',
    icon: require('@/assets/vr3.jpg'),
    imgurl: require('@/assets/vr3.jpg'),
    marker: [
      {
        mode: 'next',
        icon: require('@/assets/home-pointer4.gif'),
        latitude: -0.6,
        longitude: 1.8,
        sid: 3,
        title: '清风文苑'
      },
      {
        mode: 'next',
        icon: require('@/assets/home-pointer5.gif'),
        latitude: -0.6,
        longitude: -1.8,
        sid: 1,
        title: '监督执纪'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: 0,
        longitude: -1,
        url: '/xiushen',
        title: '修身齐家'
      }
    ]
  },
  {
    id: 3,
    label: '清风文苑',
    name: '清风文苑',
    icon: require('@/assets/vr4.jpg'),
    imgurl: require('@/assets/vr4.jpg'),
    marker: [
      {
        mode: 'next',
        icon: require('@/assets/home-pointer4.gif'),
        latitude: -0.5,
        longitude: -0.5,
        sid: 0,
        title: '正厅'
      },
      {
        mode: 'next',
        icon: require('@/assets/home-pointer5.gif'),
        latitude: -0.5,
        longitude: 0.5,
        sid: 2,
        title: '修身齐家'
      },
      {
        mode: 'url',
        icon: require('@/assets/home-pointer.gif'),
        latitude: 0,
        longitude: 2.1,
        url: '/qingfeng',
        title: '清风文苑'
      }
    ]
  }
]

export {
  screenList
}
