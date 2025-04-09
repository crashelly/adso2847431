<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informacion de la mascota</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    @foreach ($pets as $pet)
        <!-- Open the modal using ID.showModal() method -->
        <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Informacion de la mascota</h3>
                <p class="py-4"></p>
                <div class="modal-action">
                    <div class="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img src="{{ asset('images/' . $pet->image) }}"
                                alt=" {{ $pet->name }}" width="130px" height="130px" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {{ $pet->name }}
                                <div class="badge badge-secondary">{{ $pet->kind }}</div>
                            </h2>
                 
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Fashion</div>
                                <div class="badge badge-outline">Products</div>
                            </div>
                        </div>
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn">Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>


    @endforeach
</body>
<script>
    my_modal_1.showModal();
</script>
</html>