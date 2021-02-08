import NoResults from "../components/noResults";
import ProductList from "../components/productList";
import Head from "next/head";
export default function Home({ products }) {
  return (
    <>
      <Head>
        <meta content="Mercado Libre - Nextjs Challenge" name="title" />
        <meta
          content="La comunidad de compra y venta online más grande de América Latina."
          name="description"
        />

        <meta content="website" property="og:type" />
        <meta
          property="og:url"
          content="https://mercadolibre-challenge.vercel.app/"
        />
        <meta content="Mercado Libre - Nextjs Challenge" property="og:title" />
        <meta
          content="La comunidad de compra y venta online más grande de América Latina."
          property="og:description"
        />
        <meta
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png"
          property="og:image"
        />

        <meta content="summary_large_image" property="twitter:card" />
        <meta
          content="Mercado Libre - Nextjs Challenge"
          property="twitter:title"
        />
        <meta
          content="La comunidad de compra y venta online más grande de América Latina."
          property="twitter:description"
        />
        <meta
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png"
          property="twitter:image"
        />
        <meta
          property="twitter:url"
          content="https://mercadolibre-challenge.vercel.app/"
        />
      </Head>
      <div>
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <NoResults />
        )}
      </div>
    </>
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
