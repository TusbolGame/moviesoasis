<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MoviesInfo extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'movies_info';
     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;
}
