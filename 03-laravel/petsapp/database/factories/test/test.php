<?php 

function downloadImage($url, $directory)
{
    // esto lo que hace es valida que el directoriop tenga permiso y si no lo crea
    if (!is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    // lo qwue hace es guardar le contenido de la imagen
    $imageContent = file_get_contents($url);

    $filename = $directory . '/avatar_' . uniqid() . '.jpg'; //crear un unico nombre para este archivo


    // esta si es la fuincion que guarda la imagen
    file_put_contents($filename, $imageContent);

    // aqui es donde se obtiene la verdadera ruta del archivo
    $imagePath = realpath($filename);

    return $imagePath;
}

// Ejemplo de uso
$url = 'https://fotos.perfil.com/2022/12/15/chevrolet-corsa-1473562.jpg';
$directory = 'C:\Users\buitr\OneDrive\Documentos\GITHUB\adso2847431\03-laravel\petsapp\public\images';
$imagePath = downloadImage($url, $directory);

echo "Image saved at: " . $imagePath;
?>