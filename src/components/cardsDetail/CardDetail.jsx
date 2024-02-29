import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from '../../redux/actions/productsDetailsActions';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const CardDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productsDetail.productsDetail);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);


  if (!productDetails) {
    return <div>Ürünü yükleyemiyoruz...</div>;
  }

  const { title, image, description,rating} = productDetails;


  return (
    <Card>
      <h2>{title}</h2>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={{ height: 250,  width:200}} // Adjust height as needed
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Rating value={rating?.rate} readOnly precision={0.5} />
      </CardContent>
    </Card>
  );
};

export default CardDetail;

