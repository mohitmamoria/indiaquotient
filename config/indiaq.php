<?php

return [
	/**
	 * Recipient
	 */
	'to' => ['address' => env('INDIAQ_TO_EMAIL'), 'name' => env('INDIAQ_TO_NAME')],

	/**
	 * Prefix for Subject
	 */
	'subjects' => [
		'notification' => '[NEW MESSAGE]',
		'acknowledgement' => '[IndiaQuotient] We\'ve got your message.'
	],
];