<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Http\Requests\Todo;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }


    // public function todo(Request $request){
    //     $this->validate($request,['title' => 'required']);
    // }


    public function todo(Todo $request){
        \App\Todo::create([
             'title' => $request->title,
             'description' => $request->description
        ]);
    }

}
