@extends('layouts.app')

@section('content')

<div class="container" id="todo">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

            <todo-form addtitle="Add Todo"></todo-form>

            <todo-list :lists="todolists"></todo-list>


        </div>
    </div>
</div>
@endsection