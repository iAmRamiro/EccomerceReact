import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EAEAF1",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "60ch",
    },
  },
}));

export default function SearchBarNav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchButtonClick();
    }
  };

  const handleSearchButtonClick = () => {
    // Redireccionar a la ruta de búsqueda con los parámetros de búsqueda
    navigate(`/busqueda?search=${encodeURIComponent(search)}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#D6D7E3",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-start",
          width: "100%",
          gap: "1rem",
          marginLeft: "1rem",
          padding: "0",
        }}
      >
        <Button
          component={NavLink}
          to="/compras-mayoristas"
          variant="text"
          sx={{ color: "black" }}
        >
          Compras mayoristas
        </Button>
        <Button
          component={NavLink}
          to="/talles"
          variant="text"
          sx={{ color: "black" }}
        >
          Guia de Talles
        </Button>

        <Button
          component={NavLink}
          to="/politica-de-devolucion"
          variant="text"
          sx={{ color: "black" }}
        >
          Politica de devolucion
        </Button>
      </Box>
      <Search>
        <Box display="flex">
          <Button onClick={handleSearchButtonClick}>
            <SearchIcon />
          </Button>
          <StyledInputBase
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            placeholder="Buscar"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Search>
    </Box>
  );
}
