<template>
<li class="item" @click="delTodolist">{{content}}{{index}}</li>
</template>

<script>
export default {
  props: ['content','index'],
  methods:{
    delTodolist:function(){
        this.$emit('delete_one',this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 解耦-->
<style scoped>
.item{
  color:green;
}
</style>
