<template>
    <div>
        <lists></lists>
    </div>
</template>

<script>
import lists from '../components/searchlists'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    lists: lists,
    top: top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
