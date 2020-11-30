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
