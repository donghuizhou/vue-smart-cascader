<template>
  <span class="vue-smart-cascader">

    <el-popover
      trigger="manual"
      v-model="showPopover"
      placement="bottom"
      popper-class="smart-cascader-popover">
      <SmartPanel
        v-bind="$attrs"
        ref="smartPanel"
        :selectedValue="inputValue"
        :showPopover="showPopover"
        @setSelectedItems="setSelectedItems"
        @click.native="handlePanelClick" />

      <SmartInput
        slot="reference"
        v-model="value"
        v-bind="$attrs"
        ref="smartInput"
        :showPopover="showPopover"
        @inputFilter="handleInputFilter"
        @inputFocus="inputFocus"
        @inputBlur="inputBlur" />
    <!-- <SmartLabel
          class="vue-smart-label" /> -->
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
  // import SmartLabel from './components/SmartLabel.vue'

  export default {
    name: 'VueSmartCascader',
    components: {
      'el-select': Select,
      'el-option': Option,
      'el-popover': Popover,
      SmartInput,
      SmartPanel,
      // SmartLabel,
    },
    props: {
      value: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        showPopover: false,
        selectedItems: [],
      }
    },
    computed: {
      inputValue: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      },
      filterable () {
        return this.$attrs.filterable
      }
    },
    watch: {
    },
    methods: {
      handleInputFilter (val) { // 过滤
        this.$refs.smartPanel.handleFilterMenu(val)
      },
      inputFocus () {
        this.showPopover = true
      },
      inputBlur (e) {
        console.log(e)
        this.showPopover = false
        if (this.filterable) { // 检索不到数据时，blur时input框还原上次选中的值
          this.setSelectedItems(this.selectedItems)
        }
      },
      setSelectedItems (items) {
        this.selectedItems = items
        this.inputValue = this.selectedItems.map(m => m.value)
        this.$refs.smartInput.setSmartValue(this.selectedItems.map(m => m.label).join(' / '))
        this.showPopover = false
      },
      handlePanelClick () {
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
  /deep/ .smart-cascader-popover {
    padding: 10px 0;
  }
}
</style>