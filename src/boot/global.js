import { reactive, readonly } from 'vue'

const state = reactive({
  count: 0
})

const increment = function () {
  state.count++
}

const global = { state: readonly(state), increment }

export default async ({ app }) => {
  app.provide(global)
}
