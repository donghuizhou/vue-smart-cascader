<template>
  <div class="vue-smart-label">
    {{ cascaderLabel }}
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: {
      cascaderLabel: {
        type: String,
        default: 'abc123abc123abc123abc123abc123abc123abc123'
      }
    },
    data () {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
    destroyed () {
    }
  }
</script>
<style lang="less" scoped>
.vue-smart-label {
  line-height: 1.8;
  padding: 0 30px 0 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>