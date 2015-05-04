<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Factory as Validator;
use Illuminate\Mail\Mailer as Mail;
use Illuminate\Support\MessageBag;
use Message;

class MessageController extends Controller {

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
	public function store(Request $request, Validator $validator, Mail $mail)
	{
		try
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

			// Message::create($input);

			$mail->send('emails.new-message', compact('input'), function($message) use($input)
			{
				$message
					->to('mohit.mamoria@gmail.com', 'Team IQ')
					->from($input['email'], $input['name'])
					->subject('[Message from Website]: ' . $input['subject']);
			});

			return $this->respondSuccess('You\'ve successfully sent us the message. We\'ll get back to you soon. :)');
		}
		catch(\Exception $e)
		{
			return back()->withInput()->withErrors(new MessageBag(['general' => 'Something went wrong! Please try again.']));
		}
	}

	private function respondSuccess($message = 'OK')
	{
		return redirect('/contact')->with('success_message', $message);
	}

}