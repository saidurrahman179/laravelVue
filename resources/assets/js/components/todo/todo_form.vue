<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ addtitle }}</div>
    <div class="panel-body">
      <form class="form-horizontal">
        <div class="form-group" style="margin-top:5px">
          <label for="title" class="col-sm-2 control-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
            <span>{{ title }}</span>
          </div>
        </div>
        <div class="form-group">
          <label for="desription" class="col-sm-2 control-label">Description</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="desription" placeholder="Description" v-model="desription"></textarea>
            <span>{{ desription }}</span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button v-on:click="addList" class="btn btn-primary">Add to list</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  export default{
    props: ['addtitle'],
    data(){
      return {
        title: '',
        desription: '',
      }
    },
    methods:{
      addList:function(event){
        event.preventDefault();
        alert('add');
      }
    },

  }
</script>