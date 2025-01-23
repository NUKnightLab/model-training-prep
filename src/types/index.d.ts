declare module 'image-processing-library' {
    export function resizeImage(inputPath: string, outputPath: string, width: number, height: number): Promise<void>;
}

export interface ImageProcessingOptions {
    inputPath: string;
    outputPath: string;
    width: number;
    height: number;
}

export type ImageFile = {
    name: string;
    path: string;
};