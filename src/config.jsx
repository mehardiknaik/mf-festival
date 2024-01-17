import { Suspense, lazy } from "react";

// import FirstMessage from ;
const FirstMessage = lazy(() => import("./components/FirstMessage"));

const config = [
  {
    from: "16 Jan 11:59 pm",
    to: "17 Jan 11:59 pm",
    //today: "18 Jan 2:00 pm",
    Component: FirstMessage,
  },
];
export default config;
