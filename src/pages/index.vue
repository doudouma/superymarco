<template>
    <div>
        <lists></lists>
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    lists: () => import('../components/mainlists')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
