<template>
  <el-dialog
    title="热区编辑器"
    :visible.sync="dialogVisible"
    width="419px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <div class="img-content">
      <img :src="data.url" alt="" class="img__img" />
      <div v-if="loaded" class="hot-area">
        <vue-draggable-resizable
          v-for="(item, index) in areas"
          :key="index"
          class="hot-item"
          :parent="true"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :on-resize="handleResize(item, index)"
          :on-drag="handleDrag(item, index)"
        >
          <p>{{ item.linkName }}</p>
          <button type="button" class="hot-link-btn">修改</button>
        </vue-draggable-resizable>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleAdd">添加热区</el-button>
      <el-button @click="handleOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import clone from 'lodash/cloneDeep'
export default {
  name: 'ModalHotArea',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {
        return {
          url: '', // 图片
          areas: [], // 热区
        }
      },
    },
  },
  data() {
    return {
      selected: {},
      loaded: false,
      areas: [],
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
  beforeUpdate() {
    if (this.value && this.data.url) {
      let img = new Image()
      img.src = this.data.url
      img.onload = () => {
        this.loaded = true
        img = null
      }
      if (this.areas.length === 0 && this.data?.areas?.length) {
        this.areas = clone(this.data.areas)
      }
      if (this.areas.length === 0) {
        this.handleAdd()
      }
    } else {
      this.loaded = false
      this.areas = []
    }
  },
  methods: {
    handleResize(item, index) {
      return (handle, x, y, width, height) => {
        this.areas[index].w = width
        this.areas[index].h = height
        this.areas[index].x = x
        this.areas[index].y = y
      }
    },
    handleDrag(item, index) {
      return (x, y) => {
        this.areas[index].x = x
        this.areas[index].y = y
      }
    },
    handleAdd() {
      const defaultArea = {
        x: 0,
        y: 0,
        w: 100,
        h: 100,
        linkName: '',
        linkUrl: '',
      }
      this.areas.push(defaultArea)
    },
    handleOk() {
      this.dialogVisible = false
      this.$emit('change', this.areas)
      this.areas = []
    },
  },
}
</script>

<style scoped>
.img-content {
  margin: 2px;
  position: relative;
}

.hot-area {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.hot-item {
  border: 1px dashed #155bd4;
  background-color: rgba(51, 136, 255, 0.4);
  color: #fff;
}
.img__img {
  width: 100%;
  display: block;
}
.hot-link-btn {
  position: absolute;
  left: 0;
  bottom: 0;
  border: 1px solid #e5e5e5;
  font-size: 12px;
  background-color: #555;
  color: #fff;
}
</style>
