export default {
  title: {
    label: '标题内容',
    type: 'input',
  },
  desc: {
    label: '描述内容',
    type: 'input',
  },
  align: {
    label: '显示位置',
    type: 'radio',
    options: [
      {
        label: '居左',
        value: 'left',
      },
      {
        label: '居中',
        value: 'center',
      },
      {
        label: '居右',
        value: 'right',
      },
    ],
  },
  titleSize: {
    label: '标题大小',
    type: 'fontSize',
  },
  descSize: {
    label: '描述大小',
    type: 'fontSize',
  },
  titleColor: {
    label: '标题颜色',
    type: 'elColorPicker',
  },
  descColor: {
    label: '描述颜色',
    type: 'elColorPicker',
  },
  bgColor: {
    label: '背景颜色',
    type: 'elColorPicker',
  },
  link: {
    label: '启用链接',
    type: 'elSwitch',
    children: {
      true: {
        bgColor: {
          label: '链接类型',
          type: 'elColorPicker',
        },
      },
    },
  },
}
