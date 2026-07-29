import { ArrowDown, ArrowRight } from "lucide-react";

export function TransformationConnector() {
  return (
    <span className="case-transformation-connector" aria-hidden="true">
      <ArrowRight className="case-transformation-connector__desktop" size={21} />
      <ArrowDown className="case-transformation-connector__mobile" size={21} />
    </span>
  );
}
