<template>
  <div class="vue-smart-cascader">
    <el-select
      v-model="selectedData"
      size="small">
      <el-option
        v-for="item in selectList"
        :key="item.value"
        :label="item.label"
        :value="item.value"></el-option>  
    </el-select>
  </div>
</template>
<script>

  import {
    Select,
    Option
  } from 'element-ui'

  export default {
    name: 'VueSmartCascader',
    components: {
      'el-select': Select,
      'el-option': Option,
    },
    props: {
    },
    data () {
      return {
        selectedData: '',
        selectList: [
          { label: '苏州', value: 'suzhou' },
          { label: '无锡', value: 'wuxi' },
          { label: '上海', value: 'shanghai' },
        ]
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
</style>