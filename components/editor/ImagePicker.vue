<template>
  <div class="pick-image">
    <div class="img-list"></div>
    <div class="add" @click="handleAdd">
      <template v-if="images">
        <span class="add-actions">
          <span class="add__del" @click.stop="handleRemove">
            <i class="el-icon-delete"></i>
          </span>
        </span>
        <img :src="images" alt="" class="add__img" />
      </template>

      <template v-else>+</template>
    </div>
    <modal-picker v-model="visible" :max="1" @change="handleImgChange" />
  </div>
</template>

<script>
import ModalPicker from '../modal-image-picker'
export default {
  name: 'ImagePicker',
  components: {
    ModalPicker,
  },
  props: {
    value: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      visible: false,
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
      this.images = images[0].url
    },
    handleRemove(index) {
      this.images = ''
    },
  },
}
</script>

<style scoped>
.add {
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  border: 1px solid #cad1e8;
  border-radius: 4px;
  background: #fff;
  color: #cad1e8;
  cursor: pointer;
  font-size: 40px;
  line-height: 62px;
}
.add-actions {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.add__del {
  cursor: pointer;
}
.add-actions:hover {
  opacity: 1;
}

.add__img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}
.img-item {
  margin-top: 12px;
  position: relative;
  background-color: #fff;
  user-select: none;
  box-shadow: 0 0 4px 0 rgba(10, 42, 97, 0.2);

  border-radius: 2px;
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
