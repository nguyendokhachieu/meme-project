import "./right-content.scss";
import { TabSection01 } from "./TabSection01";
import { TabSection02 } from "./TabSection02";

export default function RightContent() {
  return (
    <div className="inner-content">
      <TabSection01 />
      <TabSection02 />
    </div>
  );
}
