<template>
  <div class="dx-video-wrap" :style="{ height: `${height}px` }">
    <video class="dx-video" controls="controls" :src="customUrl">
      当前浏览器不支持最新的video播放
    </video>
  </div>
</template>

<script>
export default {
  name: 'DxVideo',
  props: {
    height: {
      type: Number,
      default: 260,
    },
    customUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.dx-video-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dx-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: #000;
  transform: translate(-50%, -50%);
}
</style>
