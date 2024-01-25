import { Suspense, lazy } from "react";

// import FirstMessage from ;
const FirstMessage = lazy(() => import("./components/FirstMessage"));
const RamMandir = lazy(() => import("./components/RamMandir"));
const RepublicDay = lazy(() => import("./components/RepublicDay"));

const config = [
  {
    from: "16 Jan 11:59 pm",
    to: "17 Jan 11:59 pm",
    //today: "18 Jan 2:00 pm",
    Component: FirstMessage,
  },
  {
    from: "17 Jan 11:59 pm",
    to: "22 Jan 11:59 pm",
    //today: "18 Jan 2:00 pm",
    Component: RamMandir,
  },
  {
    from: "24 Jan 11:59 pm",
    to: "26 Jan 11:59 pm",
    //today: "18 Jan 2:00 pm",
    Component: RepublicDay,
  },
];
export default config;
