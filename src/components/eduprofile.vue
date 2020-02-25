<template>
  <div>
    <div v-for="(item,index) in error3.length" v-bind:key="index">
      <div class="work work--container">
      <div class="work work--label">
        <label v-if="index==0">Education</label>
        <label v-else style="color:white">Education</label>
        <input v-model="error3[index].School" type="text" placeholder="Education" @change="flagchange($event,index,'input')" @input="flagchange($event,index,'input')" v-on:keyup.delete="flagchange($event,index,'input')"><br>
      </div>
      <div class="work work--selection">
        
         <select v-model="error3[index].Enrolled" @change="flagchange($event,index,'activefrom')" @input="flagchange($event,index,'activefrom')">
           <option  value="">Enrolled</option>
           <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
         </select>
         <select v-model="error3[index].Graduated" @change="flagchange($event,index,'activeto')" @input="flagchange($event,index,'activeto')">
           <option  value="">Graduated</option>
           <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear" >{{ Activetoyear }}</option>
         </select> 
      </div>
        <p class="errmessage" v-show="error3[index].Flag">{{error3[index].message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
     year:0
    }
  },
props:['error3'],
computed:{
   years() {
      const year1 = new Date().getFullYear()
      return Array.from({length: year1 - 1900}, (value, index) => 1901 + index)
    },
     Activetoyears() {
      const year1 = new Date().getFullYear()
      return Array.from({length: year1 - 1900}, (value, index) =>  1901+1 + index)
    }
},
methods:{

  flagchange(event,index,type){
 localStorage.setItem('error3',JSON.stringify(this.error3))
    
    if(type=='activefrom')
    {   this.year=parseInt(event.target.value) ;
      this.error3[index].Enrolled=event.target.value
    }
    else if(type=='activeto'){
        
      this.error3[index].Graduated=event.target.value 
    }
    else if(type=='input'){
      this.error3[index].School=event.target.value
    }
    if(this.error3[index].Enrolled=='' || this.error3[index].Graduated=='' ||this.error3[index].School=='')
     this.error3[index].Flag=true
    else
    this.error3[index].Flag=false

  }
}
}
</script>

<style scoped lang="scss">
.errmessage{
  color:red;
  font-size: 13px;
  margin:7px 0px 0px 230px;
}
select{
  width:110px;
  height:25px;
  margin-top:11px;
}
.work--container{
  width: 500px;
  margin-left: 27%;
  .work--label{
    input{
      width: 50%;
      height:25px;
    }
    label{
      margin-right: 18px;
    }
  }
  .work--selection{
    width: 259px;
    margin-left: 33.5%;
    display: flex;
    justify-content: space-between;
  
  }
}
// .work--label{
//   text-align: left;
//   margin-left: 33.2%;
//   input{
//     width: 32.5%;
//   }

// }
// .work--selection{
//   text-align: left;
//   margin-left: 40.8%;
//   select{
//     width:15%;
//     margin-right: 7%;
//   }
// }
</style>