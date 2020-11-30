<template>
  <div
    class="dx-notice"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      paddingLeft: `${paddingLeftRight}px`,
      paddingRight: `${paddingLeftRight}px`,
      paddingTop: `${paddingTopBottom}px`,
      paddingBottom: `${paddingTopBottom}px`,
    }"
  >
    <div class="dx-notice-icon">
      <i class="iconfont icon-notice"></i>
    </div>
    <div class="dx-notice-content">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxNotice',
  props: {
    text: {
      type: String,
      default: '这里是公告内容',
    },
    bgColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    linkUrl: {
      type: String,
      default: '',
    },
    paddingLeftRight: {
      type: Number,
      default: 8,
    },
    paddingTopBottom: {
      type: Number,
      default: 8,
    },
  },
  computed: {
    attrs() {
      return {
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
    },
  },
}
</script>

<style scoped>
.dx-notice {
  font-size: 14px;
  display: flex;
}
.dx-notice-content {
  padding: 0 0 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dx-notice-icon {
}
.dx-notice-icon .icon-notice {
  font-size: 12px;
}
</style>
