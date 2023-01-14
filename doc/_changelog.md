# 手工维护的changlog

## v11

实现了并发更新，通过修改 packages/react-dom/src/SyntheticEvent.ts 中的 eventTypeToEventPriority 方法下的 click 对应优先级， 可以观察同步更新（SyncLane）与其他优先级下的点击事件中触发更新的区别（是否会开启时间切片）。包括如下功能：

- Concurrent 调度流程

## v10

这一版的改动比较大，为了实现 React-Noop-Renderer，对 React-Reconciler 与 rollup 配置做了一些调整，使 React-Reconciler 更通用（可以对接不同宿主环境）。包括如下功能：

- 实现 React-Noop-Renderer，可以脱离 ReactDOM 更好的测试 Recocniler 逻辑

- 对 rollup 配置做了改动，以配合 React-Reconciler 更好对接不同宿主环境

- 引入 React 的内部包 jest-react、react-test-renderer，配合自制的 React-Noop-Renderer 测试并发情况下的 React case

- 跑通 useEffect 调用顺序的 case

- 修复了过程中发现的 Diff 算法的小 bug

- Scheduler、jest-react、react-test-renderer 均采用 NPM 包形式引入

## v9

实现了 useEffect，为了实现 useEffect 回调的异步调度，引入了官方的 scheduler 模块。当前 scheduler 模块的生产环境版本放在 packages 目录下，方便对他进行修改。如果后期证实没有需要特别修改的地方，会考虑以 NPM 包的形式引入 scheduler。包括如下功能：

- useEffect 实现

## v8

实现了基础功能的 Lane 模型，可以调度同步更新，并基于此实现了 batchedUpdates（批处理），包括如下功能：

- Lane 模型
- 带优先级的 Update 机制
- Legacy 调度流程（包含 batchedUpdates）
- 修复了多个子节点中 number 类型节点不支持的 bug

## v7

实现了多节点 reconcile 流程（俗称的 Diff 算法），包括如下功能：

- 修复了 update 时 onClick 回调不更新的 bug
- 插入多节点的 mount 流程
- 插入多节点的 reconcile 流程
- 浏览器环境 DOM 的移动

Diff 算法的测试用例还依赖 useEffect、useRef 的实现，放在后面再实现

## v6

实现事件系统，包括如下功能：

- 事件模型
- onClick 事件支持（以及 onClickCapture 事件）

## v5

实现单节点 update，包括如下功能：

- 浏览器环境 DOM 的删除（比如 h3 变为 p，那么就要经历删除 h3、插入 p）
- 插入单节点的 reconcile 流程（包括 HostComponent、HostText）
- 删除节点的 reconcile 流程（为后续 ref、useEffect 特性做准备，实现的比较完备）
- Hooks 架构 update 时实现

## v4

初始化测试相关架构，包括如下功能：

- 实现 React.isValidElement
- jest 环境搭建
- babel 配置
- ReactTestUtils
- 跑通关于 jsx 的 17 个官方用例

## v3

实现 useState 的 mount 时流程，包括如下功能：

- FunctionComponent 类型支持
- Hooks 架构 mount 时实现
- useState 实现

## v2

插入单节点的 mount 流程（可以在浏览器环境渲染 DOM），包括如下功能：

- 浏览器环境 DOM 的插入
- HostText 类型支持

## v1

插入单节点的 render 阶段 mount 流程，包括如下功能：

- JSX 转换
- Fiber 架构
- 插入单节点的 reconcile 流程
- HostComponent 类型支持
- HostRoot 类型支持

注：还未实现浏览器环境下的渲染
