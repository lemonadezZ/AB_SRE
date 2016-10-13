@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-2">
            <div class="panel panel-default">
                <div class="panel-heading">Project List <a href="/project/add" class="btn btn-primary">ADD</a></div>

                <div class="panel-body">
                    <ul class="list-unstyled project-list">
			<?php for($i=0;$i<10;$i++){ ?>
			<li>
				<a href="">project 1</a>
			</li>
			<?php } ?>
		</ul>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
