import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 1,
      title: "Water",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: 2,
      title: "Cola 2",
      price: 3,
      description: "Cola - amazing!",
    },
    {
      id: 3,
      title: "KDD",
      price: 1,
      description: "KDD Juice - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
