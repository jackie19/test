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
