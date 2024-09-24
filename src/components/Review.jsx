import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ReviewCard img={img1} name="Sophia Azura" text=" The food was served hot and it ws so satisfying to eat. Ms Siti from Nex pizza hut outlet was awesome. Will come back with my family again ! " />
        <ReviewCard img={img2} name="John Deo" text=" Fresh and Delicious Pizza" />
        <ReviewCard img={img3} name="Victoria Zoe" text=" Affordable Pizzas " />
      </div>
    </div>
  );
};

export default Review;