import { Stack, Image, Text } from "@chakra-ui/react";
import { CONDITION, formatPrice } from "../utils";

export default function ProductItem({ product }) {
  const {
    thumbnail,
    title,
    price,
    shipping: { free_shipping },
    currency_id,
    condition,
  } = product;

  return (
    <Stack direction="row" padding={4} borderBottom="1px solid #E2E8F0">
      <Image width="160px" height="160px" src={thumbnail} objectFit="contain" />
      <Stack style={{ marginLeft: 32 }}>
        <Text
          color="rgba(0,0,0,.45)"
          fontSize={14}
          fontWeight={400}
          whiteSpace="pre-wrap"
        >
          {CONDITION[condition]}
        </Text>
        <Text fontSize={20} fontWeight={300}>
          {title}
        </Text>
        <Text fontSize={24} fontWeight={400}>
          {formatPrice(price, currency_id)}
        </Text>
        {free_shipping && (
          <Text fontSize={14} fontWeight={400} color="#00a650">
            Envío gratis
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
