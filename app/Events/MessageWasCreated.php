<?php namespace App\Events;

use App\Events\Event;
use App\Message;

use Illuminate\Queue\SerializesModels;

class MessageWasCreated extends Event {

	use SerializesModels;

	/**
	 * The message instance.
	 *
	 * @var App\Message
	 */
	public $message;

	/**
	 * Create a new event instance.
	 *
	 * @return void
	 */
	public function __construct(Message $message)
	{
		$this->message = $message;
	}

}
