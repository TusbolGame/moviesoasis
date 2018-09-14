<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin/dashboard';
    protected $redirectAfterLogout = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


     /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
//    public function authenticate($request)
//    {
//        if (Auth::attempt(['username' => $request->email, 'password' => $request->password, 'rank' => 0])) {
//            // Authentication passed...
//            return redirect()->intended('dashboard');
//        }
//    }

    public function showLoginForm(){

        $data = ['menu' =>  1];
        if(view()->exists('auth.authenticate')){
            return view('auth.authenticate');
        }
        return view('pages.admin.login')
                ->with($data);
    }
 
    public function showRegistrationForm(){
        $data = ['menu' =>  5];
        return view('auth.register')
                ->with($data);
    }


    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username'   => 'required|min:3|unique:users',
            'password'   => 'required|min:4|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $verificationCode = str_random(40);
        return User::create([
           // 'username'       => trim($data['name']),
            'email'      => trim(strtolower($data['email'])),
            'username'   => trim(strtolower($data['username'])),
            'password'   => bcrypt($data['password']),
            // 'phoneNo'      => trim($data['phoneNo']),
            // 'acctName'      => trim($data['acctName']),
            // 'AcctNo'      => trim($data['acctNo']),
            // 'bank'      => trim($data['bank']),
            // 'email_verification_code' => $verificationCode,
        ]);
    }


}
