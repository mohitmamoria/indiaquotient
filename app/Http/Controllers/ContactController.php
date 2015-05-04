<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Factory as Validator;

class ContactController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function store(Request $request, Validator $validator)
	{
		$input = $request->all();

		$v = $validator->make($input, [
			'name' => 'required|max:150',
			'email' => 'required|email|max:150',
			'phone' => 'required|max:20',
			'subject' => 'required|max:140',
			'message' => 'required'
		]);

		if( ! $v->passes())
		{
			return back()->withErrors($v)->withInput();
		}

		return $this->respondSuccess('You\'ve successfully sent us the message. We\'ll get back to you soon. :)');
	}

	private function respondSuccess($message = 'OK')
	{
		return redirect('/contact')->with('success_message', $message);
	}

}