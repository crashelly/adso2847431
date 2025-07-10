<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$users = User::all();
        $users = User::paginate(10);
        //$users = User::simplePaginate(10);
        //dd($users->toArray()); //Dump & Die
        return view('users.index')->with('users', $users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('users.create');
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
            if ($request->hasFile('photo')) {
                $photo = time() . '' . $request->photo->extension();
                $request->photo->move(public_path('image') . $photo);
            }
            $user = new User;

            $user->document = $request->document;
            $user->fullname = $request->fullname;
            $user->gender = $request->gender;
            $user->birthdate = $request->birthdate;
            $user->photo = $photo;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);

            // guarda los datos
            if ($user->save()) {
                return redirect('users')->with('messagge', 'the user' . $user->fullname . 'was successfuly added');
            }

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        // dd($user->toArray());
        return view('users.show')->with('user', $user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'document' => ['required', 'numeric', 'unique:users,document,' . $user->id],
            'fullname' => ['required', 'string'],
            'gender' => ['required'],
            'birthdate' => ['required', 'date'],
            'photo' => ['nullable', 'image'],
            'phone' => ['required'],
            'email' => ['required', 'lowercase', 'email', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'confirmed', 'min:4'],
        ]);

        // Si se subió nueva foto, reemplazar
        if ($request->hasFile('photo')) {
            if ($user->photo && file_exists(public_path('images/' . $user->photo))) {
                unlink(public_path('images/' . $user->photo));
            }
            $filename = time() . '.' . $request->photo->extension();
            $request->photo->move(public_path('images'), $filename);
            $user->photo = $filename;
        }

        // Resto de campos
        $user->document = $request->document;
        $user->fullname = $request->fullname;
        $user->gender = $request->gender;
        $user->birthdate = $request->birthdate;
        $user->phone = $request->phone;
        $user->email = $request->email;

        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }

        $user->save();

        return redirect()->route('users.index')->with('message', 'Usuario actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {
            // dd($user);
            if ($user->delete()) {
                # code...
                return redirect('users')->with('messagge', 'The user ' . $user->fullname . ' was successfully deleted');
            } else {
                throw new \Exception('Failed to delete user.');
            }
        } catch (\Throwable $th) {
            //  return redirect()->route('users.index')->with('mensagge', 'Failed to delete user.');
        }
    }

    
    public function search(Request $request)
    {
        // $users = User::names($request->q)->paginate(10);
        // return view('users.search')->with('users',$users);
        $q = $request->input('q');
        $users = User::where('fullname', 'LIKE', "%{$q}%")
            // ->orWhere('kind', 'LIKE', "%{$q}%")
            ->get();
            
        return view('users.search')->with('users', $users);


    }
}
