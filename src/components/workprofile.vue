<template>
  <div>
    <div  v-for="(item,index) in error2.length" v-bind:key="index">
      <div class="work work--container">
      <div class="work work--label">
        <label v-if="index==0">WorkHistory</label>
        <label v-else style="color:white">---Education</label>
        <input v-model="error2[index].Company" type="text" placeholder="Company" @change="flagchange($event,index,'input')" @input="flagchange($event,index,'input')" v-on:keyup.delete="flagchange($event,index,'input')"><br>
      </div>
      <div class="work work--selection">
       
         <select v-model="error2[index].ActiveFrom" @change="flagchange($event,index,'activefrom')" @input="flagchange($event,index,'activefrom')">
           <option  value="">Active From</option>
           <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
         </select>
       
        
         <select v-model="error2[index].ActiveTo" @change="flagchange($event,index,'activeto')" @input="flagchange($event,index,'activeto')">
           <option  value="">Active To</option>
           <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear" >{{ Activetoyear }}</option>
         </select>  
      </div>
      <p class="errmessage" v-show="error2[index].Flag">{{error2[index].message}}</p>
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
props:['error2'],
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
    localStorage.setItem('error2',JSON.stringify(this.error2))
    if(type=='activefrom')
    {   this.year=parseInt(event.target.value) ;
      this.error2[index].ActiveFrom=event.target.value
    }
    else if(type=='activeto'){
        
      this.error2[index].ActiveTo=event.target.value 
    }
    else if(type=='input'){
      this.error2[index].Company=event.target.value
    }
    if(this.error2[index].ActiveFrom=='' || this.error2[index].ActiveTo=='' ||this.error2[index].Company=='')
     this.error2[index].Flag=true
    else
    this.error2[index].Flag=false

  }
}
}
</script>

<style scoped lang="scss">
.errmessage{
  color:red;
  font-size: 13px;
  margin:-7px 0px 0px 230px;

}
select{
  width:110px;
  height:30px;
  margin-top:11px;
  margin-bottom: 10px;
}
.work--container{
  width: 500px;
  margin-left: 26.3%;
  .work--label{
    margin-bottom: 12px;
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
    margin-left: 34.5%;
    display: flex;
    justify-content: space-between;
  
  }
}

</style>