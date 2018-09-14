<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoviesInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies_info', function (Blueprint $table) {
            $table->increments('id');
            $table->string('enc_id');
            $table->string('name');
            $table->string('category');
            $table->string('category2');
            $table->string('photo_id');
            $table->string('released_date');
            $table->string('genre');
            $table->string('starcast');
            $table->string('discription');
            $table->string('duration');
            $table->string('size');
            $table->integer('view');
            $table->string('uploaded_date');
            $table->string('gp_link_A');
            $table->string('gp_link_B');
            $table->string('mp4_link_A');
            $table->string('mp4_link_B');
            $table->string('other_link');
            $table->string('youlink');
            $table->string('subtitle');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies_info');
    }
}
