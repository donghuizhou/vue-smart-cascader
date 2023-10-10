<template>
  <span class="vue-smart-cascader">

    <el-popover
      placement="bottom"
      popper-class="smart-cascader-popover">
      <SmartPanel
        v-bind="$attrs"
        :showPanel="showPanel" />

      <SmartInput
        slot="reference"
        v-model="value"
        v-bind="$attrs"
        :showPanel="showPanel"
        @inputFocus="inputFocus"
        @inputBlur="inputBlur" />
    </el-popover>

  </span>
</template>
<script>

  import {
    Select,
    Option,
    Popover
  } from 'element-ui'
  import SmartInput from './components/SmartInput.vue'
  import SmartPanel from './components/SmartPanel.vue'

  export default {
    name: 'VueSmartCascader',
    components: {
      'el-select': Select,
      'el-option': Option,
      'el-popover': Popover,
      SmartInput,
      SmartPanel,
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
      // options: { // 数据源
      //   type: Array,
      //   default: () => []
      // },
    },
    data () {
      return {
        showPanel: false
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      inputFocus () {
        this.showPanel = true
      },
      inputBlur () {
        this.showPanel = false
      }
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
.vue-smart-cascader {
  display: inline-block;
}
</style>
<style lang="less">
.smart-cascader-popover {
  padding: 10px 0;
}
</style>