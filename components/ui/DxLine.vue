<template>
  <div
    class="dx-line"
    :style="{ height: `${height}px`, backgroundColor: bgColor }"
  >
    <div
      class="dx-line-item"
      :style="{
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
      default: 20,
    },
    borderMargin: {
      type: Number,
      default: 15,
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
    borderColor: {
      type: String,
      default: '#fff',
    },
    borderStyle: {
      type: String,
      default: 'solid',
    },
  },
  computed: {
    attrs() {
      return {
        height: {
          label: '高度',
          type: 'el-slider',
          extends: {
            'show-input': true,
          },
        },
        borderMargin: {
          label: '左右边距',
          type: 'el-slider',
          extends: {
            'show-input': true,
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
        bgColor: {
          label: '背景颜色',
          type: 'elColorPicker',
        },
        borderColor: {
          label: '辅助线颜色',
          type: 'elColorPicker',
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
