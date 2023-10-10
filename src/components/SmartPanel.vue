<template>
  <section class="vue-smart-panel">
    <ul
      class="vue-smart-menu"
      v-for="(menu, menu_i) in currMenuList"
      :key="menu_i"
      >
      <el-scrollbar style="height: 100%">
        <li
          v-for="(item, item_i) in menu"
          :key="item_i"
          class="menu-item"
          @mouseenter="menuMouseEnter(item, menu_i)"
          @mouseleave="menuMouseLeave(item)">
          <span :class="{'menu-label': true, 'highlight': item.highlight}">{{ item.label }}</span>
          <i class="menu-icon el-icon-arrow-right" v-show="item.children && item.children.length"></i>
        </li>
      </el-scrollbar>
    </ul>
  </section>
</template>

<script>
  import { Scrollbar } from 'element-ui'
  export default {
    name: 'VueSmartPanel',
    components: {
      'el-scrollbar': Scrollbar
    },
    props: {
      showPanel: Boolean,
      options: { // 数据源
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        currMenuList: [],
        highlightItems: []
      }
    },
    computed: {
    },
    watch: {
      showPanel: {
        handler (val) {
          if (val) {
            this.currMenuList = [this.options]
          }
        }
      }
    },
    methods: {
      menuMouseEnter (item, menu_i) {
        this.currMenuList.splice(menu_i + 1)

        this.$set(item, 'highlight', true)
        if (item.children && item.children.length) {
          this.currMenuList.push(item.children)
        }
      },
      menuMouseLeave (item) {
        item.highlight = false
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
.vue-smart-panel {
  display: flex;
  height: 180px;
  .vue-smart-menu {
    min-width: 180px;
    max-width: 250px;
    border-right: 1px solid #e4e7ed;
    &:last-child {
      border: none;
    }
    .menu-item {
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 10px;
      cursor: pointer;
      &:hover {
        background: #f5f7fa;
      }
      .menu-label {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .highlight {
        color: #409eff;
        font-weight: bold;
      }
      .menu-icon {
        width: 15px;
      }
    }
  }
}
/deep/ .el-scrollbar__wrap {
   overflow-x: hidden; 
}
</style>