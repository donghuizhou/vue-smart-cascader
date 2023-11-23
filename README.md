# vue-smart-cascader

### Project setup
```
npm install

// Compiles and hot-reloads for development
npm run serve

// Compiles and minifies for production
npmrun build
```

### 配置项

| 参数          | 说明                | 类型    | 可选值                 | 默认值 |
| ----          | ----               | ----    | ----                   | ---- |
| size          | 尺寸               | String   | medium / small / mini | - |
| filterable    | 是否可搜索          | Boolean | true/false             | false |
| checkStrictly | 父子节点是否严格关联 | Boolean | true/false             | true |
| placeholder   | 输入框占位文本      | String   | -                     | - |
| options       | 数据源，见下表              | Array   | -                     | - |

### options

| 参数     | 说明                | 类型    | 可选值                 | 默认值 |
| ----     | ----               | ----    | ----                   | ---- |
| label    | 指定选项标签为选项对象的某个属性值 | String | - | - |
| value    | 指定选项的值为选项对象的某个属性值 | String | - | - |
| children | 指定选项的子选项为选项对象的某个属性值 | Array | - | - |


