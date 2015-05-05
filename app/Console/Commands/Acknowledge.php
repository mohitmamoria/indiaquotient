<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Mail\Mailer as Mail;
use Illuminate\Config\Repository as Config;
use Carbon\Carbon;

class Acknowledge extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'indiaq:acknowledge';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Acknowledge the receipt of messages.';

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle(Mail $mail, Config $config)
	{
		$webMessages = \App\Message::unacknowledged()->get();

		$this->info("{$webMessages->count()} to acknowledge.");
		
		foreach($webMessages as $webMessage)
		{
			$this->sendAcknowledgement($webMessage, $mail, $config);
			$this->markAcknowledged($webMessage);
			$this->comment('Acknowledged message by: ' . $webMessage->name . ' | ' . $webMessage->email);
		}
	}

	private function sendAcknowledgement($webMessage, $mail, $config)
	{
		$mail->send('emails.ack', compact('webMessage'), function($message) use($webMessage, $config)
		{
			$message
				->to($webMessage->email, $webMessage->name)
				->replyTo($config->get('indiaq.to.address'), $config->get('indiaq.to.name'))
				->subject($config->get('indiaq.subjects.acknowledgement'));
		});
	}

	private function markAcknowledged($webMessage)
	{
		$webMessage->acknowledged_at = Carbon::now();
		$webMessage->save();
	}

}