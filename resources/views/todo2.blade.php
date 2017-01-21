@extends('layouts.app')

@section('content')

<div class="container" id='todo2'>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

        	<alert-success :alertmessage="alertMsg" v-if="success"></alert-success>
        	<alert-danger :alertmessage="alertMsg" v-if="danger"></alert-danger>

            <div class="panel panel-default">
			    <div class="panel-heading">@{{ addTitle }}</div>
			    <div class="panel-body">
			      <form class="form-horizontal" @submit.prevent="validateBeforeSubmit">

			        <div class="form-group" :class="{'has-error': errors.has('title') }" style="margin-top:5px">
			          <label class="col-sm-2 control-label">Title</label>
			          <div class="col-sm-10">
			            <input type="text" name="title" v-model="title" v-validate data-vv-rules="required|alpha_spaces" class="form-control" placeholder="Title">
			            <p>@{{ theTitle }}</p>
			            <span v-show="errors.has('title')" class="text-danger">@{{ errors.first('title') }}</span>
			          </div>
			        </div>

			        <div class="form-group" :class="{'has-error':errors.has('description')}">
			          <label class="col-sm-2 control-label">Description</label>
			          <div class="col-sm-10">
			            <textarea name="description" v-model="description" v-validate data-vv-rules="required" class="form-control" placeholder="Description"></textarea>
			            <p>@{{ theDescription }}</p>
			            <span v-show="errors.has('description')" class="text-danger">@{{ errors.first('description')}}</span>
			          </div>
			        </div>
			        <div class="form-group">
			          <div class="col-sm-offset-2 col-sm-10">
			            <button type="submit" v-if="showAdd" @submit.prevent="addList" class="btn btn-primary">Add to list</button>
			            <button v-on:click.prevent="updateList" v-if="showUpdate" class="btn btn-primary">Update to list</button>

			            <button v-if="showCancel" v-on:click.prevent="showAdd=true" class="btn btn-primary">Cancel</button>
			          </div>
			        </div>
			      </form>
			    </div>
		  </div>


		  	<div class="panel panel-default">
			  <div class="panel-heading">@{{viewTitle}}</div>
			  <div class="panel-body">
			      <div class="list-group" v-for="(list, index) in lists">
			        <li href="#" class="list-group-item">
			        <div class="row">
			          <div class="col-md-9">
			            <h4 class="list-group-item-heading">@{{list.title}}</h4>
			            <p class="list-group-item-text">@{{list.description}}</p>
			          </div>

			          <div class="col-md-3">
			            <button v-on:click="editList(index,$event)" class="btn btn-success btn-sm">Edit</button>
			            <button v-on:click.prevent="deleteList(index)" class="btn btn-danger btn-sm">Delete</button>
			          </div>
			        </div>
			        </li> 
			      </div>
			  </div>
			</div>

        </div>
    </div>
</div>
@endsection