import React from "react";

import { Popover, PopoverProps } from "react-tiny-popover";
import "./Dropdown.css";

export const Dropdown = React.forwardRef<
  HTMLButtonElement | HTMLInputElement,
  PopoverProps
>(
  (
    {
      isOpen,
      children,
      content,
      positions,
      align,
      padding,
      reposition,
      parentElement,
      boundaryElement,
      containerClassName,
      containerStyle,
      contentLocation,
      boundaryInset,
      onClickOutside,
    },
    ref
  ) => {
    const classes = ["dropdown"];

    if (containerClassName) {
      classes.push(containerClassName);
    }

    return (
      <Popover
        isOpen={isOpen}
        content={content}
        positions={positions}
        align={align}
        padding={padding || 4}
        reposition={reposition}
        parentElement={parentElement}
        boundaryElement={boundaryElement}
        containerClassName={classes.join(" ")}
        containerStyle={containerStyle}
        contentLocation={contentLocation}
        boundaryInset={boundaryInset}
        onClickOutside={onClickOutside}
        ref={ref}
      >
        {children}
      </Popover>
    );
  }
);

export default Dropdown;
