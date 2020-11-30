export default {
  title: {
    label: '页面标题',
    position: 'top',
    type: 'input',
    props: {
      maxlength: 10,
    },
  },
  desc: {
    label: '页面描述',
    position: 'top',
    type: 'input',
    props: {
      maxlength: 20,
    },
  },
  logo: {
    label: '上传LOGO',
    type: 'imagePicker',
    position: 'top',
  },
  bgc: {
    label: '背景颜色',
    type: 'elColorPicker',
  },
  bgi: {
    label: '背景图片',
    position: 'top',
    type: 'imagePicker',
  },
  channel: {
    label: '投放渠道',
    type: 'radio',
    options: [
      {
        label: "<i class='iconfont icon-weapp'></i>",
        value: 'weapp',
      },
      {
        label: "<i class='iconfont icon-H5'></i>",
        value: 'h5',
      },
    ],
    children: {
      weapp: {
        barColor: {
          label: '导航条颜色',
          type: 'elColorPicker',
        },
      },
    },
  },
}
