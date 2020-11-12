<template>
  <div class="creator">
    <div class="creator-header">
      <div class="ch-title">店铺装修</div>
      <div class="ch-actions">
        <el-button @click="save">保存</el-button>
      </div>
    </div>
    <div class="container">
      <lib-list />
      <div class="preview-wrap">
        <div class="preview">
          <div class="preview-head">
            <div class="preview-header-title">test</div>
          </div>
          <div class="preview-body">
            <components ref="components" />
          </div>
        </div>
      </div>
      <div class="attr-editor">
        <editor />
      </div>
    </div>
  </div>
</template>

<script>
import LibList from '@/components/lib-list'
import components from '@/components/components'
import editor from '@/components/editor'

export default {
  components: {
    LibList,
    components,
    editor,
  },
  methods: {
    save() {
      const { components } = this.$store.state
      console.log('save====', components)
    },
  },
}
</script>

<style>
.creator {
  height: 100vh;
}

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

.container {
  margin: 0 auto;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
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
  background-image: url(/phone-top.png);
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

.attr-editor {
  width: 370px;
  height: calc(100vh - 64px);

  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
</style>
