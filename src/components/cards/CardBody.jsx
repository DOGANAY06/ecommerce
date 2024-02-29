import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Button, Select, MenuItem } from "@mui/material"; // Import Button, Select, MenuItem
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "./Card";
import { fetchCharacters } from '../../redux/actions/productsActions';

const CardBody = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  useEffect(() => {
    dispatch(fetchCharacters(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    dispatch(fetchCharacters(category));
  };

  const categorySelect = () => {
    return (
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        onChange={(e) => handleCategorySelect(e.target.value)}
        className="card__category-select"
      >
        {categories.map((category) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    );
  };

  return (
    <div className="card__body">
      <div className="card__category-select-container">
        {categorySelect()}
        <div>
          <h2>Kategorini Seç ve Aramaya Başla</h2>
          <h3>Aradığın Şıklık Tam Burada</h3>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <Card product={product} />
          <Link
            to={`/detail/${product.id}`} 
            state={{ id: product.id }}
          >
            <Button variant="contained" color="primary" size="small">
              Details
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardBody;
