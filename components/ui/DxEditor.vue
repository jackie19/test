<template>
  <div class="dx-editor">
    <div v-if="content" class="dx-editor-content" v-html="content"></div>
    <div v-else class="dx-editor-content">
      <p class="dx-editor__p">这里富文本，可点击编辑内容</p>
      <p class="dx-editor__p">你可以对文字进行处理，还能添加表格</p>
      <p class="dx-editor__p">
        也可以在这里插入图片，并对图片加上链接，方便用户点击
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxEditor',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.dx-editor-content {
  min-height: 50px;
  padding: 10px;
  font-size: 16px;
  line-height: 1.3;
  word-wrap: break-word;
}
.dx-editor__p {
  margin: 12px 0;
}
.dx-editor-content /deep/ table {
  margin: 0 auto 10px;
  border-collapse: collapse;
  display: table;
}

.dx-editor-content /deep/ td,
.dx-editor-content /deep/ th {
  padding: 5px 10px;
  border: 1px solid #ddd;
}
</style>
