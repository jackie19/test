import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

function registerCom(component) {
  component.keys().forEach((fileName) => {
    const componentConfig = component(fileName)
    const componentName = fileName.slice(2, -4)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

const UiComponent = require.context('@/components/ui/', false, /\.vue$/)
const EditorComponent = require.context('@/components/editor/', false, /\.vue$/)

registerCom(UiComponent)
registerCom(EditorComponent)
