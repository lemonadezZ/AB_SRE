<?php

namespace sheepdog\Http\Controllers;

use Illuminate\Http\Request;

use sheepdog\Http\Requests;

class PageController extends Controller
{
	function getIndex(){

	}
	function changelog(){
		return view('pages.changelog');
	}
	function document(){
		return view('pages.document');
	}
	function guide(){
		return view('pages.guide');
	}
}
