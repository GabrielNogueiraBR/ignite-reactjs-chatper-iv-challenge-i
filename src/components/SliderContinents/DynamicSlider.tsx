import dynamic from "next/dynamic";

const DynamicSlider = dynamic(() => import("./Slider"), {
  loading: () => <p>Loading...</p>,
});

export default DynamicSlider;
