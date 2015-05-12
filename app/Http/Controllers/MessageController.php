<?php namespace App\Http\Controllers;

use App\Http\Requests\CreateNewMessageRequest;
use App\Events\MessageWasCreated;
use Illuminate\Validation\Factory as Validator;
use Illuminate\Mail\Mailer as Mail;
use Illuminate\Config\Repository as Config;
use Illuminate\Support\MessageBag;

class MessageController extends Controller {

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function store(CreateNewMessageRequest $request, Mail $mail, Config $config)
	{
		try
		{
			$webMessage = \App\Message::create($request->all());

			event(new MessageWasCreated($webMessage));

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

	private function notifyAdmin($webMessage, $mail, $config)
	{
		$mail->send('emails.new-message', compact('webMessage'), function($message) use($webMessage, $config)
		{
			$message
				->to($config->get('indiaq.to.address'), $config->get('indiaq.to.name'))
				->replyTo($webMessage->email, $webMessage->name)
				->subject($config->get('indiaq.subjects.notification') . ' ' . $webMessage->subject);
		});
	}

}