import { Badge } from "react-bootstrap";

const Text = () => {
  return (
    <div className="text-center mt-1">
      <h1>
        <Badge
          bg="secondary"
          className="w-100 py-5 border-0 mt-0"
          style={{ fontSize: "6rem" }}
        >
          The Generics
        </Badge>
      </h1>
    </div>
  );
};

export default Text;
