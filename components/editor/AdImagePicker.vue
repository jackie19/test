<template>
  <div class="pick-image">
    <div class="img-list">
      <draggable
        v-model="images"
        v-bind="dragOptions"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div v-for="(item, index) in images" :key="index" class="img-item">
          <div class="img-item-wrap">
            <div class="img-item-left">
              <img :src="item.url" alt="" class="img__img" />
              <div class="img-item__edit" @click="handleItemChange(index)">
                更换图片
              </div>
            </div>
            <div class="img-item-content"></div>
          </div>
          <div class="img-del" @click.stop="handleRemove(index)">x</div>
        </div>
      </draggable>
    </div>
    <div class="add" @click="handleAdd">+ 添加背景图</div>
    <modal-picker v-model="visible" :max="max" @change="handleImgChange" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ModalPicker from '../modal-image-picker'
export default {
  name: 'AdImagePicker',
  components: {
    ModalPicker,
    draggable,
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
      max: 10,
      visible: false,
      hotVisible: false,
      hotItem: {},
      dragOptions: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost-clone',
      },
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
      this.max = 10
      this.visible = true
      this.handleImgChange = this._handleImgChange.bind(this, null)
    },
    _handleImgChange(index, images) {
      if (this.max === 1) {
        this.images[index] = images[0]
      } else {
        this.images = [...this.images, ...images]
      }
    },
    handleImgChange(images) {
      this._handleImgChange(null, images)
    },
    handleRemove(index) {
      this.images.splice(index, 1)
    },
    handleItemChange(index) {
      this.max = 1
      this.visible = true
      this.handleImgChange = this._handleImgChange.bind(this, index)
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

  border-radius: 2px;
  background: #e9f1ff;
  color: #2878ff;
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
  border-radius: 2px;
}

.img-item-wrap {
  display: flex;
  padding: 10px;
}
.img-item-left {
  position: relative;
  width: 70px;
  height: 70px;
  border: 1px solid #e5e5e5;
  text-align: center;
  background: #f2f4f6;
}
.img-item-left .img__img {
  display: block;
  box-sizing: border-box;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.img-item__edit {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.img-item-content {
  flex: 1;
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
