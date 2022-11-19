import { useState, useEffect } from "react";

export default function useElementDimensions(ref) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
      console.log(ref.current.offsetWidth, ref.current.offsetHeight)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return [width, height];
}
