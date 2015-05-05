<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'messages';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'email', 'phone', 'subject', 'message', 'created_at', 'updated_at', 'acknowledged_at'];

	protected $dates = ['acknowledged_at'];

	public function scopeUnacknowledged($query)
	{
		return $query->whereNull('acknowledged_at');
	}

}
