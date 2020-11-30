<template>
  <div
    class="dx-title-wrap"
    :style="{ textAlign: align, backgroundColor: bgColor }"
  >
    <div class="dx-title" :style="{ fontSize: titleSize, color: titleColor }">
      {{ title }}
    </div>
    <div class="dx-desc" :style="{ fontSize: descSize, color: descColor }">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxTitle',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    desc: {
      type: String,
      default: '描述内容',
    },
    titleSize: {
      type: String,
      default: '16px',
    },
    descSize: {
      type: String,
      default: '14px',
    },
    align: {
      type: String,
      default: 'left',
    },
    titleColor: {
      type: String,
      default: '#333',
    },
    descColor: {
      type: String,
      default: '#333',
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    attrs() {
      return {
        title: {
          label: '标题内容',
          type: 'input',
        },
        desc: {
          label: '描述内容',
          type: 'input',
        },
        align: {
          label: '显示位置',
          type: 'radio',
          options: [
            {
              label: '居左',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '居右',
              value: 'right',
            },
          ],
        },
        titleSize: {
          label: '标题大小',
          type: 'fontSize',
        },
        descSize: {
          label: '描述大小',
          type: 'fontSize',
        },
        titleColor: {
          label: '标题颜色',
          type: 'elColorPicker',
        },
        descColor: {
          label: '描述颜色',
          type: 'elColorPicker',
        },
        bgColor: {
          label: '背景颜色',
          type: 'elColorPicker',
        },
        link: {
          label: '启用链接',
          type: 'elSwitch',
          children: {
            true: {
              bgColor: {
                label: '链接类型',
                type: 'elColorPicker',
              },
            },
          },
        },
      }
    },
  },
}
</script>

<style>
.dx-title-wrap {
  padding: 16px;
}
.dx-title {
  padding-bottom: 9px;
}
</style>
