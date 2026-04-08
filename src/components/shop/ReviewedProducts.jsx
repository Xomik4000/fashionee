import { PRODUCTS } from "../../data/products";
import { REVIEWED_PRODUCT_IDS } from "../../constants";

function ReviewedProducts() {
  const reviewed = REVIEWED_PRODUCT_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id),
  ).filter(Boolean);

  return (
    <div className="sidebar-item">
      <h4 className="sidebar-title">Reviewed By You</h4>
      <div className="sidebar-content">
        <div className="reviewed-products">
          {reviewed.map((p) => (
            <div className="product" key={p.id}>
              <div className="image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="info">
                <p className="name">{p.name}</p>
                <div className="price">
                  <div className="current-price">${p.price}</div>
                  {p.oldPrice != null && (
                    <div className="old-price">${p.oldPrice}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewedProducts;