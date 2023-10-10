<template>
  <el-input
    v-model="filterValue"
    :size="size"
    :readonly="!filterable"
    @input="deboucedInput"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter.native="showClear = true"
    @mouseleave.native="showClear = false">
    <i
      slot="suffix"
      class="el-icon-error"
      v-show="showClear"></i>
    <i
      slot="suffix"
      :class="{
        'el-input__icon': true,
        'el-icon-arrow-up': showPanel,
        'el-icon-arrow-down': !showPanel}"></i>
  </el-input>
</template>
<script>
  import {
    Input
  } from 'element-ui'
  import {debounce} from 'lodash'
  export default {
    name: 'VueSmartInput',
    components: {
      'el-input': Input
    },
    props: {
      size: {
        type: String,
        default: 'small'
      },
      showPanel: {
        type: Boolean,
        default: false
      },
      filterable: { // 是否可搜索
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showClear: false,
        filterValue: ''
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      deboucedInput: debounce(function (val) {
        console.log(val)
      }, 500),
      onFocus () {
        this.showClear = true
        this.$emit('inputFocus')
      },
      onBlur () {
        this.showClear = false
        this.$emit('inputBlur')
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
</style>