<template>
  <div class="pick-image">
    <div class="img-list">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="img-item"
        @click="handleHotEdit(item, index)"
      >
        <img :src="item.url" alt="" class="img__img" />
        <div class="hot-area" :style="{ transform: `scale(${329 / 375})` }">
          <vue-draggable-resizable
            v-for="(areaItem, idx) in item.areas"
            :key="idx"
            class="hot-item"
            :x="areaItem.x"
            :y="areaItem.y"
            :w="areaItem.w"
            :h="areaItem.h"
            :draggable="false"
            :resizable="false"
          >
            <p>{{ areaItem.linkName }}</p>
          </vue-draggable-resizable>
        </div>
        <div class="img-del" @click.stop="handleRemove(index)">x</div>
      </div>
    </div>
    <div class="add" @click="handleAdd">添加背景图</div>
    <modal-picker v-model="visible" @change="handleImgChange" />
    <modal-hot-area
      v-model="hotVisible"
      :data="hotItem"
      @change="handleAreaChange"
    />
  </div>
</template>

<script>
// todo 热区缩放

import clone from 'lodash/cloneDeep'
import ModalPicker from '../modal-image-picker'
import ModalHotArea from '../modal-hot-area'
export default {
  name: 'ImagePicker',
  components: {
    ModalHotArea,
    ModalPicker,
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      visible: false,
      hotVisible: false,
      hotItem: {},
    }
  },
  computed: {
    images: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
  methods: {
    handleAdd() {
      this.visible = true
    },
    handleImgChange(images) {
      this.images = [...this.images, ...images]
    },
    handleRemove(index) {
      this.images.splice(index, 1)
    },
    handleHotEdit(item, index) {
      this.hotVisible = true
      this.hotItem = item
      this.hotIndex = index
    },
    handleAreaChange(data) {
      this.hotItem.areas = data
      console.log(this.images, '=======')
      this.images = clone(this.images)

      // this.$emit('input', this.images)
    },
  },
}
</script>

<style scoped>
.add {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  padding: 9px 16px;
  border: 1px solid #155bd4;
  border-radius: 2px;
  background: #fff;
  color: #155bd4;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}
.img-item {
  margin-top: 12px;
  position: relative;
  background-color: #fff;
  user-select: none;
  box-shadow: 0 0 4px 0 rgba(10, 42, 97, 0.2);
}
.hot-area {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform-origin: 0 0;
}
.hot-item {
  border: 1px dashed #155bd4;
  background-color: rgba(51, 136, 255, 0.4);
  color: #fff;
}
.img-item .img__img {
  width: 100%;
  display: block;
}
.img-del {
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  right: -8px;
  top: -8px;
  color: #bbb;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
  width: 24px;
  height: 24px;
  line-height: 16px;
  text-align: center;
  border: 2px solid #e7e7e7;
}
</style>
