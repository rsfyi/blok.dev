"use client";

import { cn } from "@/lib/utils";
import { BrutalistButton } from "@/registry/brutalist/buttons/button";
import { BrutalistRadioGroup } from "./radio-group";

// Brutalist card container
interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export function BrutalistCard({
  children,
  className,
  bgColor = "bg-yellow-300",
}: BrutalistCardProps) {
  return (
    <div
      className={cn(
        "p-6 border-2 border-black relative",
        `before:absolute before:${bgColor} before:top-2 before:left-2 before:w-full before:h-full before:-z-10`,
        className
      )}
    >
      {children}
    </div>
  );
}

// Brutalist product card component
interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  inStock?: boolean;
  sizes?: string[];
  className?: string;
}

export function BrutalistProductCard({
  imageSrc,
  title,
  price,
  inStock = true,
  sizes = ["XS", "S", "M", "L", "XL"],
  className,
}: ProductCardProps) {
  return (
    <div className={cn("flex p-6 font-mono", className)}>
      <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
        <img
          src={imageSrc}
          alt={title}
          className="absolute z-10 inset-0 w-full h-full object-cover rounded-none"
          loading="lazy"
        />
      </div>
      <form className="flex-auto pl-6">
        <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
          <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
            {title}
          </h1>
          <div className="relative text-lg text-white">{price}</div>
          {inStock && (
            <div className="relative uppercase text-teal-400 ml-3">
              In stock
            </div>
          )}
        </div>
        <div className="flex items-baseline my-6">
          <BrutalistRadioGroup
            name="size"
            defaultValue={sizes[0]}
            options={sizes.map((size) => ({
              value: size.toLowerCase(),
              label: size,
            }))}
          />
        </div>
        <div className="flex space-x-2 mb-4 text-sm font-medium">
          <div className="flex space-x-4">
            <BrutalistButton type="submit">Buy now</BrutalistButton>
            <BrutalistButton type="button">Add to bag</BrutalistButton>
          </div>
          <button
            className="flex-none flex items-center justify-center w-12 h-12 text-black"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs leading-6 text-slate-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
}
