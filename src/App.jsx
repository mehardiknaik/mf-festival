import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import config from "./config";
import isTodayInRange from "./util/isTodayInRange";

dayjs.extend(customParseFormat);

function App() {
  const { Component = () => null } =
    config.find((x) => isTodayInRange(x.from, x.to)) || {};

  return <Component />;
}

export default App;
