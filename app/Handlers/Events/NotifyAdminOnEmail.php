<?php namespace App\Handlers\Events;

use App\Events\MessageWasCreated;

use Illuminate\Mail\Mailer;
use Illuminate\Config\Repository as Config;

class NotifyAdminOnEmail {

	/**
	 * The config repository.
	 *
	 * @var Illuminate\Config\Repository
	 */
	protected $config;

	/**
	 * The mailer instance.
	 *
	 * @var Illuminate\Mail\Mailer
	 */
	protected $mailer;

	/**
	 * Create the event handler.
	 *
	 * @return void
	 */
	public function __construct(Config $config, Mailer $mailer)
	{
		$this->config = $config;
		$this->mailer = $mailer;
	}

	/**
	 * Handle the event.
	 *
	 * @param  MessageWasCreated  $event
	 * @return void
	 */
	public function handle(MessageWasCreated $event)
	{
		$webMessage = $event->message;
		
		logger('NOTIFYING_ADMIN', ['email' => $webMessage->email, 'name' => $webMessage->name]);

		$self = $this;
		$this->mailer->send('emails.new-message', compact('webMessage'), function($message) use($webMessage, $self)
		{
			$message
				->to($self->config->get('indiaq.to.address'), $self->config->get('indiaq.to.name'))
				->replyTo($webMessage->email, $webMessage->name)
				->subject($self->config->get('indiaq.subjects.notification') . ' ' . $webMessage->subject);
		});
	}

}
