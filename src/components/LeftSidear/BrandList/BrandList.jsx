import { useEffect, useState } from "react";
import BrandItem from "./BrandItem/BrandItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import s from "./BrandList.module.scss";
import FilterButton from "../FilterList/FilterButton/FilterButton";

const products = [
  {
    itemNo: "123242339",
    name: '23.8" Samsung S24R350',
    currentPrice: 4799,
    previousPrice: 5499,
    categories: "Monitors",
    imageUrls: [
      "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680833.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680902.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "Puma",
    manufacturer: "Samsung",
    manufacturerCountry: "Japan",
    shortDescription: [
      '23.8" Samsung S24R350 Dark Silver (LS24R350FHIXCI / LS24R350FZIXCI)',
    ],
    description: [
      {
        title:
          "Multimedia capabilities. FreeSync: Freesync technology allows you to get rid of image breaks during dynamic frame changes. Game Mode: Game Mode instantly optimizes color and contrast settings depending on the game for maximum gaming enjoyment",
        image: "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      },
      {
        title:
          "Less strain on the eyes. Eye Saver Mode: blue glow during prolonged exposure negatively affects vision, Eye Saver Mode reduces the strain on the eyes while working at the monitor by reducing the intensity of blue glow. Flicker Free Technology: The technology protects the eyes from the constant strain caused by flickering and allows you to work longer.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      },
      {
        title:
          "Excellent picture quality. Wide vertical and horizontal viewing angles (178/178 degrees) ensure excellent visibility of the image on the screen at any angle. Whether you're sitting back in a chair or gathered around the monitor with friends, the wide viewing angle allows everyone to see the perfect picture from any position.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      },
      {
        title:
          "Samsung's energy-saving technology reduces energy consumption and environmental impact. Eco-energy-saving technology reduces the brightness of the screen to improve energy efficiency. Available manual (25%, 50%) and automatic (reduces consumption by about 10%) adjustment of the brightness of the black sections of the screen.",
        image: "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "75 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "5 ms",
      "built-inTuner": "No",
      displayBrightness: "250 cd/m²",
      matrixType: "IPS",
      interface: "VGA",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Flicker-Free",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "539.7 x 425.4 x 236.4 mm",
      weight: "3.4 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable",
      "Power cable (external adapter) 1.5 m",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.3",
  },
  {
    itemNo: "123242339",
    name: '23.8" Samsung S24R350',
    currentPrice: 4799,
    previousPrice: 5499,
    categories: "Monitors",
    imageUrls: [
      "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680833.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680902.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "Adidas",
    manufacturer: "Samsung",
    manufacturerCountry: "Japan",
    shortDescription: [
      '23.8" Samsung S24R350 Dark Silver (LS24R350FHIXCI / LS24R350FZIXCI)',
    ],
    description: [
      {
        title:
          "Multimedia capabilities. FreeSync: Freesync technology allows you to get rid of image breaks during dynamic frame changes. Game Mode: Game Mode instantly optimizes color and contrast settings depending on the game for maximum gaming enjoyment",
        image: "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      },
      {
        title:
          "Less strain on the eyes. Eye Saver Mode: blue glow during prolonged exposure negatively affects vision, Eye Saver Mode reduces the strain on the eyes while working at the monitor by reducing the intensity of blue glow. Flicker Free Technology: The technology protects the eyes from the constant strain caused by flickering and allows you to work longer.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      },
      {
        title:
          "Excellent picture quality. Wide vertical and horizontal viewing angles (178/178 degrees) ensure excellent visibility of the image on the screen at any angle. Whether you're sitting back in a chair or gathered around the monitor with friends, the wide viewing angle allows everyone to see the perfect picture from any position.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      },
      {
        title:
          "Samsung's energy-saving technology reduces energy consumption and environmental impact. Eco-energy-saving technology reduces the brightness of the screen to improve energy efficiency. Available manual (25%, 50%) and automatic (reduces consumption by about 10%) adjustment of the brightness of the black sections of the screen.",
        image: "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "75 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "5 ms",
      "built-inTuner": "No",
      displayBrightness: "250 cd/m²",
      matrixType: "IPS",
      interface: "VGA",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Flicker-Free",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "539.7 x 425.4 x 236.4 mm",
      weight: "3.4 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable",
      "Power cable (external adapter) 1.5 m",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.3",
  },
  {
    itemNo: "123242339",
    name: '23.8" Samsung S24R350',
    currentPrice: 4799,
    previousPrice: 5499,
    categories: "Monitors",
    imageUrls: [
      "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680833.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      "https://content.rozetka.com.ua/goods/images/big/106680902.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "Adidas",
    manufacturer: "Samsung",
    manufacturerCountry: "Japan",
    shortDescription: [
      '23.8" Samsung S24R350 Dark Silver (LS24R350FHIXCI / LS24R350FZIXCI)',
    ],
    description: [
      {
        title:
          "Multimedia capabilities. FreeSync: Freesync technology allows you to get rid of image breaks during dynamic frame changes. Game Mode: Game Mode instantly optimizes color and contrast settings depending on the game for maximum gaming enjoyment",
        image: "https://content1.rozetka.com.ua/goods/images/big/106680786.jpg",
      },
      {
        title:
          "Less strain on the eyes. Eye Saver Mode: blue glow during prolonged exposure negatively affects vision, Eye Saver Mode reduces the strain on the eyes while working at the monitor by reducing the intensity of blue glow. Flicker Free Technology: The technology protects the eyes from the constant strain caused by flickering and allows you to work longer.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680806.jpg",
      },
      {
        title:
          "Excellent picture quality. Wide vertical and horizontal viewing angles (178/178 degrees) ensure excellent visibility of the image on the screen at any angle. Whether you're sitting back in a chair or gathered around the monitor with friends, the wide viewing angle allows everyone to see the perfect picture from any position.",
        image: "https://content.rozetka.com.ua/goods/images/big/106680864.jpg",
      },
      {
        title:
          "Samsung's energy-saving technology reduces energy consumption and environmental impact. Eco-energy-saving technology reduces the brightness of the screen to improve energy efficiency. Available manual (25%, 50%) and automatic (reduces consumption by about 10%) adjustment of the brightness of the black sections of the screen.",
        image: "https://content2.rozetka.com.ua/goods/images/big/106680881.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "75 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "5 ms",
      "built-inTuner": "No",
      displayBrightness: "250 cd/m²",
      matrixType: "IPS",
      interface: "VGA",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Flicker-Free",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "539.7 x 425.4 x 236.4 mm",
      weight: "3.4 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable",
      "Power cable (external adapter) 1.5 m",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.3",
  },
];

const data = [
  {
    enabled: true,
    _id: "5dbefebfe102601f40c164bb",
    customId: "adidas",
    name: "Adidas",
    imageUrl:
      "data:image/png;base64,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",
    url: "https://www.adidas.com/us",
    date: "2019-11-03T16:22:23.672Z",
    __v: 0,
  },
  {
    enabled: true,
    _id: "5dbeffc3e102601f40c164bc",
    customId: "puma",
    name: "Puma",
    imageUrl:
      "data:image/png;base64,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",
    url: "https://ru.puma.com/",
    date: "2019-11-03T16:26:43.026Z",
    __v: 0,
  },
  {
    enabled: true,
    _id: "5dbeffc3e102601f40c164bc",
    customId: "puma",
    name: "Reebok",
    imageUrl:
      "data:image/png;base64,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",
    url: "https://ru.puma.com/",
    date: "2019-11-03T16:26:43.026Z",
    __v: 0,
  },
];

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [limit, setLimit] = useState(6);
  const handleShowAllBrands = () => setLimit(brands.length);

  useEffect(() => {
    const brandsData = [];
    // дістаємо дані з сервера про партнерів та про товари, які є на сторінці
    data.forEach((item) => {
      products.forEach((product) => {
        if (item.name === product.brand) {
          brandsData.push(item);
        }
      });
    });
    setBrands([...new Set(brandsData)]);
  }, []); // вказати залежності
  return (
    <>
      <ListWrapper title="Brands">
        <FilterButton onClick={handleShowAllBrands}>All Brands</FilterButton>
      </ListWrapper>
      <div className={s.wrapper}>
        {brands?.map((item, index) => {
          if (index < limit) {
            return <BrandItem key={item.date} url={item.imageUrl} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default BrandList;
