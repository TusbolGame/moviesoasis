@extends('layouts.base')


@section('title', $title)

@section('content')

    <div id="app">
        <div class="col-xs-12 col-xs-offset-0 col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
            <div class="headings text-center h2" style="margin-top:40px;">
                <strong> {{ $youlink }}</strong>
            </div>
            <iframe frameborder="0" src="{{ $youlink . '?autoplay=1' }}"></iframe>
        </div>
    </div>
@endsection('content')

