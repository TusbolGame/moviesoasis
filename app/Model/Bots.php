<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Bots extends Model
{
   /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'crawlers';
     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
