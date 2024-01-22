import CropperJS from "cropperjs";

export type CropperInstance = CropperJS
export interface CropperDefaultProps extends CropperJS.Options<HTMLImageElement> {
    scaleX?: number
    scaleY?: number
    zoomTo?: number
    rotateTo?: number
}