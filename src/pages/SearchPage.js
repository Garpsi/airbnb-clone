import { Button } from "@mui/material";
import React from "react";
import SearchResult from "../components/ui/SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult 
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
      location='Private room in center of London'
      title='Stay at this spacious Edwardian House'
      description='1 guest · 1 bedroom · 1 bed · 1 bathroom'
      star={4.73}
      price='£30 / night'
      total='£117 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/a9edb0f1-c8e7-4b31-8e23-be5310ffd192.jpg?im_w=720'
      location='8-10 minutes on foot to Paddington'
      title='Deluxe XL Double Bedroom FullyServiced'
      description='2 guests · 1 bedroom · 1 bed · 1.5 shared bathrooms'
      star={4.64}
      price='£42 / night'
      total='£400 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/d4a56675-6d51-48f2-86ab-41a4b6c5d0fd.jpg?im_w=960'
      location='The premises is few minutes to Portobello Market'
      title='A fantastic unique flat offering views over the Grand Union Canal'
      description='3 guests · 2 bedroom · 2 bed · 1.5 shared bathrooms'
      star={4.73}
      price='£140 / night'
      total='£1188 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/61ccdfe1-e3b2-43a9-b2c0-1335052ada4c.jpg?im_w=960'
      location='Nice quiet village in the heart of London'
      title='Beautiful fully renovated 1 bedroom apartment'
      description='4 guests · 1 bedroom · 2 bed · 1 bathroom'
      star={5.0}
      price='£107 / night'
      total='£906 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/miso/Hosting-665485313371912014/original/31092aa2-c2e5-4058-902f-bdd4f7224b62.jpeg?im_w=960'
      location='Located in Primrose/Camden'
      title='Luxury 3 Bedroom House'
      description='7 guests · 4 bedrooms · 4 bed · 2 bathrooms'
      star={4.62}
      price='£255 / night'
      total='£2,087 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/miso/Hosting-547676698246135870/original/b3fde707-6f18-4106-9550-e250910bcb5c.jpeg?im_w=960'
      location='Located in Aldgate East'
      title='Fully serviced two bedroom apartment'
      description='5 guests · 3 bedroom · 3 bed · 3 bathrooms'
      star={4.75}
      price='£304 / night'
      total='£2,208 total'
      />

      <SearchResult 
      img='https://a0.muscache.com/im/pictures/miso/Hosting-53780110/original/e48d5a36-c664-4591-a3c6-d393dd1b709e.jpeg?im_w=960'
      location='Near Greenwich Park, Blackheath and the O2 Arena'
      title='Relax with the whole family at this peaceful top floor flat'
      description='6 guests · 2 bedroom · 3 bed · 2 bathrooms'
      star={4.81}
      price='£166 / night'
      total='£1,359 total'
      />
    </div>
  );
};

export default SearchPage;
