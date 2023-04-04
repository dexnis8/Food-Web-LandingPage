"use strict";

//Selectors
const searchInput = document.querySelector(".search-field");
const searchBtn = document.querySelector(".search-btn");
const searchIcon = document.querySelector(".search-icon");
const howItWorksContainer = document.querySelector(".how-it-works .container");
const flashSalesContainer = document.querySelector(".flash-sales .container");
const popularItemsContainer = document.querySelector(
  ".popular-items .container .popular-items-cards"
);
const featuredRestaurantsContainer = document.querySelector(
  ".featured-restaurants .container"
);
const searchFoodContainer = document.querySelector(
  ".search-by_food .container .foods-container"
);
console.log(howItWorksContainer);

//functions

const hideAndDisplay = (show, hide) => {
  show.classList.remove("d-none");
  show.style.display = "block";
  show.classList.replace("no-animate", "animate1");
  hide.classList.add("d-none");
  hide.classList.add("animate2");
};

//Events
searchBtn.addEventListener("click", () => hideAndDisplay(searchInput));
searchIcon.addEventListener("click", () =>
  hideAndDisplay(searchBtn, searchInput)
);

const pageData = {
  flashSalesData: [
    {
      id: 1,
      cardImage: "./assets/img/Image (1).svg",
      percentageDiscount: 15,
      title: "GreysVage",
      daysRemaining: 6,
    },
    {
      id: 2,
      cardImage: "./assets/img/Image (3).svg",
      percentageDiscount: 25,
      title: "GreysVage",
      daysRemaining: 7,
    },
    {
      id: 3,
      cardImage: "./assets/img/Image (4).svg",
      percentageDiscount: 20,
      title: "GreysVage",
      daysRemaining: 8,
    },
    {
      id: 4,
      cardImage: "./assets/img/Image (2).svg",
      percentageDiscount: 10,
      title: "GreysVage",
      daysRemaining: 6,
    },
  ],
  howItWorksData: [
    {
      name: "Location",
      image: "./assets/img/Icons-location.svg",
      header: "Select location",
      description: "Choose the location where your food will be delivered.",
    },
    {
      name: "chooseOrder",
      image: "./assets/img/Icons.svg",
      header: "Choose order",
      description: "Check over hundreds of menus to pick your favourite food.",
    },
    {
      name: "payAdvanced",
      image: "./assets/img/Icons (1).svg",
      header: "Pay advanced",
      description:
        "It's quick, safe and simple. Select several methods of payment",
    },
    {
      name: "enjoyMeals",
      image: "./assets/img/Icons (2).svg",
      header: "Enjoy meals",
      description: "Food is made and delivered directly to your home.",
    },
  ],
  popularItemsData: [
    {
      image: "./assets/img/Frame 40.svg",
      name: "Cheese Burger",
      location: "Burger Arena",
      price: 3.88,
    },
    {
      image: "./assets/img/Frame 40 (1).svg",
      name: "Toffe's Cake",
      location: "Top Sticks",
      price: 4.79,
    },
    {
      image: "./assets/img/Frame 40 (2).svg",
      name: "Dancake",
      location: "Cake World",
      price: 1.99,
    },
    {
      image: "./assets/img/Frame 40 (3).svg",
      name: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: 3.55,
    },
    {
      image: "./assets/img/Frame 40.png",
      name: "Thai Soup",
      location: "Foody Man",
      price: 2.79,
    },
    {
      image: "./assets/img/Frame 40 (2).svg",
      name: "Dancake",
      location: "Cake World",
      price: 1.99,
    },
    {
      image: "./assets/img/Frame 40.svg",
      name: "Cheese Burger",
      location: "Burger Arena",
      price: 3.88,
    },
    {
      image: "./assets/img/Frame 40 (1).svg",
      name: "Toffe's Cake",
      location: "Top Sticks",
      price: 4.79,
    },
    {
      image: "./assets/img/Frame 40.svg",
      name: "Cheese Burger",
      location: "Burger Arena",
      price: 3.88,
    },
    {
      image: "./assets/img/Frame 40 (1).svg",
      name: "Toffe's Cake",
      location: "Top Sticks",
      price: 4.79,
    },
    {
      image: "./assets/img/Frame 40 (2).svg",
      name: "Dancake",
      location: "Cake World",
      price: 1.99,
    },
    {
      image: "./assets/img/Frame 40 (3).svg",
      name: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: 3.55,
    },
    {
      image: "./assets/img/Frame 40.png",
      name: "Thai Soup",
      location: "Foody Man",
      price: 2.79,
    },
    {
      image: "./assets/img/Frame 40 (2).svg",
      name: "Dancake",
      location: "Cake World",
      price: 1.99,
    },
    {
      image: "./assets/img/Frame 40.svg",
      name: "Cheese Burger",
      location: "Burger Arena",
      price: 3.88,
    },
    {
      image: "./assets/img/Frame 40 (1).svg",
      name: "Toffe's Cake",
      location: "Top Sticks",
      price: 4.79,
    },
  ],
  featuredRestaurants: [
    {
      percentOff: 20,
      cardImage: "./assets/img/Image (5).svg",
      restaurantImage: "./assets/img/Image (6).svg",
      name: "Foodworld",
      ratings: 46,
      status: "Open tomorrow",
    },
    {
      percentOff: 15,
      cardImage: "./assets/img/Image (8).svg",
      restaurantImage: "./assets/img/Restaruant Logo.jpg",
      name: "Pizzahub",
      ratings: 40,
      status: "Open tomorrow",
    },
    {
      percentOff: 10,
      cardImage: "./assets/img/Image (7).svg",
      restaurantImage: "./assets/img/Restaruant Logo.svg",
      name: "Donuts hut",
      ratings: 20,
      status: "Open Now",
    },

    {
      percentOff: 15,
      cardImage: "./assets/img/Image (9).svg",
      restaurantImage: "./assets/img/Image (10).svg",
      name: "Donuts hut",
      ratings: 50,
      status: "Open Now",
    },
    {
      percentOff: 10,
      cardImage: "./assets/img/Image (11).svg",
      restaurantImage: "./assets/img/Restaruant Logo (1).svg",
      name: "Ruby Tuesdays",
      ratings: 26,
      status: "Open Now",
    },
    {
      percentOff: 25,
      cardImage: "./assets/img/Image (12).svg",
      restaurantImage: "./assets/img/Image (13).svg",
      name: "Kenturkey Fried Chicken",
      ratings: 53,
      status: "Open Now",
    },
    {
      percentOff: 10,
      cardImage: "./assets/img/Image (14).svg",
      restaurantImage: "./assets/img/red.png",
      name: "Red Square",
      ratings: 45,
      status: "Open Now",
    },
    {
      percentOff: 10,
      cardImage: "./assets/img/Image (15).svg",
      restaurantImage: "./assets/img/Image (16).svg",
      name: "Taco Bell",
      ratings: 35,
      status: "Open tomorrow",
    },
  ],
  searchFoodData: [
    {
      foodImage: "./assets/img/Image (17).svg",
      foodName: "Pizza",
    },
    {
      foodImage: "./assets/img/Image (18).svg",
      foodName: "Burger",
    },
    {
      foodImage: "./assets/img/Image (19).svg",
      foodName: "Noodles",
    },
    {
      foodImage: "./assets/img/Image (20).svg",
      foodName: "Sub-sandwitch",
    },
    {
      foodImage: "./assets/img/Image (21).svg",
      foodName: "Chowmein",
    },
    {
      foodImage: "./assets/img/Image (22).svg",
      foodName: "Steak",
    },
    {
      foodImage: "./assets/img/Image (17).svg",
      foodName: "Pizza",
    },
    {
      foodImage: "./assets/img/Image (18).svg",
      foodName: "Burger",
    },
    {
      foodImage: "./assets/img/Image (19).svg",
      foodName: "Noodles",
    },
    {
      foodImage: "./assets/img/Image (20).svg",
      foodName: "Sub-sandwitch",
    },
    {
      foodImage: "./assets/img/Image (21).svg",
      foodName: "Chowmein",
    },
    {
      foodImage: "./assets/img/Image (22).svg",
      foodName: "Steak",
    },
  ],
};

