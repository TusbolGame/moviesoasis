@extends('layouts.base')


@section('title', "MoviesOasis")

@section('content')
    <!-- Content Header (Page header) -->
    <div id="app">
        <router-view></router-view>
    </div>
@endsection('content')

<!-- Push a style dynamically from a view -->
@push('scripts')
@endpush