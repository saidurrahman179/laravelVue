//simple component load//

// Vue.component('todolist', require('./../Todo.vue'));



//simple component load//

//import Todolist from './../Todo.vue';
// Vue.component('todolist', Todolist);



// local component loaded//

// Vue.component('todolist',{
// 	 props: ['list'],
// 	 template: '<div class="list-group"><a href="#" class="list-group-item active"><h4 class="list-group-item-heading">{{ list.title }}</h4><p class="list-group-item-text">{{ list.description }}</p></a></div>'
// });


// new Vue({
//     el: '#todo',
//     data: {
//     	lists : [
// 	    	{title: 'list title', description : 'the title description'},
// 	    	{title: 'list title', description : 'the title description'},
// 	    	{title: 'list title', description : 'the title description'},
//    		 ]
//     },
// });




// this is global component
// Vue.component('todolist',{
// 	data: function(){
// 		return {
// 			lists : [
// 		    	{title: 'list title', description : 'the title description'},
// 		    	{title: 'list title', description : 'the title description'},
// 		    	{title: 'list title', description : 'the title description'},
//    		 	]
// 		};
// 	},
// 	template: '<div class="panel-body"><div class="list-group" v-for="list in lists"><a href="#" class="list-group-item active"><h4 class="list-group-item-heading">{{ list.title }}</h4><p class="list-group-item-text">{{ list.description }}</p></a></div></div>'
// });







import TodoList from './todo_lists.vue';
import TodoForm from './todo_form.vue';

Vue.component('todo-form', TodoForm);

if(document.getElementById('todo')){

var todo = new Vue({
    el: '#todo',
    data: {
    	todolists : [
	    	{title: 'list title', description : 'the title description'},
	    	{title: 'list title', description : 'the title description'},
	    	{title: 'list title', description : 'the title description'},
   		 ]
    },
    components: {
    	'todo-list': TodoList
    }
    
});

}
