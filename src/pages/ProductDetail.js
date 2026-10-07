import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
    </div>
  );
}

export default ProductDetail;
