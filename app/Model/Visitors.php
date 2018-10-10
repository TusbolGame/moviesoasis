<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Visitors extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'visitor';
     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
}
