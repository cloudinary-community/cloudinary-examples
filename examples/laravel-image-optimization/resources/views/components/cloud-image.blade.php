@php
    echo cloudinary()
        ->getImageTag($publicId ?? '')
        ->scale($width ?? '', $height ?? '')
        ->format($format ?? 'auto')
        ->quality($quality ?? 'auto')
        ->serialize();
@endphp
