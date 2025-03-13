<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    /**
     * estos son los datos que nesecita la clase Adoption para fucionar
     * @var array
     */
    protected $fillable = [
        'user_id',
        'pet_id',
       
    ];
}
