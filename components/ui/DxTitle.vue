<template>
  <div
    class="dx-title-wrap"
    :style="{ textAlign: align, backgroundColor: bgColor }"
  >
    <div class="dx-title" :style="{ fontSize: titleSize, color: titleColor }">
      {{ title }}
    </div>
    <div class="dx-desc" :style="{ fontSize: descSize, color: descColor }">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxTitle',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    desc: {
      type: String,
      default: '描述内容',
    },
    titleSize: {
      type: String,
      default: '16px',
    },
    descSize: {
      type: String,
      default: '14px',
    },
    align: {
      type: String,
      default: 'left',
    },
    titleColor: {
      type: String,
      default: '#333',
    },
    descColor: {
      type: String,
      default: '#333',
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.dx-title-wrap {
  padding: 16px;
}
.dx-title {
  padding-bottom: 9px;
}
</style>
