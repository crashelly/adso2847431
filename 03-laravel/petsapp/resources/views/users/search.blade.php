@foreach ($users as $user )
{{ $user->fullname }} - {{ $user->email }}
@endforeach