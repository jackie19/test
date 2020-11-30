<template>
  <div>
    <div v-for="(property, key, index) of data.attrs" :key="index">
      <el-form
        :key="index"
        :label-position="property.position || 'left'"
        label-width="90px"
        size="small"
      >
        <el-form-item :label="property.label">
          <div v-if="property.tips" class="tips">{{ property.tips }}</div>

          <el-input
            v-if="property.type === 'input'"
            v-model="data.props[key]"
            v-bind="property.props"
            show-word-limit
          />

          <el-radio-group
            v-else-if="property.type === 'radio'"
            v-model="data.props[key]"
          >
            <el-radio-button
              v-for="option in property.options"
              :key="option.label"
              :label="option.value"
            >
              <div v-html="option.label"></div>
            </el-radio-button>
          </el-radio-group>

          <component
            :is="property.type"
            v-else
            v-model="data.props[key]"
            v-bind="property.props"
          />
        </el-form-item>
      </el-form>
      <template v-if="property.children && property.children[data.props[key]]">
        <d-form
          :data="{
            attrs: property.children[data.props[key]],
            props: data.props,
          }"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DForm',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.tips {
  padding: 0 0 10px;
  line-height: 15px;
  color: #969799;
  text-align: left;
}
</style>
