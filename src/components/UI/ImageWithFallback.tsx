"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc: string;
}

export default function ImageWithFallback(props: ImageWithFallbackProps) {
    const { src, fallbackSrc, ...rest } = props
    const [imgSrc, setImgSrc] = useState(src)
    return (
        <Image
            src={imgSrc}
            onError={() => setImgSrc(fallbackSrc)}
            {...rest}
            alt={props.alt}
        />

    )
}
