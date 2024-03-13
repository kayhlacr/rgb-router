import { useParams } from "react-router";

export default function DynamicColorPage() {
  const params = useParams();
  const hexColor = "#" + params.hexColor;

  return (
    <div className="page" style={{ backgroundColor: hexColor }}>
      {hexColor}
    </div>
  );
}
