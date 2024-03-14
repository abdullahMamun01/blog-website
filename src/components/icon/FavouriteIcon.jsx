import React, { useState } from "react";
import HeartFilled from '../../assets/icons/heart-filled.svg'
import Heart from '../../assets/icons/heart.svg'

const FavouriteIcon = ({ isFavourite }) => {
  return (
    isFavourite ? <img src={HeartFilled} alt="" /> : <img src={Heart} alt="" />
  );
};

export default FavouriteIcon;
