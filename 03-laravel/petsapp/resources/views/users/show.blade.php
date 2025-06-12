@extends('layouts.app')
@section('title', 'Create User')

@section('content')
    @include('layouts.navbar')


    <h1 class="text-3xl pt-30 flex gap-2 items-center text-white font-bold mb-10 pb-2 border-b-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Show User
    </h1>
    <div class="breadcrumbs text-sm text-white">
        <ul>
            <li><a><a href="{{ url('users') }}">User Module</a></a></li>
            <li><a>Show user</a></li>

        </ul>
    </div>
    <ul class="list bg-base-100 rounded-box shadow-md">
        <!-- imagen  -->
        <li class="list-row">
            <div class="flex gap-4 mx-auto ml-15 items-center">
                <div id="upload"
                    class="mask mask-squircle w-36 cursor-pointer hover:scale-110 hover:border-gray-500 border   transition-transform">
                    <img id="preview" src="{{ asset('images/'.$user->photo) }}" />
                    <!-- <svg width="64px" class="mx-auto"  height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> -->
                   
                </div>
            </div>

        </li>
        <!-- documento -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">Document</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->document }}</div>
            </div>
        </li>

        <!-- nombre -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">FullName</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->fullname }}</div>
            </div>
        </li>
        <!-- genero  -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">Gender</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->gender }}</div>
            </div>
        </li>
        <!-- fecha de nacimiento -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">Nombre</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->birthdate }}</div>
            </div>
        </li>
        <!-- Email -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">Email</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->email }}</div>
            </div>
        </li>
        <!-- phone -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div class="w-24">phone</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->phone }}</div>
            </div>
        </li>

        <!-- role  -->
        <li class="list-row">
            <div class="flex gap-4 items-center">
                <div>Role</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ $user->role }}</div>
            </div>
        </li>





    </ul>





@endsection
@section('js')
    <script>
        // const upload = document.querySelector('#upload');
        // const photo = document.querySelector('#photo');
        // const preview = document.querySelector('#preview');

        // const photo = document.getElementById('photo');
        // const upload = document.getElementById('upload');
        // const preview = document.getElementById('preview');

        upload.addEventListener('click', function (e) {
            // upload.click();
            // upload.click = true;
            // alert('clickeamos')
            photo.click();
        });

        photo.addEventListener('change', function (e) {
            preview.src = window.URL.createObjectURL(this.files[0]);
        })
    </script>
@endsection