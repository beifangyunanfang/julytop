/**
 * Created by v_liukai01 on 2019/4/19.
 */

import {observable, action, useStrict, computed} from 'mobx';

useStrict(true);  //使用严格模式，防止直接在view层修改store中的数据

class Store {
    @observable todos = [{  //todos即为被观察的数据
        title: 'todo标题',
        done: false
    }, {
        title: '标题2',
        done: true
    }]

    @action changeTodoTitle({index, title}) {  //用来修改todos的action
        this.todos[index].title = title;
    }

    @computed get unfinishedTodos() { // 相当于vue中的计算属性，可以对todos进行过滤并返回，可缓存，不会产生不必要的的重渲染
        return this.todos.filter((todo) => todo.done === false);
    }

    @computed get finishedTodos() {
        return this.todos.filter((item) => item.done);
    }
}

export default new Store();

