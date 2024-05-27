# `SvelteCropper`

CropperJS component for Svelte.

## Example

```svelte
<script lang="ts">
    import { Cropper, type CropperInstance, type CropperDefaultProps } from "svelte-cropper"
    
    let cropper: CropperInstance | null = null
    
    let image_src = "https://svelte-cropper.vercel.app/ok.jpg"
    
    const cropper_props: CropperDefaultProps = {
        viewMode: 2, // necessary,
        // optional
        dragMode: "crop",
        initialAspectRatio: 1 // not reactive as cropper initializes on component mount
    }
    
</script>

<Cropper bind:cropper src={image_src} {cropper_props}/>
```

[More examples](https://github.com/dehwyy/svelte-cropper/blob/master/src/routes)

## Demo

* [SvelteCropper](https://svelte-cropper.vercel.app/)
* [CropperJS](https://fengyuanchen.github.io/cropperjs/)

## Instalation

```shell
pnpm add svelte-cropper
```

## Options

* [CropperJS Docs](https://github.com/fengyuanchen/cropperjs#options)
