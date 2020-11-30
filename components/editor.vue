<template>
  <div class="editor">
    <div class="e-title">{{ data.title }}</div>
    <div class="e-content">
      <d-form :data="data" />
    </div>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import DForm from './form'

export default {
  name: 'Editor',
  components: {
    DForm,
  },
  data: () => ({
    data: {},
  }),
  watch: {
    '$store.state.current'(guid) {
      if (guid) {
        const { current, components } = this.$store.state
        this.data = _cloneDeep(
          components.find(({ guid }) => guid === current) || {}
        )
      } else {
        this.data = {}
      }
    },
    data: {
      deep: true,
      handler(value) {
        if (Object.keys(value).length) {
          this.$store.commit('updateProps', _cloneDeep(value.props))
        }
      },
    },
  },
}
</script>

<style scoped>
.editor {
  width: 370px;
  height: calc(100vh - 64px);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
}
.e-content {
  text-align: left;
  padding: 12px;
}

.e-content /deep/ .el-form-item__content {
  text-align: right;
}

.e-content /deep/ textarea {
  display: none;
}

.editor .e-title {
  font-size: 18px;
  padding: 20px 16px;
  border-bottom: 1px solid #f2f4f6;
  color: #323233;
  font-weight: 600;
  text-align: left;
}
</style>
