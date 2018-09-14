@extends('layouts.base')


@section('title', $title)

@section('content')
    <div style="text-align: center; margin:30px; font-size: 1.6em">
        <strong>CONTACT</strong>
    </div>

    <br>
    <div style="margin-left: 5%; margin-right: 5%">
        @if($success != '' && $error == '')
            <div class="alert alert-success">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                {{$success}}
            </div>
        @endif

        @if($success != '' && $error == '')
            <div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <strong>Error! </strong>{{$error}}
            </div>
        @endif

    </div>
    <p>&nbsp;</p>

    <!--outside row-->
    <div class="row">


        <!--outside col-->
        <div class="col-lg-12">

            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                    <div class="well well-lg">
                        <br/>

                        Send us your feedback
                        <form id="form2" name="form2" method="post" action="">
                            <div><label>Name:</label><br/>
                                <input type="text" id="contact_name" name="contact_name" class="form-control"
                                       value="" placeholder="Your Name here...."
                                       required="required"></div>
                            <div><label>Subject:</label><br/>
                                <input type="text" id="contact_subject" name="contact_subject" class="form-control"
                                       value=""
                                       placeholder="Your Subject here...." required="required"></div>
                            <div><label style="vertical-align: top">Message:</label><br/>
                                <textarea maxlength="40" id="contact_message" name="contact_message" rows="3"
                                          class="form-control" required="required"></textarea>
                            </div>
                            <input type="hidden" id="token" name="token" value="">
                            <br/>
                            <div>
                                <button id="contact_submit" name="contact_submit" value="Submit"
                                        class="btn btn-block btn-group-sm btn-success">Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection('content')