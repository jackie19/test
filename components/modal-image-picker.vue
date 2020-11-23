<template>
  <el-dialog title="我的图片" :visible.sync="dialogVisible" width="900px">
    <div class="img-list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="img-item"
        @click="handleSelect(item)"
      >
        <div class="img-box" :style="{ backgroundImage: `url(${item.url})` }" />
        <div class="img-meta">180*180</div>
        <div v-if="selected.includes(item.id)" class="selected">
          <div class="index">{{ selected.indexOf(item.id) + 1 }}</div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ModalImagePicker',
  props: {
    max: {
      type: Number,
      default: 10,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      selected: [],
      list: [
        {
          id: 1,
          url: '/default-img.png',
        },
        {
          id: 2,
          url: '/default-img.png',
        },
        {
          id: 3,
          url: '/default-img.png',
        },
      ],
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
  methods: {
    handleSelect(item) {
      if (this.selected.length > 10) {
        return
      }
      if (!this.selected.includes(item.id)) {
        this.selected.push(item.id)
      } else {
        this.selected.splice(this.selected.indexOf(item.id), 1)
      }
    },
    handleOk() {
      this.dialogVisible = false
      const images = this.list.filter(({ id }) => this.selected.includes(id))
      this.$emit('change', images)
      this.selected = []
    },
  },
}
</script>

<style scoped>
.img-list {
  height: 405px;
  overflow-y: auto;
}
.img-item {
  position: relative;
  float: left;
  width: 105px;
  height: 105px;
  margin-right: 10px;
  margin-bottom: 30px;
  cursor: pointer;
}
.img-list .img-box {
  background: #ccc;
  width: 105px;
  height: 105px;
  background-size: cover;
  background-position: 50% 50%;
}
.img-meta {
  position: absolute;
  width: 105px;
  height: 25px;
  font-size: 12px;
  line-height: 25px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
}
.selected {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #07d;
  position: absolute;
  box-sizing: border-box;
}
.selected:after {
  position: absolute;
  display: block;
  content: '';
  right: 0;
  top: 0;
  border-color: #07d #07d transparent transparent;
  border-style: solid;
  border-width: 14px;
  z-index: 1;
}
.selected .index {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  font-size: 12px;
  color: #fff;
  width: 13px;
  text-align: center;
  height: 15px;
  line-height: 1;
}
</style>
