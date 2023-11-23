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
          @click="handleSelectMenu(item)"
          @mouseenter="menuMouseEnter(item, menu, menu_i)"
          @mouseleave="menuMouseLeave(item)">
          <span
            :class="{
              'menu-label': true,
              'highlight': highlightItems.find(f => f.value == item.value)
            }"
            v-html="handleLabel(item.label)"></span>
          <i
            class="menu-icon el-icon-arrow-right"
            v-show="item.children && item.children.length"></i>
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
      showPopover: Boolean,
      options: { // 数据源
        type: Array,
        default: () => []
      },
      selectedValue: { // 当前已选择的数据
        type: Array,
        default: []
      },
      checkStrictly: { // true:只能选到叶子结点 false:可以选到任意节点
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        currMenuList: [],
        highlightItems: [],
        filterText: '', // 过滤文本
      }
    },
    computed: {
    },
    watch: {
      showPopover: {
        handler (val) {
          if (val) {
            this.currMenuList = [this.options]
            this.highlightItems = []
            if (this.selectedValue.length) {
              this.setSelectedMenu(0)
            }
          }
        }
      }
    },
    methods: {
      menuMouseEnter (item, menu, menu_i) {
        // 在 highlightItems 按照层级存储 hover 过的项
        let sameLevelIndex = this.highlightItems.findIndex(f => f.level == menu_i)
        if (sameLevelIndex > -1) {
          this.highlightItems[sameLevelIndex] = {...item, level: menu_i}
          this.highlightItems.splice(sameLevelIndex + 1)
        } else {
          this.highlightItems.push({...item, level: menu_i})
        }
        // 设置下一级panel的数据
        this.currMenuList.splice(menu_i + 1)
        if (item.children && item.children.length) {
          this.currMenuList.push(item.children)
        }
      },
      menuMouseLeave (item) {
      },
      handleSelectMenu (item) { // 选中menu事件
        const selectedItems = this.highlightItems.sort((a, b) => a.level - b.level)
        const lastSelectedItem = selectedItems[selectedItems.length - 1]
        if (this.checkStrictly && lastSelectedItem.children && lastSelectedItem.children.length) {
          return
        }
        this.$emit('setSelectedItems', selectedItems)
        this.filterText = ''
      },
      setSelectedMenu (menu_i) { // 如果有选中的值，设置高亮和panels
        if (menu_i < this.selectedValue.length) {
          let item = this.currMenuList[menu_i].find(m => m.value == this.selectedValue[menu_i])
          this.menuMouseEnter(item, null, menu_i)
          this.setSelectedMenu(menu_i+1)
        }
      },
      openAllLevels (menus, menu_i) { // 展开第一级node的全部后续panel
        this.menuMouseEnter(menus[0], {}, menu_i)
        if (menus[0].children && menus[0].children.length) {
          this.openAllLevels(menus[0].children, menu_i+1)
        }
      },
      handleFilterMenu (val) { // 过滤
        this.filterText = val
        if (val) {
          this.highlightItems = []
          const filterMenus = this.fiterMenuByLabel(this.options)
          this.currMenuList = [filterMenus]
          if (filterMenus.length) {
            this.openAllLevels(filterMenus, 0)
          }
        } else {
          this.highlightItems = []
          this.currMenuList = [this.options]
        }
      },
      fiterMenuByLabel (menu) { // 开启筛选，过滤出符合条件的节点
        return menu.filter(item => {
          if (item.label.indexOf(this.filterText) > -1) {
            return true
          } else if (item.children && item.children.length) {
            const res = this.fiterMenuByLabel(item.children)
            if (res.length) {
              item.children = res
              return true
            }
          }
          return false
        })
      },
      handleLabel (label) { // 设置筛选高亮
        const result = label
        const regExp = new RegExp(this.filterText, 'g')
        return result.replace(regExp, `<span style="color: #FF6a00;font-weight: bold">${this.filterText}</span>`)
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