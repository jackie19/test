<template>
  <div class="dx-image-wrap">
    <div v-if="images.length === 0" class="dx-img-empty">点击编辑图片广告</div>
    <div
      v-for="(item, index) in images"
      :key="index"
      class="dx-image-item"
      :style="{
        marginLeft: `${margin}px`,
        marginRight: `${margin}px`,
        marginBottom: `${marginBottom}px`,
      }"
    >
      <img
        class="dx-image"
        :src="item.url"
        alt=""
        :style="{ borderRadius: `${borderRadius}px` }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxImage',
  props: {
    margin: {
      type: Number,
      default: 0,
    },
    marginBottom: {
      type: Number,
      default: 0,
    },
    borderRadius: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default() {
        return []
      },
    },
    template: {
      type: String,
      default: 'oneByOne',
    },
  },
}
</script>

<style scoped>
.dx-image-item:last-child {
  margin-bottom: 0 !important;
}
.dx-image-wrap .dx-image {
  width: 100%;
  display: block;
}
.dx-img-empty {
  text-align: center;
  padding: 30px 0;
  color: #888;
}
</style>
