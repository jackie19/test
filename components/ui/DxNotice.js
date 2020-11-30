export default {
  bgColor: {
    label: '背景颜色',
    type: 'elColorPicker',
  },
  textColor: {
    label: '文字颜色',
    type: 'elColorPicker',
  },
  text: {
    label: '公告内容',
    type: 'input',
    props: {
      maxlength: 100,
    },
  },
  linkUrl: {
    label: '链接',
    type: 'input',
  },
  paddingLeftRight: {
    label: '左右边距',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 30,
    },
  },
  paddingTopBottom: {
    label: '左右边距',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 30,
    },
  },
}
