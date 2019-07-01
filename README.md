# dva-todo-demo
A simple demo for practicing dva.

## 功能需求

```
界面由 输入框、搜索框、确定按钮、TODO List 展示面板 组成
可通过 enter 或者 确定键保存 TODO
点击 TODO 文字，TODO 文字上出现中横线，文字变灰，移至目录最后；再次点击，恢复成 TODO
搜索框输入文字，点击 enter 进行搜索，TODO list 展示面板随之变化
```

## 可用技术

1. antd
2. styled component
3. animation
4. ls存本地

## 测试用例

1. 直接add、直接点击删除、再次点击恢复，观察list的顺序变化
2. 搜索回车出现结果、搜索内容列表可以正常点击、搜索时可以增加item、全部清空搜索会全部展示
