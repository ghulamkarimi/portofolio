import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsDesktop, setMode } from "../../feature/reducers/modeSlice";

const ResizeHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 820;
      dispatch(setIsDesktop(newIsDesktop));
      dispatch(setMode(newIsDesktop ? "desktop" : "mobile"));
    };

    handleResize(); // Beim ersten Laden direkt ausführen

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return null;
};

export default ResizeHandler;
