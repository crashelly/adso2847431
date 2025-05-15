{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}


@extends('layouts.app')
@section('title', 'Login - PetsApp')
@section('content')
    @include('layouts.navbar')
    <form method="post" action="{{ route('login') }}">
        @csrf
        <fieldset class="fieldset flex flex-row  w-sm bg-base-200 border border-base-300 p-4 rounded-box">
                <h1 class="text-2xl text-center flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg> 
                    Register
                </h1>
                @if (count($errors->all()) > 0)
                    <div class="flex flex-col gap-1 my-4">
                        @foreach ($errors->all() as $message)
                            <div class="badge badge-error">
                                <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><rect x="1.972" y="11" width="20.056" height="2" transform="translate(-4.971 12) rotate(-45)" fill="currentColor" stroke-width="0"></rect><path d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z" stroke-width="0" fill="currentColor"></path></g></svg>
                                {{ $message }}
                            </div>
                        @endforeach
                    </div>
                @endif
                <label class="fieldset-label">document</label>
                <input type="number" name="document" class="input rounded-full" placeholder="78453422" />
                
                <label class="fieldset-label">fullname</label>
                <input type="text" name="fullname" class="input rounded-full" placeholder="Jose Rodriguez Pedraza" />
                
                
                <label class="fieldset-label">gender</label>
                <!-- <input type="text" name="gender" class="input rounded-full" placeholder="Password" /> -->
                <select name="geneder" class="select"  id="gender">
                    <option value="">Elige una</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                
                <label class="fieldset-label">birthdate</label>
                <input type="date" name="birthdate" class="input rounded-full" placeholder="Password" />
                
                
                <label class="fieldset-label">phone</label>
                <input type="number" name="phone" class="input rounded-full" placeholder="3445512312" />
                
                
                <label class="fieldset-label">Email</label>
                <input type="emaul" name="email" class="input rounded-full" placeholder="prueba@gmail.com" />
                
                
                <label class="fieldset-label">Password</label>
                <input type="text" name="password" class="input rounded-full" placeholder="Password" />
                
                
                <label class="fieldset-label">Password</label>
                <input type="text" name="password" class="input rounded-full" placeholder="Password" />
                

                <button class="btn mt-4 rounded-full text-white bg-cyan-800">Register</button>
        </fieldset>
    </form>
@endsection
