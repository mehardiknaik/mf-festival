import dayjs from "dayjs";
import { createPortal } from "react-dom";
import customParseFormat from "dayjs/plugin/customParseFormat";
import config from "./config";
import isTodayInRange from "./util/isTodayInRange";
import { Suspense } from "react";

dayjs.extend(customParseFormat);

function App() {
  const { Component = () => null } =
    config.find(({ from, to, today }) => isTodayInRange(from, to, today)) || {};

  return createPortal(
    <Suspense>
      <Component />
    </Suspense>,
    document.querySelector("body")
  );
}

export default App;
