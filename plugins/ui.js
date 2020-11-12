import Vue from 'vue'

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
