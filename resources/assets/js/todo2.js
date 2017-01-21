import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

if($('#todo2').length > 0){

new Vue({
	el : '#todo2',

	data : {
		addTitle : 'Add Todo',
		viewTitle : 'Todo List',

		alertMsg: '',
		success: false,
		danger: false,

		title : '',
		description : '',

		showAdd: true,
		showUpdate: false,
		itemIndex : '',
		showCancel: false,

		lists: []
	},

	created: function(){
		this.getTodo();
	},

	computed: {
		theTitle: function(){
			return this.title.toUpperCase();
		},
		theDescription(){
			return this.description.toUpperCase();
		}
	},

	watch:{
		showAdd: 'cancelButton',
		// showCancel: function(){
		// 	this.showAdd = true;
		// 	this.title = '';
		// 	this.description = '';
		// }
	},

	methods : {
		cancelButton(){
			if(this.showAdd){
				this.showCancel = false;
				this.addForm();
			}else{
				this.showCancel = true;
			}
		},

		addForm: function(){
			this.addTitle = "Add Todo";
			this.showAdd = true;
			this.showUpdate = false;
			this.title = '';
			this.description = '';
		},

		validateBeforeSubmit(){
			return this.$validator.validateAll().then(success => {
                if (!success) {
                    return false;
                }else{
                	this.addList();
                }
            });
		},

		getTodo: function(){

			this.$http.get('api/todo').then(
				(response)=>{
					if(response.ok){
						if(response.status == 200){
							this.lists = response.body;
						}
					}
				},
				(response) => {
					console.log(response);
				}
			);

			// setTimeout(this.getTodo,10000);
		},

		addList(event){

			 var todo = {
				title: this.title, 
				description : this.description
			};

			this.$http.post(base_url+'/todo',todo).then(
				(response) =>{
					if(response.ok){
						if(response.status == 200){
							// console.log(response);
							this.title = '';
							this.description = '';

							this.success = true;
							this.alertMsg = 'Todo list successfully added!';

							this.lists.push(todo);
						}
					}
				},
				(response) =>{
					if(response.ok==false && response.status == 422 && response.statusText == 'Unprocessable Entity'){
						this.theTitle = response.body.title[0];
						// alert(response.body.title[0]);
					}
					console.log(response);
				}
			);
		},

		editList(index,event){
			event.preventDefault()
			this.addTitle = 'Edit Todo';

			this.showAdd = false;
			this.showUpdate = true;
			this.itemIndex = index;

			this.title = this.lists[index].title;
			this.description = this.lists[index].description;

		},

		updateList(){

			var id = this.lists[this.itemIndex].id;

			var todo = {id:id, title:this.title, description:this.description};

			this.$http.put(base_url+'/todo/'+id,todo).then(
				(response) => {
					this.addTitle = 'Add Todo';

					this.title = '';
					this.description = '';

					this.showUpdate = false;
					this.showAdd = true;

					this.lists[this.itemIndex] = todo;

					this.success = true;
					this.alertMsg = 'Todo list successfully updated!';
				},
				(response) => {

				}
			);		
		},

		deleteList(index){
			var check = confirm('Are you sure delete this?');
			if(check == true){
				var id = this.lists[index].id;
				this.$http.delete(base_url+'/todo/'+id).then(
					(response) => {
						console.log(response);
						this.lists.splice(index,1);
						this.success = true;
						this.alertMsg = 'Todo list successfully deleted!';
					},
					(response) => {

					}
				);	
			}
		}

	}
});


}