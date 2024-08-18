declare module "react-shimmer-effects" {
  import * as React from "react";

  export interface ShimmerSimpleGalleryProps {
    className?: string;
    card?: boolean;
    imageHeight?: number;
    caption?: boolean;
  }

  //add other components as needed
  export const ShimmerSimpleGallery: React.FC<ShimmerSimpleGalleryProps>;
  export const ShimmerSimpleCard: React.FC<ShimmerSimpleCardProps>;
  export const ShimmerSimpleImage: React.FC<ShimmerSimpleImageProps>;
  export const ShimmerSimpleText: React.FC<ShimmerSimpleTextProps>;
  export const ShimmerSimpleVideo: React.FC<ShimmerSimpleVideoProps>;
  export const ShimmerSimpleCircle: React.FC<ShimmerSimpleCircleProps>;
  export const ShimmerSimpleLine: React.FC<ShimmerSimpleLineProps>;
  export const ShimmerSimpleSquare: React.FC<ShimmerSimpleSquareProps>;
  export const ShimmerSimpleRectangle: React.FC<ShimmerSimpleRectangleProps>;
  export const ShimmerSimpleCircle: React.FC<ShimmerSimpleCircleProps>;
  export const ShimmerSimpleLine: React.FC<ShimmerSimpleLineProps>;
  export const ShimmerTitle: React.FC<ShimmerTitleProps>;
}
