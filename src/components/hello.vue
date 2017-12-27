<template>
     <div>
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
     </div>
</template>
<script>
import other from "./other";
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState(["id", "age", "obj", "name"]),   
    ...mapGetters(["nameGetter", "ageGetter"])
  },
  methods: {
    go() {
      this.$router.push({ path: "/hello/123", component: other });
    },
    actionChange() {
      this.actionChangeAge(5);
    },
    ...mapMutations({
      changeAge: "changeAge",
      changeName: "changeName"
    }),
    ...mapActions({
      actionChangeAge: "actionChangeAge",
      actionChangeName: "actionChangeName"
    })
  }
};
</script>
<style  >
 b{margin: 0 15px}
</style>