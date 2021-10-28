<template>
  <div id="app" class="dark">
    <router-view/>
  </div>
</template>
<script>
import eventhub from './router/EventHub.js'
export default {
  mixins: [eventhub]
}
</script>


