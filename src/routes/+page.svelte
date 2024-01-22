<script lang="ts">
    import Cropper from "$lib/cropper/cropper.svelte"
    import type {CropperInstance, CropperDefaultProps} from "$lib/cropper/cropper.js";

    let cropper: CropperInstance | null = null
    let image = "/ok.jpg"
    const cropper_props: CropperDefaultProps = {
        viewMode: 2 // required
    }

    // Image modification example
    let scale_x = 1
    let scale_y = 1
    const MirrorHorizontal = () => {
        if (scale_x == 1) {
            cropper?.scaleX(-1)
            scale_x = -1
        } else {
            cropper?.scaleX(1)
            scale_x = 1
        }
    }

    const MirrorVertical = () => {
        if (scale_y == 1) {
            cropper?.scaleY(-1)
            scale_y = -1
        } else {
            cropper?.scaleY(1)
            scale_y = 1
        }
    }


</script>

<main class="page">
    <h1>Svelte-Cropper Example</h1>
    <div class="cropper-wrapper">
        <div style="display: flex; justify-content: space-around; width: 100%">
            <button class="btn" on:click={MirrorHorizontal}>ScaleX -1</button>
            <button class="btn" on:click={MirrorVertical}>ScaleY -1</button>
        </div>
        <Cropper
                bind:cropper
                src={image}
                {cropper_props}
        />
    </div>
</main>

<style>
    .page {
       height: 100vh;
        display: grid;
        place-items: center;
        background-color:hsla(0,100%,50%,1);
        background-image:
                radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
        overflow: hidden;
    }
    .cropper-wrapper {
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
        background-color:hsla(0,100%,50%,1);
        background-image:
                radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%);
        display: flex;
        flex-direction: column;
        gap: 1rem 0;
    }
    .btn {
        background: #3b82f6;
        padding: 0.5rem 1rem;
        border: 1px solid white;
        border-radius: 2rem;
        cursor: pointer;
        color: white;
        outline: none;
        font-size: 20px;
    }
    h1 {
        color: white;
        font-size: 36px;
        font-family: Consolas,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        text-decoration: underline 2px;
    }
</style>