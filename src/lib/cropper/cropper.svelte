<script lang="ts">
    import Cropper from "cropperjs"
    import "cropperjs/dist/cropper.css"
    import { onMount } from "svelte"
    import type {CropperInstance, CropperDefaultProps} from "$lib/cropper/cropper.js";

    export let cropper_props: CropperDefaultProps
    export let image_ref: HTMLImageElement | null = null
    export let cropper: CropperInstance | null

    export let src: string
    export let alt: string = "cropper_image"
    export let crossorigin: "anonymous" | "use-credentials" | undefined = undefined

    // on `src` change, reset image
    $: {
        cropper?.reset().clear().replace(src)
    }

    export let style: string = ""
    let wrapper_class: string = ""
    export {wrapper_class as class}

    onMount(() => {
        cropper = image_ref
            ? new Cropper(image_ref, {
                ...cropper_props,
                ready: event => {
                    const cropper = event.currentTarget.cropper

                    cropper.zoomTo(cropper_props.zoomTo || 0)
                    cropper.scaleY(cropper_props.scaleY || 1)
                    cropper.scaleX(cropper_props.scaleX || 1)
                    cropper.rotateTo(cropper_props.rotateTo || 0)

                    cropper_props.ready && cropper_props.ready(event)
                },
            })
            : null
    })
</script>

<div {style} class={wrapper_class}>
    <img {src} {alt} {crossorigin} bind:this={image_ref} style="max-width: 100%;opacity: 0" />
</div>
