import { Stack, Image, Input, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.q);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?q=${e.target["query"].value}`);
  };

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <>
      <Head>
        <title>
          {router?.query?.q?.toLocaleUpperCase() || "Mercado Libre"} - Nextjs
          Challenge
        </title>
      </Head>
      <Stack
        backgroundColor="yellow.300"
        direction="row"
        padding={2}
        paddingX={4}
        spacing={6}
      >
        <Link href={query ? `/?q=${query}` : `/`}>
          <a>
            <Image
              height={10}
              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__small@2x.png"
            />
          </a>
        </Link>
        <form
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          onSubmit={handleSubmit}
        >
          <Stack direction="row" spacing={0} width="100%">
            <Input
              placeholder="Buscar productos, marcas y más.."
              backgroundColor="white"
              name="query"
              roundedRight={0}
              onChange={handleChange}
              value={query}
              _focus={{
                border: "none",
              }}
            />
            <IconButton
              aria-label="Search database"
              icon={
                <img src="https://icongr.am/feather/search.svg?size=20&color=#666" />
              }
              roundedLeft={0}
            />
          </Stack>
        </form>
      </Stack>
    </>
  );
};
