export default {
  template: {
    label: '选择模板',
    type: 'radio',
    options: [
      {
        label: '一行一个',
        value: 'oneByOne',
      },
      {
        label: '绘制热区',
        value: 'hotArea',
      },
    ],
    children: {
      oneByOne: {
        images: {
          label: '添加图片',
          tips:
            '最多添加 10 个广告，鼠标拖拽调整广告顺序，建议宽度750像素, 高度1000像素以内, 单张图片大小200kb以内',
          type: 'AdImagePicker',
          position: 'top',
        },
      },
      hotArea: {
        images: {
          label: '添加图片',
          tips:
            '最多添加 10 个广告，鼠标拖拽调整广告顺序，建议宽度750像素, 高度1000像素以内, 单张图片大小200kb以内',
          type: 'HotAreasImagePicker',
          position: 'top',
        },
      },
    },
  },
  borderRadius: {
    label: '自定义圆角',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 20,
    },
  },
  margin: {
    label: '页面边距',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 30,
    },
  },
  marginBottom: {
    label: '图片间距',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 30,
    },
  },
}
