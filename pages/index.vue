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
import title from '@/assets/pageTitle.json'

export default {
  components: {
    LibList,
    preview,
    editor,
  },
  mounted() {
    this.$store.commit('addComponent', title)
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
