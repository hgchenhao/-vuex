<template>
<div>
       <div>
         <span>name:</span><b>{{name}}</b><span>age:</span><b>{{age}}</b>from   mapState里
       </div>
       <div> 
       <span>name:</span><b>{{nameGetter}}</b><span>age:</span><b>{{ageGetter}}</b>from mapGetters
       </div>
</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["num", "age", "obj", "name"]),
    ...mapGetters(["nameGetter", "ageGetter"])
  }
};
</script>
<style  scoped>

</style>