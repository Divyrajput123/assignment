<template>
  <main>
    <div class="container containermod">
      <ul class="container container--progressbar">
        <li @click="activate(1)" :class="{ active : active_el == 1 ,activate:done>1,done:this.done>1}" >PERSONAL INFO</li>
        <li @click="activate(2)" :class="{ active : active_el == 2,activate:done>2,done:this.done>2}">PROFILE</li>
        <li @click="activate(3)" :class="{ active : active_el == 3 ,activate:done>3,done:this.done>3}">EXPERTISE</li>
        <li @click="activate(4)" :class="{ active : active_el == 4 ,activate:done>4,done:this.done>4}">INTERVIEW</li><br>
      </ul>
    </div>
  </main>
</template>

<script>

export default {
methods:{
activate:function(el){
  this.active_el = el;
  this.done=el
  localStorage.setItem('done',this.done)
  localStorage.setItem('active',el)
  window.console.log(this.active_el)
  if(this.active_el==1){
    this.$router.push('/sample')
  }
   if(this.active_el==2){
    this.$router.push('/profile')
  }
  else if(this.active_el==3){
  this.$router.push('/expertise')
  }
  else if(this.active_el==4){
  this.$router.push('/interview')
  }
}

},
data:function(){
return{
  active_el:localStorage.getItem('active'),
  done:localStorage.getItem('done')

}
},
// created:function(){
//  this.active_el=localStorage.getItem('active')
//  window.console.log(localStorage.getItem('active'))
// }
}
</script>

<style scoped lang="scss">
.containermod{
  width: 100%; 
}
.container--progressbar{
  counter-reset: step;
}
.container--progressbar li{
  list-style-type: none;
  position: relative;
  float: left;
  width: 25%;
  font-size: 10px;
  text-align: center;
  

}

.container--progressbar li:before{
  content:counter(step);
  counter-increment: step;
  border:1px solid #ddd;
  display: block;
  margin:0 auto 10px auto;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  line-height: 30px;
  background-color: white;
  text-align: center;
}
.container--progressbar li:after{
  width: 100%;
  top:15px;
  position:absolute;
  content: '';
  border-bottom: 1px dotted #ddd;
  height: 1px;
  left:-50%;
  z-index: -1;
  
   
}
.container--progressbar li:first-child:after{
  content: none;
}
.container--progressbar li.active{
  font-weight: bold;
} 
.container--progressbar li.active::before{
  border-color: orange;
  background-color: orange;
  color: white;
} 

// .progressbar li.active+li:after{
//   border-bottom: 1px dotted orange;
  
// } 
.container--progressbar li.activate+li:after{
  border-bottom: 1px dotted orange;
}
.container--progressbar li.done:before{
      content: "✓";
      color: orange;
      font-size: 20px;
}
</style>