export const state = () => ({
  components: [],
  current: null,
})

export const mutations = {
  currentComponent(state, guid) {
    state.current = guid
  },
  addComponent(state, component) {
    state.components.push(component)
  },
  removeComponent(state, guid) {
    const index = state.components.findIndex(
      (component) => component.guid === guid
    )
    state.components.splice(index, 1)
    if (guid === state.current) {
      state.current = ''
    }
  },
  updateComponents(state, components) {
    state.components = [state.components[0], ...components]
  },
  updateProps(state, props) {
    const index = state.components.findIndex(
      (component) => component.guid === state.current
    )
    state.components[index].props = props
  },
}
