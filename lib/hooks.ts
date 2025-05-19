import { useCallback } from "react";
import { scrollToElement } from "./utils";

/**
 * A custom React hook that provides a callback function for smooth scrolling to elements
 * when clicking on anchor links with hash fragments.
 *
 * @returns A callback function that handles smooth scrolling
 */
export const useScrollToElement = () => {
  const handleScroll = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      item: { href: string; title: string },
      callback?: () => void
    ) => {
      if (item.href.startsWith("#")) {
        e.preventDefault();
        const id = item.href.substring(1);
        scrollToElement(id);

        // Execute optional callback after scrolling (e.g., closing a menu)
        if (callback) {
          callback();
        }
      }
    },
    []
  );

  return handleScroll;
};
