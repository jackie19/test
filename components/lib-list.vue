<template>
  <div class="lib-list">
    <draggable
      class="dragArea list-group"
      :list="items"
      :group="{ name: 'description', pull: 'clone', put: false }"
      :sort="false"
      :clone="clone"
      v-bind="dragOptions"
    >
      <div
        v-for="item in items"
        :key="item.name"
        class="c-item placeholder"
        @click="add(item)"
        @mouseover="hover(item)"
      >
        <i class="lib-item__icon" />
        <div class="lib-item__title">{{ item.title }}</div>
        <div v-if="item.name === currentName" class="hidden">
          <component :is="item.name" :ref="item.name" />
        </div>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import items from '@/assets/libItems.json'

export default {
  components: {
    draggable,
  },
  data: () => ({
    dragging: false,
    components: [],
    currentName: '',
    items,
  }),
  computed: {
    style() {
      return { paddingTop: `0px` }
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
      }
    },
  },
  methods: {
    guid(name) {
      // 获取随机ID，组件拖到预览视图后就会被设置ID
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }

      return s4() + s4() + '-' + name
    },
    add(item) {
      const data = this.clone(item)
      this.$store.commit('addComponent', data)
      if (!this.$store.state.current) {
        this.$store.commit('currentComponent', data.guid)
      }
    },
    clone(item) {
      const props = { ...this.$refs[item.name][0].$props }
      const attrs = { ...this.$refs[item.name][0].attrs }
      const guid = this.guid(item.name)
      return {
        title: item.title,
        name: item.name,
        guid,
        props,
        attrs,
      }
    },
    hover(item) {
      this.currentName = item.name
    },
  },
}
</script>
<style scoped>
.lib-list {
  width: 160px;
  height: calc(100vh - 64px);
  font-size: 0;
  padding: 20px 10px;
  border-right: 1px solid #e5e5e5;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}

.c-item {
  position: relative;
  text-align: center;
  display: inline-block;
  width: 50%;
  height: 78px;
  font-size: 12px;
  margin-bottom: 8px;
  cursor: move;
}

.c-item:hover {
  border-radius: 3px;
  background-color: #172eec;
  color: #fff;
}

.lib-item__icon {
  display: inline-block;
  margin-top: 8px;
  background-position: 0 0;
  height: 32px;
  width: 32px;
  background-size: cover;
  background-image: url(../assets/icon-title.png);
}

.hidden {
  display: none;
}
</style>
