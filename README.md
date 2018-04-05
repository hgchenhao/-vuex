##
   对vuex一次小小的总结
>当我们要用去使用一个东西时，首先要知道它是什么，用来干什么。<br>
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化<br>
之前用其他框架去写组件时，嵌套太深了，一直往里面传值太过于繁琐，而且去找一个状态太麻烦了<br>
这种问题就是vuex官方所说的：遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏,多个视图依赖于同一状态，来自不同视图的行为需要变更同一状态
###
 我对vuex理解就是一个数据仓库，相关的增删改查功能是全局性的，不用谁去通知谁，全都来告诉我就好了。
 ###
 今天写了一个小demo
 ####
 代码片段：
 ```
    <div>
         <span>name:</span><b>{{name}}</b><span>age:</span><b>{{age}}</b>from   mapState里
       </div>
       <div> 
       <span>name:</span><b>{{nameGetter}}</b><span>age:</span><b>{{ageGetter}}</b> from mapGetters
       </div>
      <button @click="changeAge(10)">vue-mutations</button> 
       <button @click='actionChange'>vue-action</button>
       <p>{{id}}<br>(mutations每次加10,action每次加5)</p>
       <button @click="changeName('Mutations改名字')">Mutations改名字</button>
        <button @click="actionChangeName('action改名字')">action改名字</button>
        <p>(action修改2秒后执行)</p>
       <div style="margin-top:50px"> 
          <button @click="go">进入子路由</button>
       </div>
       <div>
        <router-view></router-view>
       </div>
 ```
 >js
 ```
import other from "./other";
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";//引入辅助函数
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState(["id", "age", "obj", "name"]),   //把mapState理解成data
    ...mapGetters(["nameGetter", "ageGetter"]) //mapGetters相当于计算属性
  },
  methods: {
    go() {
      this.$router.push({ path: "/hello/123", component: other });
    },
    actionChange() {
      this.actionChangeAge(5);
    },
    ...mapMutations({
      changeAge: "changeAge",  //mapMutations 唯一提交方式，必须是同步函数
      changeName: "changeName"
    }),
    ...mapActions({
      actionChangeAge: "actionChangeAge",//Action提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作。
      actionChangeName: "actionChangeName"
    })
  }
};
 ```


#####
 我的src是这样的：<br>
 ![](https://user-gold-cdn.xitu.io/2017/12/27/16097b65d55705b1?w=300&h=332&f=jpeg&s=25657)
 #####
 index.js<br>
 ![](https://user-gold-cdn.xitu.io/2017/12/27/16097b9580a8a552?w=554&h=433&f=jpeg&s=84293)
#####
state.js<br>
![](https://user-gold-cdn.xitu.io/2017/12/27/16097ba8a8f20049?w=361&h=258&f=jpeg&s=23751)
#####
getter.js<br>
![](https://user-gold-cdn.xitu.io/2017/12/27/16097bcab4a3ae98?w=486&h=122&f=jpeg&s=26331)
#####
mutation.js<br>
![](https://user-gold-cdn.xitu.io/2017/12/27/16097bd22124db45?w=366&h=232&f=jpeg&s=27535)
#####
action.js<br>
![](https://user-gold-cdn.xitu.io/2017/12/27/16097be9b98e6140?w=530&h=216&f=jpeg&s=38984)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification

npm run build

aaaa

```


