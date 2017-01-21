<template>
<div class="panel panel-default">
  <div class="panel-heading">Todo List</div>
  <div class="panel-body">
      <div class="list-group" v-for="list in lists">
        <li href="#" class="list-group-item">
        <div class="row">
          <div class="col-md-9">
            <h4 class="list-group-item-heading">{{list.title}}</h4>
            <p class="list-group-item-text">{{list.description}}</p>
          </div>

          <div class="col-md-3">
            <button v-on:click="editList" class="btn btn-success btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
        </li> 
      </div>
  </div>
</div>
</template>



<script>
  export default{
    props: ['lists'],
    methods: {
      editList : function(event){
          event.preventDefault();
          alert('edit');
        }
      }
      
      
  }
</script>