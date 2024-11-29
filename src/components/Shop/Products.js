import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Water",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Cola 2",
    price: 3,
    description: "Cola - amazing!",
  },
  {
    id: "p3",
    title: "KDD",
    price: 1,
    description: "KDD Juice - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
