<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class StudentInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_info', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hashId');
            $table->string('regNo')->unique();
            $table->string('fullname');
            $table->string('class');
            $table->string('dept');
            $table->string('year_session');
            $table->string('home_address');
            $table->string('parent_no');
            $table->string('pix');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_info');
    }
}
