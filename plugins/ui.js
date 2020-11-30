import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

function registerCom(component) {
  component.keys().forEach((fileName) => {
    const componentConfig = component(fileName)
    const componentName = fileName.slice(fileName.lastIndexOf('/') + 1, -4)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

// 自动注册组件，
const UiComponent = require.context('@/components/ui/', false, /\.vue$/)
const EditorComponent = require.context('@/components/editor/', true, /\.vue$/)

registerCom(UiComponent)
registerCom(EditorComponent)
