<template>
  <el-input
    v-model="smartValue"
    :size="size"
    :readonly="!filterable"
    @input="deboucedInput"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter.native="showClear = true"
    @mouseleave.native="showClear = false"
    :class="{'cannot-filter': !filterable}"
    :placeholder="placeholder">
    <i
      slot="suffix"
      class="el-icon-error"
      v-show="showClear"></i>
    <i
      slot="suffix"
      :class="{
        'el-input__icon': true,
        'el-icon-arrow-up': showPopover,
        'el-icon-arrow-down': !showPopover}"></i>
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
      showPopover: {
        type: Boolean,
        default: false
      },
      filterable: { // 是否可搜索
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      }
    },
    data () {
      return {
        showClear: false,
        smartValue: ''
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      deboucedInput: debounce(function (val) {
        this.$emit('inputFilter', val)
      }, 500),
      onFocus () {
        this.showClear = true
        this.$emit('inputFocus')
      },
      onBlur () {
        this.showClear = false
        this.$emit('inputBlur')
      },
      setSmartValue (val) {
        this.smartValue = val
      },
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
.cannot-filter /deep/ .el-input__inner {
  cursor: pointer;
}
</style>