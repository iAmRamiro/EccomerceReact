import { Box, Container } from "@mui/system";
import Title from "../../common/title/Title";
import React, { useEffect, useState } from "react";
import { Skeleton, Stack } from "@mui/material";

const Busqueda = ({ filteredData, searched, isLoading }) => {
  const skeletons = Array.from(new Array(4), (_, index) => (
    <React.Fragment key={index}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={300} height={280} />
        <Skeleton variant="rounded" width={300} height={40} />
      </Stack>
    </React.Fragment>
  ));

  return (
    <Container maxWidth="xl">
      <Box textAlign="center">
        <Title titulo={"Resultado de la Busqueda"} />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
        gap="20px"
      >
        {isLoading ? (
          skeletons
        ) : filteredData.length > 0 ? (
          searched
        ) : (
          <h3>No se encontraron resultados.</h3>
        )}
      </Box>
    </Container>
  );
};

export default Busqueda;