//Displaying Elements

// How it works section
howItWorksContainer.innerHTML = pageData.howItWorksData.map(
  (card) => `
  <div class="how-card">
        <div class="img">
          <img src="${card.image}" alt="Icon">
        </div>
        <div class="desc">
          <span>${card.header}</span>
        </div>
        <div class="description">
          <p>${card.description}</p>
        </div>
      </div>
  `
);

// Flash Sales

flashSalesContainer.innerHTML = pageData.flashSalesData.map(
  (card) => `
<div class="card">
        <div class="card-image">
          <img src="${card.cardImage}" alt="card-img">
          <div class="discount-container">
            <div>
              <span>${card.percentageDiscount}</span>
            </div>
            <div class="percentage">
              <strong>%</strong>
              <strong>off</strong>
            </div>
          </div>
        </div>
        <div class="title">
          <h5>${card.title} </h5>
          <div class="time-off">
            <span>${card.daysRemaining} days Remaining</span>
          </div>
        </div>
      </div>

`
);

// Featured restaurants
featuredRestaurantsContainer.innerHTML = pageData.featuredRestaurants.map(
  (res) => `
<div class="card">
<div class="card-img-percent">
  <div class="card-img">
    <img src="${res.cardImage}" alt="food-img">
  </div>
  <div class="percent-fast">
    <div class="percen-off">
      <img src="./assets/img/Icon (7).svg" alt="icon">
      <div><strong>${res.percentOff}</strong>% <strong>off</strong></div>
    </div>
    <div class="fast">
      <img src="./assets/img/Icon (8).svg" alt="icon">
      <strong>Fast</strong>
    </div>
  </div>

</div>
<div class="title-description d-flex">
  <div class="img">
    <img src="${res.restaurantImage}" alt="descript">
  </div>
  <div class="descript-name">
    <span class="name">${res.name}</span>
    <div class="descript">
      <img src="./assets/img/Icon (9).svg" alt="star icon">
      ${res.ratings}
    </div>
  </div>
</div>
<div class="status">
  <span class="${res.status === "Open tomorrow" ? "open-tomorrow" : "open"}">${
    res.status
  }</span>
</div>
</div>


`
);

