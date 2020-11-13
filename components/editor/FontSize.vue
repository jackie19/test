<template>
  <el-radio-group v-model="size">
    <el-radio-button
      v-for="option in options"
      :key="option.label"
      :label="option.value"
      >{{ option.label }}
    </el-radio-button>
  </el-radio-group>
</template>
<script>
export default {
  name: 'FontSize',
  props: {
    value: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      innerSize: '',
      options: [
        {
          label: '大(16号)',
          value: '16px',
        },
        {
          label: '中(14号)',
          value: '14px',
        },
        {
          label: '小(12号)',
          value: '12px',
        },
      ],
    }
  },
  computed: {
    size: {
      get() {
        return this.value
      },
      set(value) {
        this.innerSize = value
        this.$emit('input', value)
      },
    },
  },
}
</script>
