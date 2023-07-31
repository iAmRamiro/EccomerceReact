import Title from "../../common/title/Title";
import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Nosotros = () => {
  return (
    <Box sx={{ textAlign: "center" }} maxWidth="xl" margin="0 auto">
      <Title titulo={"Sobre Nosotros"} />
      <Grid container>
        <Grid item xs={12} md={6} margin="0 auto">
          <Box
            sx={{
              backgroundImage:
                "url(https://res.cloudinary.com/dlncijm0v/image/upload/v1688828150/nosotros_wbrn5y.jpg)",
              backgroundPosition: "center",
              width: { xs: "300px", sm: "600px" },
              height: { xs: "300px", sm: "600px" },
              backgroundSize: "cover",
              objectFit: "contain",
              margin: "0 auto",
              marginTop: "50px",
              borderRadius: "10px",
            }}
          ></Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <h2 style={{ fontSize: "30px", fontFamily: "monospace" }}>
            WORLD FITNESS
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            tempore accusantium iusto debitis placeat voluptates dignissimos,
            sapiente explicabo ratione perferendis sunt ex ipsam quia
            repudiandae voluptatibus sit blanditiis adipisci perspiciatis. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, tempore
            accusantium iusto debitis placeat voluptates dignissimos, sapiente
            explicabo ratione perferendis sunt ex ipsam quia repudiandae
            voluptatibus sit blanditiis adipisci perspiciatis.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            tempore accusantium iusto debitis placeat voluptates dignissimos,
            sapiente explicabo ratione perferendis sunt ex ipsam quia
            repudiandae voluptatibus sit blanditiis adipisci perspiciatis. Lorem
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.185536782484!2d-58.40684421112083!3d-34.59946958753098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca93c6b9ba85%3A0xd75c0d1e1ff3643a!2sWorld%20Fitness!5e0!3m2!1ses-419!2sar!4v1688829267372!5m2!1ses-419!2sar"
            width="600"
            height="300"
            loading="lazy"
            style={{ borderRadius: "15px" }}
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nosotros;
