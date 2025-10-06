"use client";

import { useState, useEffect, RefObject } from "react";

type Theme = "light" | "dark";

export function useHeaderTheme(
  sectionRefs: RefObject<HTMLElement | null>[],
  options?: IntersectionObserverInit
): Theme {
  const [activeTheme, setActiveTheme] = useState<Theme>("dark");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme") as Theme;
            if (theme) {
              setActiveTheme(theme);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
        ...options,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs, options]);

  return activeTheme;
}
