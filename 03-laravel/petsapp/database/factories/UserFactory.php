<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function saveImage($path ,$gender, $content,) {
        /**
         * variables por defecto
         */


         
         
        $urls = [
            'https://avatar-placeholder.iran.liara.run/avatars/male', //url male
            'https://avatar-placeholder.iran.liara.run/avatars/female' //url female
            ];
        $itemNumber  = fake()->random;
        $imageFolder = "../../../public/images/avatars";

        /**
         *  condicional que determina el genero
         */
        if($gender == 'Male') {
            $url = $urls[0].$itemNumber;
            $imageContent = file_get_contents($url.$itemNumber);

            $imagePath =$this->saveImage($imageFolder.'/'.$gender,$gender, $imageContent);
        }else{

        }
        file_put_contents($path, $imageContent);
    }
    public function definition(): array
    {
      
        // parte donde descarga las fotos
      
       
        // $maleImages = ['male1.png','male2.png','male3.png','male4.png'];
     

        $gender = fake()->randomElement(['male','female']);
      


        /**
         * 
         * lo que hace la ternaria es decidir apartir del genero
         * que nombre poner
         */

        if  ($gender  == 'male') {
            $nombre  = fake()->firstNameMale();
           

            

        } else {
            $url = $urls[1].$itemNumber.'.png';
            $nombre  = fake()->firstNameFemale();
            $imageContent = file_get_contents($url);

        
        }

        return [
            'document' => fake()->unique()->numerify('##########'),
            'fullname' => $nombre.' '.fake()->lastName(),
            'gender' => $gender,
            'birthdate' => fake()->date(),
            'phone' => fake()->numerify('##########'),
            'email'=> fake()->unique()->email(),
            'password'=>'12345'
        ];

    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
