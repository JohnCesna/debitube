<template>
  <q-page class="flex flex-center">
    <h1>{{global.state.count}}</h1>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  inject: ['global']
}
</script>
