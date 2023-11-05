'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ProductType } from '@/types/ProductType';

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};
export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  const imageBlur = loading
    ? `scale-110 blur-3xl grayscale`
    : `scale-100 blur-0 grayscale-0`;
  const imageClasses = `object-cover ${imageBlur}`;

  if (fill) {
    return (
      <Image
        src={product.image}
        fill
        alt={product.title}
        className={imageClasses}
        onLoadingComplete={() => setLoading(false)}
      />
    );
  }

  return (
    <Image
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className={imageClasses}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
