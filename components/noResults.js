import { Stack, Image, Text } from "@chakra-ui/react";

export default function NoResults() {
  return (
    <Stack paddingX={20} paddingY={10} background="white" borderRadius={4}>
      <Text fontSize={24}>
        No hay publicaciones que coincidan con tu búsqueda.
      </Text>
      <ul style={{ marginLeft: 20, marginTop: 20 }}>
        <li>
          <Text fontSize={16}>Revisá la ortografía de la palabra.</Text>
        </li>
        <li>
          <Text fontSize={16}>
            Utilizá palabras más genéricas o menos palabras.
          </Text>
        </li>
        <li>
          <Text fontSize={16}>
            Navegá por las categorías para encontrar un producto similar
          </Text>
        </li>
      </ul>
    </Stack>
  );
}
