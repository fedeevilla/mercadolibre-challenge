import Head from "next/head";
import {
  Stack,
  Box,
  Text,
  Image,
  Table,
  Tr,
  Td,
  Tbody,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CONDITION, formatPrice } from "../../utils";
import NoResults from "../../components/noResults";

export default function ProductDetail({ product }) {
  if (!product.id) {
    return <NoResults />;
  }

  const {
    id,
    thumbnail,
    title,
    price,
    condition,
    sold_quantity,
    shipping: { free_shipping },
    attributes,
    pictures,
    currency_id,
  } = product;

  const [selectedImage, setSelectedImage] = useState(pictures[0].url);

  const url = `https://mercadolibre-challenge.vercel.app/product/${id}`;
  const description = `Compralo en Mercado Libre a ${formatPrice(
    price,
    currency_id
  )} - Pagá en cuotas - Envío gratis a todo el país. Encontrá más productos en nuestra web.`;

  return (
    <>
      <Head>
        <title>{title} - Nextjs Challenge</title>
        <meta content={title} name="title" />
        <meta content={description} name="description" />

        <meta content="website" property="og:type" />
        <meta property="og:url" content={url} />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={thumbnail} property="og:image" />

        <meta content="summary_large_image" property="twitter:card" />
        <meta content={title} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta content={thumbnail} property="twitter:image" />
        <meta property="twitter:url" content={url} />
      </Head>
      <Box paddingX={32} paddingY={8} width="100%">
        <Stack background="white" padding={4}>
          <Stack direction="row">
            <Stack
              width="10%"
              minWidth="70px"
              direction="column"
              maxHeight="400px"
              overflow="scroll"
              alignItems="center"
            >
              {pictures.map(({ id, url }) => (
                <Image
                  src={url}
                  key={id}
                  width="60px"
                  height="60px"
                  objectFit="contain"
                  padding={1}
                  borderRadius={4}
                  border={
                    selectedImage === url
                      ? "2px solid #3483fa"
                      : "1px solid rgba(0,0,0,.25)"
                  }
                  _hover={{
                    border: "2px solid #3483fa",
                    cursor: "pointer",
                  }}
                  onMouseOver={() => setSelectedImage(url)}
                />
              ))}
            </Stack>
            <Stack width="70%" flexDirection="row" justifyContent="center">
              <Image
                width="400px"
                height="400px"
                src={selectedImage}
                objectFit="contain"
              />
            </Stack>
            <Stack
              width="30%"
              maxWidth={400}
              borderRadius={8}
              border="1px solid rgba(0,0,0,.1)"
              padding={4}
            >
              <Text
                color="rgba(0,0,0,.45)"
                fontSize={14}
                fontWeight={400}
                whiteSpace="pre-wrap"
              >
                {`${CONDITION[condition]} | ${sold_quantity} vendidos`}
              </Text>
              <Text
                color="rgba(0,0,0,.8)"
                fontSize={22}
                fontWeight={600}
                lineHeight="1.18"
                wordBreak="break-word"
              >
                {title}
              </Text>
              <Text color="rgba(0,0,0,.8)" fontSize={36} fontWeight={300}>
                {formatPrice(price, currency_id)}
              </Text>
              <Text fontSize={14}>
                en 12x {formatPrice(price / 12, currency_id)}
              </Text>
              <Text fontSize={14} color="#3483fa">
                Ver los medios de pago
              </Text>
              {free_shipping && (
                <Text color="#00a650" fontSize={16}>
                  Envío gratis
                </Text>
              )}
              <Button
                width="100%"
                style={{ marginTop: 32 }}
                background="#3483fa"
                color="white"
                fontSize={16}
                _hover={{
                  background: "#2968c8",
                }}
                _focus={{ border: "none" }}
              >
                Comprar ahora
              </Button>
              <Button
                width="100%"
                background="rgba(65,137,230,.15)"
                color="#3483fa"
                fontSize={16}
                _hover={{
                  background: "rgba(65,137,230,.2)",
                }}
                _focus={{ border: "none" }}
              >
                Agregar al carrito
              </Button>
            </Stack>
          </Stack>
          <Stack style={{ marginTop: 40, marginLeft: 20 }} maxWidth="60%">
            <Text fontSize={24} fontWeight={400}>
              Características principales
            </Text>
            <Table variant="simple">
              <Tbody>
                {attributes.map(({ id, name, value_name }) => (
                  <Tr key={id}>
                    <Td>{name}</Td>
                    <Td>{value_name || "-"}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

ProductDetail.getInitialProps = async ({ query }) => {
  const product = await fetch(`https://api.mercadolibre.com/items/${query.id}`);
  const response = await product.json();

  return {
    product: response,
  };
};
