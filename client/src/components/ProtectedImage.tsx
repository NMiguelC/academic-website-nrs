import type { CSSProperties, ImgHTMLAttributes, MouseEvent } from "react";

type ProtectedImageProps = ImgHTMLAttributes<HTMLImageElement>;

function preventImageAction(event: MouseEvent<HTMLElement>) {
  event.preventDefault();
}

export default function ProtectedImage({ className = "", ...props }: ProtectedImageProps) {
  return (
    <span
      className="block select-none"
      onContextMenu={preventImageAction}
      onDragStart={preventImageAction}
      onMouseDown={event => event.button === 0 && event.preventDefault()}
      onDoubleClick={preventImageAction}
      aria-label={props.alt}
    >
      <img
        {...props}
        draggable={false}
        className={`pointer-events-none block select-none ${className}`}
        style={{
          ...props.style,
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitTouchCallout: "none",
        } as unknown as CSSProperties}
      />
    </span>
  );
}
