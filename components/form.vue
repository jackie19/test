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
            v-bind="property.props"
          />
        </el-form-item>
      </el-form>
      <template
        v-if="property.children && data.props[key] === property.childrenVisible"
      >
        <d-form :data="{ attrs: property.children, props: data.props }" />
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

<style scoped></style>
