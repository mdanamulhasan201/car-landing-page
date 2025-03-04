import React from "react";
import Image from "next/image";

export default function CustomImage({
  src = "",
  alt = "",
  width = 100,
  height = 100,
  ...props
}) {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      loader={() => src}
      {...props}
    />
  );
}