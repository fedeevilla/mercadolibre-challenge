import { Box, Stack } from "@chakra-ui/react";
import ProductItem from "./productItem";
import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <Box padding={4} width="100%">
      <Stack
        backgroundColor="white"
        borderRadius={2}
        boxShadow="sm"
        width="100%"
      >
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <a>
              <ProductItem product={product} />
            </a>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
