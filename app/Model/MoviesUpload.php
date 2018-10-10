<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MoviesUpload extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'movies_upload';
     /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;
}
