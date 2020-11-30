<template>
  <div
    class="dx-line"
    :style="{ height: `${height}px`, backgroundColor: bgColor }"
  >
    <div
      class="dx-line-item"
      :style="{
        display: display ? 'block' : 'none',
        borderTop: `1px ${borderStyle} ${borderColor}`,
        marginLeft: `${borderMargin}px`,
        marginRight: `${borderMargin}px`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'DxLine',
  props: {
    height: {
      type: Number,
      default: 8,
    },
    bgColor: {
      type: String,
      default: '',
    },
    display: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String,
      default: '#d7d7d7',
    },
    borderStyle: {
      type: String,
      default: 'solid',
    },
    borderMargin: {
      type: Number,
      default: 8,
    },
  },
  computed: {
    attrs() {
      return {
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
    },
  },
}
</script>

<style>
.dx-line {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dx-line-item {
  margin: 10px 0;
  flex: 1;
}
</style>
