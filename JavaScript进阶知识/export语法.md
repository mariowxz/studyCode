# 这是Node 中向外暴露成员的形式
  module.exports = {}
  
  
#在Es6中，也通过 规范的形式，规定了Es6中如何导入和导出模块
  * Es6中导入模块，使用 import 模块名称 from '模块标识符' import '表示路径'
  * 在Es6中，使用 export default【模块导出】 和 export【按需导出】 向外暴露成员 
   ###export default 向外暴露的成员，可以使用任意的变量来接收；但一个文件只能暴露一次模块；
   ###export 向外暴露的成员，只能使用规定的名称并使用{}来接收；但可以暴露多个模块
   1.在一个模块中可以同时使用 export default 和 export
   2.export default 接收不需要{}，而export接收需要{名称}来接收
   3.如果export 导出成员需要换个名称 则需要用关键字 as

#在Node中，使用var 名称 = require（'模块标识符'）
#module.exports 和 exports 来暴露成员
 
 
 
 
