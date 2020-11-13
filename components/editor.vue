<template>
  <div class="editor">
    <div class="e-title">{{ data.title }}</div>
    <div class="e-content">
      <el-form label-position="left" label-width="90px" size="small">
        <el-form-item
          v-for="(property, key, index) of data.attrs"
          :key="index"
          :label="property.label"
        >
          <el-input
            v-if="property.type === 'input'"
            v-model="data.props[key]"
          />

          <el-radio-group
            v-else-if="property.type === 'radio'"
            v-model="data.props[key]"
          >
            <el-radio-button
              v-for="option in property.options"
              :key="option.label"
              :label="option.value"
              >{{ option.label }}
            </el-radio-button>
          </el-radio-group>

          <component
            :is="property.type"
            v-else
            v-model="data.props[key]"
            v-bind="property.extends"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'Editor',
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
.e-content {
  text-align: left;
  padding: 12px;
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
