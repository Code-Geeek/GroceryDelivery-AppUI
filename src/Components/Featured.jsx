import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import fruits from "../Assets/fruits.png";
import onion from "../Assets/onion.png";
import chicken from "../Assets/chicken.png";
import seafood from "../Assets/seafood.png";
import tomato from "../Assets/tomato.png";
import { Link } from "react-router-dom";


function Featured() {
  return (
    <>
      <h3 className="text-center mb-5">FEATURED PRODUCTS</h3>
      <div className="d-flex justify-content-between container-fluid">
          <Card style={{ borderRadius: "40px 40px ",width:'280px', height:'350px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ borderRadius: "40px", }}
              sx={{ height: 200 }}
              image={onion}
              title="green iguana"
            />
            <CardContent className="d-flex flex-column justify-content-center align-items-center">
              <Typography gutterBottom variant="h5" component="div">
                Onion
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rate
              </Typography>
              <Link to={'/categories'}  className=" btn-half me-3">
              Shop now! <i class="fa-solid fa-cart-plus"></i>
              </Link>
            </CardContent>
          </Card>
          <Card style={{ borderRadius: "40px 40px ",width:'280px', height:'350px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ borderRadius: "40px" }}
              sx={{ height: 200 }}
              image={chicken}
              title="green iguana"
            />
            <CardContent className="d-flex flex-column justify-content-center align-items-center">
              <Typography gutterBottom variant="h5" component="div">
                Chicken
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rate
              </Typography>
              <Link to={'/categories'} className=" btn-half me-3">
              Shop now! <i class="fa-solid fa-cart-plus"></i>
              </Link>
            </CardContent>
          </Card>
          <Card style={{ borderRadius: "40px 40px ",width:'280px', height:'350px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ borderRadius: "40px" }}
              sx={{ height: 200 }}
              image={tomato}
              title="green iguana"
            />
            <CardContent className="d-flex flex-column justify-content-center align-items-center">
              <Typography gutterBottom variant="h5" component="div">
                Tomato
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rate
              </Typography>
              <Link to={'/categories'} className=" btn-half me-3">
              Shop now! <i class="fa-solid fa-cart-plus"></i>
              </Link>
            </CardContent>
          </Card>
          <Card style={{ borderRadius: "40px 40px ",width:'280px', height:'350px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ borderRadius: "40px" }}
              sx={{ height: 200 }}
              image={seafood}
              title="green iguana"
            />
            <CardContent className="d-flex flex-column justify-content-center align-items-center">
              <Typography gutterBottom variant="h5" component="div">
                Seafood
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rate
              </Typography>
              <Link to={'/categories'} className=" btn-half me-3">
              Shop now!<i class="fa-solid fa-cart-plus"></i>
              </Link>
            </CardContent>
          </Card>
          <Card style={{ borderRadius: "40px 40px ",width:'280px', height:'350px' }} sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ borderRadius: "40px" }}
              sx={{ height: 200 }}
              image={fruits}
              title="green iguana"
            />
            <CardContent className="d-flex flex-column justify-content-center align-items-center">
              <Typography gutterBottom variant="h5" component="div">
                Fruits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rate
              </Typography>
              <Link to={'/categories'} className=" btn-half me-3">
                Shop now! <i class="fa-solid fa-cart-plus"></i>
              </Link>
            </CardContent>
          </Card>
      </div>
      
    </>
  );
}

export default Featured;
