<?php


Route::get('/', function () {
    return view('todo2');
});

Route::get('/todo', function () {
    return view('todo');
});

Route::get('/todo2', function () {
    return view('todo2');
});

Route::post('todo',function(){

	$validator = \Validator::make(\Request::all(),['title' => 'required'])->validate();

	$validator = \Validator::make(\Request::all(),['title' => 'required']);

	if($validator->fails()){
		if(\Request::ajax()){
			return response()->json($validator->messages(), 422);
		}else{
			return back()->withErrors($validator);
		}
	}


	App\Todo::create([
		'title' => \Request::get('title'),
		'description' => \Request::get('description')
		]);

});


Route::delete('todo/{id}',function($id){
	App\Todo::where('id',$id)->delete();
	return response()->json(['id'=>$id]);
});


Route::put('todo/{id}',function($id){
	App\Todo::where('id',$id)->update([
			'title' => \Request::get('title'),
			'description' => \Request::get('description')
		]);
});
