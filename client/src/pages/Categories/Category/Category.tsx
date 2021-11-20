import { useParams } from "react-router-dom";

export default function Category() {
  let params = useParams();
  console.log("params", params)
  return <h2>Category: {params.categoryID}</h2>;
}