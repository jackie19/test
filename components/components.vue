<template>
  <div class="components-wrap">
    <draggable
      v-model="components"
      class="components"
      v-bind="dragOptions"
      :style="style"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template v-for="component in components">
        <div
          :key="component.guid"
          class="c-item"
          @click="handleClick(component.guid)"
        >
          <component
            :is="component.name"
            :ref="component.guid"
            :key="component.guid"
            :guid="component.guid"
            :class="{
              draggable: true,
              active: component.guid === $store.state.current,
            }"
            v-bind="component.props"
          />
          <div class="c-item__del" @click="handleRemove(component.guid)">
            <div class="c-item__title">{{ component.title }}</div>
            <div class="c-item__icon" />
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data: () => ({
    dragging: false,
  }),
  computed: {
    style() {
      return { paddingTop: `0px` }
    },
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost-clone',
      }
    },
    components: {
      get() {
        return this.$store.state.components
      },
      set(value) {
        this.$store.commit('updateComponents', value)
      },
    },
  },
  methods: {
    handleClick(guid) {
      const { current } = this.$store.state
      if (current !== guid) {
        this.$store.commit('currentComponent', guid)
      }
    },
    handleRemove(guid) {
      this.$store.commit('removeComponent', guid)
    },
  },
}
</script>
<style>
.components-wrap {
  text-align: left;
}

.components-wrap .components {
  min-height: 500px;
}

.components-wrap .components .placeholder {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  background-color: #4272ec;
}

.components-wrap .components .placeholder:before {
  padding: 9px 12px;
  font-size: 12px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  content: '组件放置区域';
  position: absolute;
  background-color: #1752e6;
  color: #fff;
}

.components-wrap .components .placeholder .lib-item__icon {
  display: none;
}

.components-wrap .components .placeholder .lib-item__title {
  display: none;
}

.c-item {
  position: relative;
}

.c-item__del {
  position: absolute;
  top: 0;
  right: -40px;
  width: 34px;
}

.c-item__title {
  width: 80px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  white-space: nowrap;
  display: inline-block;
  background-color: #fff;
  text-align: center;
  pointer-events: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.c-item__icon {
  display: none;
  cursor: pointer;
  position: absolute;
  left: -6px;
  width: 40px;
  height: 28px;
  background-image: url(../assets/icon-del.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.c-item:hover .c-item__icon,
.components-wrap .active + .c-item__del .c-item__icon {
  display: block;
}

.c-item:hover .c-item__title,
.components-wrap .active + .c-item__del .c-item__title {
  display: none;
}

.components-wrap .active:not(.com-item-single):before {
  content: '';
  position: absolute;
  width: 379px;
  height: 100%;
  left: -2px;
  top: 0;
  box-sizing: border-box;
  border: 2px solid #155bd4;
  z-index: 99;
  cursor: move;
}

.components-wrap .draggable {
  position: relative;
}

.components-wrap
  .draggable:hover:not(.active):not(.com-item-single):hover:before {
  border: 1px dashed #155bd4;
  content: '';
  position: absolute;
  width: 377px;
  height: 100%;
  left: -1px;
  top: 0;
  box-sizing: border-box;
  z-index: 99;
  cursor: move;
}
</style>
