<template>
	<div class="alert alert-danger alert-dismissible" role="alert">
	  	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
	  		<span aria-hidden="true">&times;</span>
	  	</button>
	  	<span>{{alertmessage}}</span>
	</div>
</template>


<script type="text/javascript">
	export default{
		props: ['alertmessage']
	}
</script>