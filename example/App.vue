<template>
  <div>
    <VueSmartCascader
      v-model="value"
      :filterable="true"
      :options="options" />
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {
    },
    data () {
      return {
        value: [],
        options: [
          {
            value: 'jiangsu',
            label: '江苏省',
            children: [
              {
                value: 'wuxishi',
                label: '无锡市',
                children: [
                  {
                    value: 'xishanqu',
                    label: '锡山区'
                  },
                  {
                    value: 'xinwuqu',
                    label: '新吴区'
                  },
                  {
                    value: 'binhuqu',
                    label: '滨湖区'
                  },
                ]
              },
              {
                value: 'suzhoushi',
                label: '苏州市',
                children: [
                  {
                    value: 'wuzhongqu',
                    label: '吴中区'
                  },
                  {
                    value: 'gusuqu',
                    label: '姑苏区'
                  },
                  {
                    value: 'xiangchengqu',
                    label: '相城区'
                  },
                ]
              }
            ]
          },
          {
            value: 'zhejiang',
            label: '浙江省',
            children: [
              {
                value: 'hangzhoushi',
                label: '杭州市',
                children: [
                  {
                    value: 'binjiangqu',
                    label: '滨江区'                  
                  },
                  {
                    value: 'shangchengqu',
                    label: '上城区'
                  },
                  {
                    value: 'xiachengqu',
                    label: '下城区'
                  }
                ]
              }
            ]
          },
          {
            value: 'shandong',
            label: '山东省',
            children: [
              {
                value: 'jinanshi',
                label: '济南市',
                children: [
                  { value: 'lixiaqu', label: '历下区' },
                  { value: 'shizhongqu', label: '市中区' },
                  { value: 'huaiyinqu', label: '槐荫区' },
                  { value: 'tianqiaoqu', label: '天桥区' },
                  { value: 'lichengqu', label: '历城区' },
                  { value: 'changqingqu', label: '长清区' },
                  { value: 'zhangqiuqu', label: '章丘区' },
                  { value: 'jiyangqu', label: '济阳区' },
                  { value: 'laiwuqu', label: '莱芜区' },
                  { value: 'gangchengqu', label: '钢城区' },
                  { value: 'pingyinxian', label: '平阴县' },
                  { value: 'shaghexian', label: '商河县' },
                ]
              },
              {
                value: 'qingdaoshi',
                label: '青岛市'
              }
            ]
          },
          {
            value: 'shanghaishi',
            label: '上海市'
          },
          {
            value: 'beijingshi',
            label: '北京市'
          },
          {
            value: 'xianggang',
            label: '香港'
          },
          {
            value: 'aomen',
            label: '澳门'
          },
          {
            value: 'taiwan',
            label: '台湾'
          },
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