// Popular Items Content

popularItemsContainer.innerHTML = pageData.popularItemsData.map(
  (card) => `
<div class="card">
          <div class="card-img">
            <img src="${card.image}" alt="cheese burger">
          </div>
          <div class="food-name">
            <span>${card.name}</span>
          </div>
          <div class="food-location">
            <span>
              <img src="./assets/img/Icon (6).svg" alt="location-icon">
             ${card.location}
            </span>
          </div>
          <div class="food-price">
            <span>$${card.price}</span>
          </div>
          <div class="order-btn">
            <button>Order Now</button>
          </div>
        </div>
`
);

// search food container

searchFoodContainer.innerHTML = pageData.searchFoodData.map(
  (resp) => `
       <div class="food">
          <div class="food-image">
            <img src="${resp.foodImage}" alt="pizza">
          </div>
          <span class="food-name">${resp.foodName}</span>
        </div>
`
);

// Slider Elements

const popularItemsSlides = document.querySelectorAll(
  ".popular-items-cards .card"
);
const populatNextBtn = document.querySelector(
  ".popular-items .container .next-btn"
);
const populatPrevBtn = document.querySelector(
  ".popular-items .container .prev-btn"
);
const searchFoodSlides = document.querySelectorAll(
  ".search-by_food .container .foods-container .food"
);
console.log(searchFoodSlides)
const searchPrevBtn = document.querySelector(
  ".search-by_food .container  .control .prev-btn"
);
const searchNextBtn = document.querySelector(
  ".search-by_food .container  .control .next-btn"
);

// Slider Function
const sliderFunc = function (slides, btnRight, btnLeft) {
  let currSlide = 0;
  let maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${106 * (i - slide)}%)`;
      // console.log(slide);
    });
  };
  goToSlide(0);

  const nextSlide = () => {
    btnLeft.style.opacity = "1";
    currSlide === maxSlide - 5 ? (btnRight.style.opacity = "0.5") : currSlide++;
    goToSlide(currSlide);
  };
  const prevSlide = () => {
    btnRight.style.opacity = "1";
    currSlide === 0 ? (btnLeft.style.opacity = "0.5") : currSlide--;
    goToSlide(currSlide);
  };
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    e.key === "ArrowRight"
      ? nextSlide()
      : e.key === "ArrowLeft"
      ? prevSlide()
      : null;
  });
  // setInterval(nextSlide,5000)
};
sliderFunc(popularItemsSlides, populatNextBtn, populatPrevBtn);
sliderFunc(searchFoodSlides, searchNextBtn, searchPrevBtn);

// Search food Result
const resultsArr = ['amala', 'eba', 'rice', 'burger', 'sharwama', 'cheese', '']

