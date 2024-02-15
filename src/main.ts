type Country = {
  flag: string;
  name: string;
};

const countries = [
  {
    flag: "https://www.betpawa.com/images/betpawa-kenya.png",
    name: "Kenya",
  },
  {
    flag: "https://betpawa.com/images/betpawa-zambia.png",
    name: "Zambia",
  },
  {
    flag: "https://betpawa.com/images/betpawa-nigeria.png",
    name: "Nigeria",
  },
  {
    flag: "https://betpawa.com/images/betpawa-ghana.png",
    name: "Ghana",
  },
  {
    flag: "https://betpawa.com/images/betpawa-rwanda.png",
    name: "Rwanda",
  },
  {
    flag: "https://betpawa.com/images/betpawa-uganda.png",
    name: "Uganda",
  },
  {
    flag: "https://betpawa.com/images/betpawa-malawi.png",
    name: "Malawi",
  },
  {
    flag: "https://betpawa.com/images/betpawa-cameroon.png",
    name: "Cameroon",
  },
];

// create a country card
function createCountryCard(country: Country) {
  const country_card = document.createElement("div");
  country_card.classList.add("country_card");

  const country_flag = document.createElement("img");
  country_flag.classList.add("country_card_img");
  country_flag.src = country.flag;
  country_card.appendChild(country_flag);

  const country_name = document.createElement("p");
  country_name.classList.add("country_card_name");
  country_name.textContent = country.name;
  country_card.appendChild(country_name);

  return country_card;
}

// function to display country cards
function displayCountryCards() {
  const countries_wrapper = document.getElementById("countries_wrapper");

  // create and append country cards
  countries.forEach((country) => {
    const new_country_card = createCountryCard(country);
    countries_wrapper?.appendChild(new_country_card);

    // redirect on card click
    new_country_card.addEventListener("click", () => {
      handleCountryClick(country);
    });
  });
}

// call the function to display country cards
displayCountryCards();

// handle url redirection
const handleCountryClick = async (country: Country) => {
  const response = await fetch("https://ipapi.co/json/");
  const results = await response.json();
  const { country_name } = results;

  if (country_name) {
    if (country_name === "Zambia" || country.name === "Zambia") {
      window.location.href = "https://betkumi.co.zm";
    } else {
      window.location.href = "https://betkumi.co.ke";
    }
  }
};
