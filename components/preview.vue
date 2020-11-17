<template>
  <div class="preview-wrap">
    <div class="preview">
      <div class="preview-head">
        <div class="preview-header-title" @click="handleSelect">
          {{ title }}
        </div>
      </div>
      <div class="preview-body">
        <components />
      </div>
    </div>
  </div>
</template>

<script>
import components from './components'

export default {
  name: 'Preview',
  components: { components },
  computed: {
    title() {
      return (
        this.$store.state.components.length &&
        this.$store.state.components[0].props.title
      )
    },
  },
  methods: {
    handleSelect() {
      const guid = 'page-title'
      const { current } = this.$store.state
      if (current !== guid) {
        this.$store.commit('currentComponent', guid)
      }
    },
  },
}
</script>

<style>
.creator-header {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 90;
}

.ch-title {
  font-size: 20px;
}

.preview-wrap {
  flex: 1;
  height: calc(100vh - 64px);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f7f8fa;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.preview-wrap .preview {
  width: 375px;
  margin: 40px auto 0;
}

.preview-body {
  min-height: 750px;
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.preview-wrap .preview .preview-head {
  background-image: url(../assets/phone-top.png);
  height: 64px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
}

.preview-wrap .preview .preview-head .preview-header-title {
  width: 180px;
  margin: 0 auto;
  height: 34px;
  text-align: center;
  padding-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: content-box;
}

.preview-wrap::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 3px;
  background-color: #f5f5f5;
}

.preview-wrap::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}
</style>
