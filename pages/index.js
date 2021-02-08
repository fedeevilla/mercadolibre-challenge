import NoResults from "../components/noResults";
import ProductList from "../components/productList";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <NoResults />
      )}
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query.q}`
  );

  const response = await products.json();

  return {
    products: response.results,
  };
};
