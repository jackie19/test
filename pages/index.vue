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
      <preview />
      <editor />
    </div>
  </div>
</template>

<script>
import LibList from '@/components/lib-list'
import preview from '@/components/preview'
import editor from '@/components/editor'

export default {
  components: {
    LibList,
    preview,
    editor,
  },
  beforeMount() {
    const attrs = require.context('@/components/ui/', false, /\.js$/)
    const componentsAttrs = new Map()
    attrs.keys().forEach((fileName) => {
      const componentName = fileName.slice(fileName.lastIndexOf('/') + 1, -3)
      const componentConfig = attrs(fileName)
      componentsAttrs.set(componentName, componentConfig.default)
    })

    this.$axios.get('/mock.json').then((res) => {
      const data = res.data.map((item) => {
        item.attrs = componentsAttrs.get(item.name)
        return {
          ...item,
        }
      })
      // eslint-disable-next-line no-console
      console.log(data, 'mock=======')
      // this.$store.commit('initComponent', data)
    })
  },
  methods: {
    save() {
      let { components } = this.$store.state
      components = components.map((item) => {
        const { attrs, ...rest } = item
        return rest
      })
      // eslint-disable-next-line no-console
      console.log('save====', JSON.stringify(components))
    },
  },
}
</script>

<style>
.creator {
  height: 100vh;
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
</style>
