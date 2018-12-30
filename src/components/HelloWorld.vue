<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <span @click='showMenu'>点我下拉菜单</span>
    
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your vMenu'
    }
  },
  methods:{
    showMenu(event){
      this.$menu(event,{
        list:[{
          icon:'',
          text:'vue',
          clickFun:this.showAlert,
        },{
          icon:'',
          text:'javascript',
          clickFun:this.showAlert,
        },{
          icon:'',
          text:'html',
          disabled:true,
          clickFun:this.showAlert,
        },{
          icon:'',
          text:'css',
          disabled:false,
          clickFun:this.showAlert,
        }],

        ulClass:'menuclass'
      })
    },
    showAlert(item){
      alert(item.text)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
