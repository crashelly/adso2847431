<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use Illuminate\Validation\Rules\ImageFile;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pets = Pet::paginate(10);

        return view('pets.index')->with('pets', $pets);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'document' => ['required', 'numeric', 'unique:' . User::class],
            'fullname' => ['required', 'string'],
            'gender' => ['required'],
            'birthdate' => ['required', 'date'],
            'photo' => ['required', 'image'],
            'phone' => ['required'],
            'email' => ['required', 'lowercase', 'email', 'unique:' . User::class],
            'password' => ['required', 'confirmed', 'min:4'],
        ]);

        if ($validated) {
            // dd($request->all());
            if($request->hasFile('photo')){
                $photo = time().''.$request->photo->extension();
                $request->photo->move(public_path('image').$photo);
            }
            $user = new User;

            $user->document = $request->document;
            $user->fullname  = $request->fullname;
            $user->gender  = $request->gender;
            $user->birthdate  = $request->birthdate;
            $user->photo  = $photo;
            $user->phone  = $request->phone;
            $user->email  = $request->email;
            $user->password  =bcrypt($request->password);

            // guarda los datos
            if($user->save()){
                return redirect('users')->with('messagge','the user'.$user->fullname.'was successfuly added');
            }

        }
        
    }


    /**
     * el de create
     *
     * @param string $id
     * @return void
     */

     public function create(){
        return view('pets.create');
     }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
