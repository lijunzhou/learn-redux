# learn-redux

主要用于学习react ＋ redux，实现了一个简单的todo list应用
主要功能是增加待办事项，完成一个待办事项，显示待办事项列表，显示已完成的事项列表，显示所有的事项列表。

master主分支中没有内容，主要有以下4个分支

base 基础实现，实现了基于react + redux 的todos，任务数据存储在内存中，所有action都是同步的。实现了一套数据控制代码适配2套视图代码.

async 分支在base分支上实现了异步action，数据从服务器端获取。

router 分支在base分支的基础上实现了将store放在route外面。 （未完成）

immutable 分支在base分支的基础上使用immutable数据结构。 （未完成)



