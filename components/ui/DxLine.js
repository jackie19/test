export default {
  height: {
    label: '高度',
    position: 'top',
    type: 'el-slider',
    props: {
      'show-input': true,
      min: 0,
      max: 30,
    },
  },
  bgColor: {
    label: '背景颜色',
    type: 'elColorPicker',
  },
  display: {
    label: '显示辅助线',
    type: 'el-switch',
    children: {
      true: {
        borderMargin: {
          label: '左右边距',
          type: 'el-slider',
          props: {
            'show-input': true,
            min: 0,
            max: 30,
          },
        },
        borderStyle: {
          label: '选择样式',
          type: 'radio',
          options: [
            {
              label: '实线',
              value: 'solid',
            },
            {
              label: '虚线',
              value: 'dashed',
            },
            {
              label: '点线',
              value: 'dotted',
            },
          ],
        },
        borderColor: {
          label: '辅助线颜色',
          type: 'elColorPicker',
        },
      },
    },
  },
}
