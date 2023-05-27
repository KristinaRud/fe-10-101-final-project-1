import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FilterButton from "./FilterButton/FilterButton";
import FilterByKey from "./FilterItem/FilterByKey";
import s from "./FilterList.module.scss";
import FilterByColor from "./FilterItem/FilterByColor";
import ListWrapper from "../ListWrapper/ListWrapper";
import {
  deleteAllFilters,
  selectFilters,
} from "../../../store/slices/filters.slice";
import { fetchProducts } from "../../../store/actionCreator/products.actionCreator";
import { selectProducts } from "../../../store/slices/products.slice";

const colorOptions = [
  {
    _id: "5da4ad9c22012827ecdcc91e",
    name: "Black",
    cssStyles: "#000000",
    date: "2019-10-14T17:17:16.022Z",
    __v: 0,
  },
  {
    _id: "5da4af79f56f6a2748809694",
    name: "rainbow",
    cssStyles:
      "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
    date: "2019-10-14T17:25:13.991Z",
    __v: 0,
  },
  {
    _id: "5da4af79f56f6a2748809694",
    name: "darkGray",
    cssStyles: "#666666",
    date: "2019-10-14T17:25:13.991Z",
    __v: 0,
  },
];

const data = [
  {
    itemNo: "329243704",
    name: 'Monitor 23.8" AOC 24G2SAE/BK - 165 Hz',
    currentPrice: 6299,
    previousPrice: 7599,
    categories: "Monitors",
    imageUrls: [
      "https://content.rozetka.com.ua/goods/images/big/300747657.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/241666427.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/241666426.jpg",
      "https://content.rozetka.com.ua/goods/images/big/241666423.jpg",
      "https://content.rozetka.com.ua/goods/images/big/241666425.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "AOC",
    manufacturer: "AOC International",
    manufacturerCountry: "China",
    shortDescription: [
      '23.8" AOC 24G2SAE/BK - 165 Hz / Adaptive Sync / G-SYNC Compatible (DisplayPort) / Freesync Premium / DisplayHDR 400 / Speaker',
    ],
    description: [
      {
        title:
          "The 24G2SAE/BK monitor is suitable for anyone who wants high performance. It has 1080p Full High Definition (FHD) resolution, low input lag and wide color gamut, FreeSync Premium support and features a classic tilting stand.",
        image:
          "https://content1.rozetka.com.ua/rich_content/rich_content_files/original/245723794.webp",
      },
      {
        title:
          "The minimum framework for an unsurpassed combat post. Expand your field of view with multiple monitors. Narrow borders and a frameless design provide minimal bezels for the ultimate combat post.",
        image:
          "https://content2.rozetka.com.ua/rich_content/rich_content_files/original/245713364.webp",
      },
      {
        title:
          "The refresh rate is 165 Hz. A refresh rate of 165 Hz, which is more than double the 60 Hz standard, turns games into a real pleasure. Realize the potential of the video adapter. Forget image tearing and say goodbye to blurry images. Feel how your reflexes turn into immediate actions. Never look back.",
        image:
          "https://content.rozetka.com.ua/rich_content/rich_content_files/original/245723803.webp",
      },
      {
        title:
          "Freesync Premium. Enjoy the best image quality even in dynamic games. AMD's FreeSync Premium technology synchronizes the refresh rates of the GPU and the monitor, making gameplay smoother and more immersive while maintaining high performance. By supporting refresh rates no lower than 120 Hz, FreeSync Premium technology from AMD reduces blurring and increases the sharpness of the image, providing a more realistic perception. The LFC feature eliminates stuttering in cases where the frame rate becomes lower than the refresh rate.",
        image:
          "https://content1.rozetka.com.ua/rich_content/rich_content_files/original/245713366.webp",
      },
      {
        title:
          "Response time 1 ms. Response time equal to 1 ms means speed without blurring of the image of full enjoyment of the game. Fast movements and dramatic transitions will be smooth without annoying image lag. Choose the right path to success, don't let a slow monitor stop you.",
        image:
          "https://content2.rozetka.com.ua/rich_content/rich_content_files/original/245723806.webp",
      },
      {
        title:
          "Low input lag. Unlock the potential of your reactions with AOC's Low Input Lag mode. Forget the decorations: in this mode, all the monitor's resources are transferred to the processing of feedback, which provides an absolute advantage at the right moment during the descent of the course with a gentle push.",
        image:
          "https://content1.rozetka.com.ua/rich_content/rich_content_files/original/245713371.jpg",
      },
      {
        title:
          "AOC G-menu. The free utility AOC G-Menu is installed on your computer and allows you to fully configure your gaming equipment.",
        image:
          "https://content1.rozetka.com.ua/rich_content/rich_content_files/original/245713399.webp",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "165 Hz",
      maximumResolution: "1920x1080 (Full HD)",
      matrixReactionTime: "1 ms (MPRT), 4 ms (GTG)",
      "built-inTuner": "No",
      displayBrightness: "350 cd/m²",
      matrixType: "VA",
      interface: "VGA",
      displayPort: "2 x HDMI",
      displayContrast: "1000:1",
      features: "Flicker-Free, Frameless (Cinema screen)",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync Premium, Adaptive Sync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED (LED backlight)",
      size: "539 x 421 x 228 mm",
      weight: "3.7 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable (1.8 m)",
      "Displayport cable (1.8 m)",
      "Power cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.0",
  },
  {
    itemNo: "138291057",
    name: 'Monitor 27" Asus TUF Gaming VG27AQ (90LM0500-B01370 / B03370) ',
    currentPrice: 13199,
    previousPrice: 14499,
    categories: "Monitors",
    imageUrls: [
      "https://content.rozetka.com.ua/goods/images/big/18307112.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/18307351.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/18307182.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/18307378.jpg",
      "https://content.rozetka.com.ua/goods/images/big/18307148.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/18307074.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "Asus",
    manufacturer: "Asus",
    manufacturerCountry: "China",
    shortDescription: [
      '27" Asus TUF Gaming VG27AQ (90LM0500-B01370 / B03370) -- IPS 2K / 165 Гц / 8-Bit / 99% sRGB / G-Sync Сompatible / Adaptive-Sync / HDR10',
    ],
    description: [
      {
        title:
          "The TUF Gaming VG27AQ is a 27-inch WQHD (2560x1440) HDR IPS display with an ultra-fast frequency of 165Hz, designed for professional gamers and those looking for immersive gameplay. For the first time on any gaming monitor, Motion Blur Reduction and Adaptive-sync can be enabled at the same time. This new technology is called Asus Extreme Low Motion Blur Sync (ELMB SYNC). ELMB SYNC works with G-SYNC compatible, allowing gamers to enjoy sharp, high-speed frames.",
        image: "https://content.rozetka.com.ua/goods/images/big/18307112.jpg",
      },
      {
        title:
          "27-inch WQHD IPS display. The TUF Gaming VG27AQ is equipped with a WQHD (2560x1440) panel that provides 77% more desktop space than standard Full HD (1920x1080) displays. IPS technology delivers beautiful images with outstanding colors thanks to 99% sRGB color gamut and an extraordinary contrast ratio of 1000:1. Wide viewing angles of 178 degrees guarantee minimal distortion and color shift even when viewing from extreme positions.",
        image: "https://content2.rozetka.com.ua/goods/images/big/18307351.jpg",
      },
      {
        title:
          "Incredibly fast 165Hz refresh rate. TUF Gaming VG27AQ's 165Hz refresh rate eliminates lag and smearing while moving, giving you an edge in first-person shooters, racing, real-time strategy and sports games. This ultra-fast refresh rate allows you to play at the highest visual settings and react instantly to what's on the screen.",
        image: "https://content1.rozetka.com.ua/goods/images/big/18307182.jpg",
      },
      {
        title:
          "ELMB (1MS MPRT). With ELMB SYNC, you can enable ELMB (Low Motion Smoothing Technology) and G-SYNC compatibility at the same time, eliminating ghosting and tearing for sharp images and high frame rates while gaming.",
        image: "https://content2.rozetka.com.ua/goods/images/big/18307378.jpg",
      },
      {
        title:
          "HDR 10. You can now select one of several HDR modes to adjust your monitor's HDR performance depending on the current viewing scenario.",
        image: "https://content.rozetka.com.ua/goods/images/big/18307148.jpg",
      },
      {
        title:
          "Ultra-Low Blue Light technology. ASUS Shadow Boost technology clarifies the dark areas of the game without overexposing the brighter parts, improving the overall view and simplifying the detection of enemies hidden in the dark areas of the map.",
        image: "https://content1.rozetka.com.ua/goods/images/big/18307074.jpg",
      },
      {
        title:
          "A rich connection. Wide connectivity options, including I/O: DisplayPort1.2, HDMI (v2.0), support a wide range of multimedia devices.",
        image: "https://content.rozetka.com.ua/goods/images/big/18307112.jpg",
      },
    ],
    characteristics: {
      diagonal: '27"',
      updateFrequency: "165 Hz",
      maximumResolution: "2560x1440 (2K QHD)",
      matrixReactionTime: "1 ms",
      "built-inTuner": "No",
      displayBrightness: "350 cd/m²",
      matrixType: "IPS",
      interface: "DisplayPort",
      displayPort: "2 x HDMI",
      displayContrast: "1000:1",
      features: "Flicker-Free, Pivot screen, Height adjustment",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "ASUS GamePlus, Adaptive Sync, NVIDIA G-SYNC Compatible",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED (LED backlight)",
      size: "620 х 363 х 66 mm",
      weight: "3.7 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable",
      "DP cable",
      "Power cable",
      "Power adapter",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.0",
  },
  {
    itemNo: "372354219",
    name: 'Monitor 28" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 ',
    currentPrice: 21999,
    previousPrice: 22999,
    categories: "Monitors",
    imageUrls: [
      "https://content.rozetka.com.ua/goods/images/big/322631323.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/322631324.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/322631326.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/322631327.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/322631328.jpg",
      "https://content.rozetka.com.ua/goods/images/big/322631333.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "Samsung",
    manufacturer: "Samsung Electronics Co., Ltd.",
    manufacturerCountry: "Korea",
    shortDescription: [
      '28" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro / HDMI 2.1 Console Ready / Tizen Smart TV / Wi-Fi / Bluetooth',
    ],
    description: [
      {
        title:
          "The most realistic worlds on your screen\nUHD resolution and IPS panel. Maximum clarity of every detail on the screen. Thanks to the pixel density, increased 4 times compared to FHD resolution, games will open for you in a completely new light. The IPS panel is characterized by exceptionally clear color reproduction and a wide viewing angle of 178°, thanks to which the color of the image on the screen remains unchanged at any viewing angle. The increased number of pixels and the increased depth of the image make the games more real than ever.",
        image: "https://content2.rozetka.com.ua/goods/images/big/322631328.jpg",
      },
      {
        title:
          "Even hidden details of the image are revealed. HDR400 technology support. Now everything is as in life. HDR400 technology provides increased contrast, deeper blacks and whites to help you see enemies lurking in the shadows. Even in dark scenes, you will be able to distinguish the smallest details of the image.",
        image: "https://content2.rozetka.com.ua/goods/images/big/322631329.jpg",
      },
      {
        title:
          "Unsurpassed screen refresh rate for 4K gaming. The refresh rate is 144 Hz and the response time is 1 ms. Become the winner in the most dynamic fights. The refresh rate of 144 Hz, the highest among 4K gaming monitors, and the response time of 1 ms eliminate lag and ensure the smoothness and ultra-high definition of the most dynamic game scenes. The HDMI 2.1 interface, which provides a refresh rate of 120 Hz at UHD resolution, raises the level of gaming to a new height.",
        image: "https://content2.rozetka.com.ua/goods/images/big/322631330.jpg",
      },
      {
        title:
          "The fastest reaction to your actions. Low input lag. Management that ensures you victory. An exceptionally small input lag will provide you with an instant and accurate response of the screen to your actions and allows you to destroy the most sophisticated enemy. The response of the monitor is so fast that any action on the screen begins without the slightest delay caused by the interaction between your peripheral devices and what is happening on the screen.",
        image: "https://content1.rozetka.com.ua/goods/images/big/322631331.jpg",
      },
      {
        title:
          "Smooth display of dynamic scenes. Compatibility with G-Sync technology. Even the most dynamic scenes are distinguished by exceptional smoothness of the image. Compatibility with G-Sync technology synchronizes the work of the graphics processor and the screen panel, eliminating intermittency, lag and flickering of the image. Very dynamic and complex game scenes are displayed stably and smoothly thanks to AMD FreeSync Premium Pro technology, which will help you always come out the winner in any game situation.",
        image: "https://content2.rozetka.com.ua/goods/images/big/322631332.jpg",
      },
      {
        title:
          "You will see everything that was previously unavailable. Ultrawide Game View mode. This mode allows you to programmatically change the aspect ratio of the screen from 16:9 to 21:9, which allows you to find hidden gems or detect hidden enemies. Additional viewing angles in each game session will bring you closer to victory.",
        image: "https://content.rozetka.com.ua/goods/images/big/322631333.jpg",
      },
    ],
    characteristics: {
      diagonal: '28"',
      updateFrequency: "144 Hz",
      maximumResolution: "3840x2160 (4K UltraHD)",
      matrixReactionTime: "1 ms",
      "built-inTuner": "No",
      displayBrightness: "400 cd/m²",
      matrixType: "IPS",
      interface: "DisplayPort",
      displayPort: "2 x HDMI",
      displayContrast: "1000:1",
      features:
        "Flicker-Free, Bluetooth, Smart TV, Wi-Fi, USB-connectors, Cinema screen, Pivot",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology:
        "AMD FreeSync Premium Pro, Adaptive Sync, NVIDIA G-SYNC Compatible",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED (LED backlight)",
      size: "636.9 x 379.9 x 122.1 mm",
      weight: "6.2 kg",
    },
    completeSet: [
      "Monitor",
      "Remote control",
      "Stand Kit",
      "Power cable 1.5 m",
      "DP cable",
      "USB 3.0 cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.1",
  },
  {
    itemNo: "294609403",
    name: 'Monitor 23.6" HP X24c (9FM22AA) Full HD Curved VA 1500R',
    currentPrice: 5899,
    previousPrice: 7399,
    categories: "Monitors",
    imageUrls: [
      "https://content1.rozetka.com.ua/goods/images/big/175135466.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/175135469.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/175135470.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/175135467.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/175135468.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "HP",
    manufacturer: "HP Inc.",
    manufacturerCountry: "China",
    shortDescription: [
      '23.6" HP X24c (9FM22AA) Full HD Curved VA 1500R / 144 Hz / 4ms GtG / 6-Bit + FRC / sRGB 100% / Adaptive Sync / AMD FreeSync Premium / Low Blue Light / Flicker-Free',
    ],
    description: [
      {
        title:
          "Get into the game. Plunge into unexplored worlds. A monitor with a 1500R curve and Full HD resolution provides the effect of full immersion. Thanks to the refresh rate of 144 Hz, blurring is reduced and the image appears twice as fast as on other monitors. Now you can forget about lag forever and enjoy a smooth game provided by AMD FreeSync Premium technology. You can adjust the monitor so that you do not feel tension in your back and neck.",
        image: "https://content1.rozetka.com.ua/goods/images/big/175135466.jpg",
      },
      {
        title:
          "Real action on a curved screen. Plunge into unexplored worlds. On the screen with Full HD resolution and 1500R curvature, the corners of the screen become closer, providing the effect of full immersion.",
        image: "https://content1.rozetka.com.ua/goods/images/big/175135469.jpg",
      },
      {
        title:
          "Quick attacks. Thoughtful moves. React faster. Thanks to the refresh rate of 144 Hz, blurring is reduced and the image appears twice as fast as on other monitors. Forget about lags and enjoy a smooth game without annoying delays, which is provided by AMD FreeSync Premium technology.",
        image: "https://content2.rozetka.com.ua/goods/images/big/175135470.jpg",
      },
      {
        title:
          "A new level of comfort. Set the ideal position of the monitor and play comfortably. Play as much as you want without straining your back and neck.",
        image: "https://content2.rozetka.com.ua/goods/images/big/175135467.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.6"',
      updateFrequency: "144 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "4 мс GtG",
      "built-inTuner": "No",
      displayBrightness: "300 cd/m²",
      matrixType: "VA",
      interface: "DisplayPort",
      displayPort: "HDMI",
      displayContrast: "3000:1",
      features: "Flicker-Free, Cinema screen, Pivot, Curved screen",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync Premium Pro, Adaptive Sync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "LED (LED backlight)",
      size: "536 х 218 х 389 mm",
      weight: "5.32 kg",
    },
    completeSet: [
      "Monitor",
      "Cable HDMI",
      "Power cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.5",
  },
  {
    itemNo: "41952656",
    name: '31.5" Samsung LU32J590UQIXCI -- 4K UHD VA',
    currentPrice: 9999,
    previousPrice: 12599,
    categories: "Monitors",
    imageUrls: [
      "https://content2.rozetka.com.ua/goods/images/big/12019672.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/12019699.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/12019705.jpg",
      "https://content.rozetka.com.ua/goods/images/big/12019700.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/12019701.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "Samsung",
    manufacturer: "Samsung Electronics",
    manufacturerCountry: "China",
    shortDescription: [
      '31.5" Samsung LU32J590UQIXCI -- 4K UHD VA / 10-Bit / Flicker-Free / sRGB 100% / 4ms (GTG) / AMD FreeSync',
    ],
    description: [
      {
        title:
          "Widescreen UHD monitor. The UHD matrix of the Samsung UJ59 monitor with a screen diagonal of 31.5 inches has 4 times more pixels than the Full HD matrix. The large screen allows you to view documents and web pages with less scrolling, work more comfortably with multiple windows and toolbars, and view photos, videos, and play games in stunning 4K quality.",
        image:
          "https://content.rozetka.com.ua/goods/review_images/original/12020187.jpg",
      },
      {
        title:
          "A billion colors and shades. The monitor reproduces a billion colors and shades, providing an incredibly bright and realistic image. Colors look more natural and closer to life, which makes the monitor ideal for photo, video and graphics applications.",
        image:
          "https://content1.rozetka.com.ua/goods/review_images/original/12020141.jpg",
      },
      {
        title:
          "Games in 4K format. Discover games in 4K format in widescreen format on a 31.5-inch monitor. Thanks to the UHD matrix of 8.3 million pixels, which supports a wider range of colors and provides simply stunning image clarity, you get a wide view and an exciting gameplay.",
        image:
          "https://content1.rozetka.com.ua/goods/review_images/original/12020177.jpg",
      },
      {
        title:
          "Smoother gameplay. FreeSync technology synchronizes the refresh rate of the video card and the monitor, thus reducing image gaps during dynamic frame changes. Low Input Lag Mode minimizes the time for the monitor to process the received signal from the mouse, keyboard or joystick and display the image on the screen to ensure a smooth game process.",
        image:
          "https://content2.rozetka.com.ua/goods/review_images/original/12020157.jpg",
      },
      {
        title:
          "Game mode. In the game mode (Game Mode), the contrast of the screen is instantly optimized, giving you an advantage during the game. By selectively increasing contrast in individual scenes, Game Mode reveals more detail hidden in dark areas so you can spot your enemies faster.",
        image:
          "https://content1.rozetka.com.ua/goods/review_images/original/12020149.jpg",
      },
      {
        title:
          "Improving image quality. Samsung's UHD Upscaling technology analyzes the signal coming from the source and increases the level of image detail, smoothly increasing the quality of SD, HD and Full HD content to UHD level.",
        image:
          "https://content2.rozetka.com.ua/goods/review_images/original/12020159.jpg",
      },
      {
        title:
          "Powerful solutions for multitasking. The Picture-by-Picture (PBP) function allows you to display 2 different sources on one screen with high resolution. And the Picture-in-Picture (PIP) function allows you to display a second source up to a quarter of the screen.",
        image:
          "https://content2.rozetka.com.ua/goods/review_images/original/12020118.jpg",
      },
      {
        title:
          "Thin frames. With thin bezels around the screen and a stylish matte black finish, the monitor will look elegant on any desk. And its Y-shaped stand provides strong support and harmoniously complements the monitor.",
        image:
          "https://content.rozetka.com.ua/goods/review_images/original/12020154.jpg",
      },
    ],
    characteristics: {
      diagonal: '31.5"',
      updateFrequency: "60 Hz",
      maximumResolution: "3840x2160 (4K UltraHD)",
      matrixReactionTime: "4 мс GtG",
      "built-inTuner": "No",
      displayBrightness: "270 cd/m²",
      matrixType: "VA",
      interface: "DisplayPort",
      displayPort: "2 x HDMI",
      displayContrast: "3000:1",
      features: "Flicker-Free",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology: "AMD FreeSync Premium Pro",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "729.5 x 534.5 x 250.5 mm",
      weight: "6.3 kg",
    },
    completeSet: [
      "Monitor",
      "Cable HDMI",
      "Software CD",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.1",
  },
  {
    itemNo: "171456965",
    name: '23.8" Asus VG249Q (90LM05E0-B03170) ',
    currentPrice: 7799,
    previousPrice: 8299,
    categories: "Monitors",
    imageUrls: [
      "https://content.rozetka.com.ua/goods/images/big/20684949.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/20684986.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/20684996.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/20684963.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/20684977.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/20685007.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "Asus",
    manufacturer: "Asus",
    manufacturerCountry: "China",
    shortDescription: [
      '23.8" Asus VG249Q (90LM05E0-B03170) -- Adaptive-Sync / G-SYNC Compatible / FreeSync Premium',
    ],
    description: [
      {
        title:
          "Many interfaces and a narrow screen frame. The VG249Q monitor connects to a video source via HDMI, D-Sub or DisplayPort, and the narrow screen frame (only 1 cm thick) makes it an ideal choice for multi-monitor configurations.",
        image: "https://content.rozetka.com.ua/goods/images/big/20684949.jpg",
      },
      {
        title:
          "Ergonomic stand. The stand of this monitor allows you to conveniently adjust the position of the screen: change the angle of inclination and height, turn it around its axis or put it in portrait mode. In addition, the monitor can be hung on the wall using a standard VESA mount.",
        image: "https://content1.rozetka.com.ua/goods/images/big/20684986.jpg",
      },
      {
        title:
          "ASUS GamePlus function. Since the VG249Q model is aimed primarily at gamers, it has special features designed for and developed with the participation of computer game enthusiasts. They are activated by the GamePlus button.",
        image: "https://content2.rozetka.com.ua/goods/images/big/20684996.jpg",
      },
      {
        title:
          "ASUS GameVisual technology. Exclusive ASUS GameVisual technology allows you to quickly adjust the monitor according to current tasks and conditions to get the highest quality image. A total of seven setting modes are available. You can easily switch between them by pressing a button specially allocated for this purpose.",
        image: "https://content2.rozetka.com.ua/goods/images/big/20684963.jpg",
      },
      {
        title:
          "Minimize screen flickering. To reduce the likelihood of unpleasant symptoms associated with eye fatigue, ASUS specialists have developed Flicker-Free technology, which suppresses the flickering of the screen. Monitors with this technology make interaction with the computer more comfortable.",
        image: "https://content1.rozetka.com.ua/goods/images/big/20684977.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "144 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "1ms MPRT / 4ms GtG",
      "built-inTuner": "No",
      displayBrightness: "250 cd/m²",
      matrixType: "IPS",
      interface: "VGA, DisplayPort",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Cinema screen, Pivot",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology:
        "AMD FreeSync Premium Pro, NVIDIA G-Sync Compatible, Adaptive Sync",
      builtInSpeakers: "2 x 2 W",
      coating: "Glossy",
      illumination: "WLED",
      size: "325.24 x  540.5 x 51.67 mm",
      weight: "6.5 kg",
    },
    completeSet: [
      "Monitor",
      "Cable HDMI",
      "Power cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.7",
  },
  {
    itemNo: "362729136",
    name: '27" AOC Q27G2E/BK -- 2K QHD VA',
    currentPrice: 9499,
    previousPrice: 11999,
    categories: "Monitors",
    imageUrls: [
      "https://content1.rozetka.com.ua/goods/images/big/318640934.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/304392130.jpg",
      "https://content.rozetka.com.ua/goods/images/big/304392128.jpg",
      "https://content.rozetka.com.ua/goods/images/big/304392131.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/304392126.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/304392124.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/304392125.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "AOC",
    manufacturer: "AOC",
    manufacturerCountry: "China",
    shortDescription: [
      '27" AOC Q27G2E/BK -- 2K QHD VA / 8-Bit / sRGB 99% / 155 Hz / Adaptive-Sync / AMD FreeSync Premium',
    ],
    description: [
      {
        title:
          "27-inch VA display with QHD resolution, Adaptive Sync technology, 155 Hz refresh rate and low input lag.",
        image: "https://content2.rozetka.com.ua/goods/images/big/304392123.jpg",
      },
      {
        title:
          "The 27-inch AOC Q27G2E/BK panel with VA matrix and ShadowControl technology has a QHD resolution and an excellent contrast ratio of 3000:1. With Adaptive Sync technology, a 155Hz refresh rate and a 1ms response time, you'll be able to play with incredible speed and fluidity, while the low input lag will reduce motion blur and speed up I/O operations. Game adventures will become even more exciting and rich.",
        image: "https://content1.rozetka.com.ua/goods/images/big/304392127.jpg",
      },
      {
        title:
          "Thanks to the resolution of 2560 x 1440, Quad HD (QHD), excellent image quality and clarity are achieved, allowing you to see the smallest details. The widescreen's 16:9 aspect ratio provides plenty of space to work and position windows, and lets you enjoy games and movies in their original resolution.",
        image: "https://content.rozetka.com.ua/goods/images/big/304392129.jpg",
      },
      {
        title:
          "The VA (Vertical Alignment) panel displays deeper blacks and has high contrast for a more vivid and vivid image.",
        image: "https://content1.rozetka.com.ua/goods/images/big/318640934.jpg",
      },
      {
        title:
          "The frame rate is twice as fast as other monitors – forget about image freezes and blurry images. Thanks to the 155 Hz refresh rate, every frame will be sharp, you will see a super-floating sequence of frames, and you will be able to hit the enemy with precision and appreciate the high-speed races in all their glory.",
        image: "https://content2.rozetka.com.ua/goods/images/big/304392130.jpg",
      },
    ],
    characteristics: {
      diagonal: '27"',
      updateFrequency: "155 Hz",
      maximumResolution: "2560x1440 (2K QHD)",
      matrixReactionTime: "1ms MPRT / 4ms GtG",
      "built-inTuner": "No",
      displayBrightness: "300 cd/m²",
      matrixType: "VA",
      interface: "DisplayPort",
      displayPort: "2 x HDMI",
      displayContrast: "3000:1",
      features: "Cinema screen, Flicker-Free",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology:
        "AMD FreeSync Premium Pro, NVIDIA G-Sync Compatible, Adaptive Sync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "528.6~398.6 x 612.37 x 227.4 mm",
      weight: "5.5 kg",
    },
    completeSet: [
      "Monitor",
      "HDMI cable 1.8 m",
      "Displayport cable 1.8 m",
      "Power cable 1.2 m",
      "Documentation",
      "Warranty card",
    ],
    rating: "3.7",
  },
  {
    itemNo: "364647606",
    name: '27" Iiyama G-Master G2770QSU-B1 -- Fast IPS 2К',
    currentPrice: 11499,
    previousPrice: 13569,
    categories: "Monitors",
    imageUrls: [
      "https://content2.rozetka.com.ua/goods/images/big/308335215.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/308335216.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/308335217.jpg",
      "https://content2.rozetka.com.ua/goods/images/big/308335226.jpg",
      "https://content.rozetka.com.ua/goods/images/big/308335246.jpg",
    ],
    quantity: 999,
    color: "Black",
    brand: "Iiyama",
    manufacturer: "Iiyama",
    manufacturerCountry: "China",
    shortDescription: [
      '27" Iiyama G-Master G2770QSU-B1 -- Fast IPS 2К / 165Гц / 8-bit / MPRT 0.5ms / AMD FreeSync Premium Pro / G-SYNC Compatible',
    ],
    description: [
      {
        title:
          "Fast IPS. The Fast IPS panel technology guarantees not only high-quality images of battle scenes with outstanding color accuracy, but also an outstanding 0.5ms moving image response time (MPRT).",
        image: "https://content1.rozetka.com.ua/goods/images/big/308335217.jpg",
      },
      {
        title:
          "FreeSync Premium Pro technology. This monitor supports HDR content with accurate color reproduction and brightness. Low input lag and low frame rate compensation eliminate any tearing or stuttering issues at almost any frame rate.",
        image: "https://content.rozetka.com.ua/goods/images/big/308335218.jpg",
      },
      {
        title:
          "Black Tuner. Users can adjust the brightness and dark shades with Black Tuner, providing better visibility in shadowed areas and helping to detect the enemy earlier.",
        image:
          "https://content1.rozetka.com.ua/goods/images/big/308335220.jpg  ",
      },
      {
        title:
          "Assigned and custom game modes. Be your way! choose one of the preset game modes (including FPS and strategy) or set and save your own settings.",
        image: "https://content1.rozetka.com.ua/goods/images/big/308335222.jpg",
      },
    ],
    characteristics: {
      diagonal: '27"',
      updateFrequency: "165 Hz",
      maximumResolution: "2560x1440 (2K QHD)",
      matrixReactionTime: "0.5 мс (MPRT)",
      "built-inTuner": "No",
      displayBrightness: "400 cd/m²",
      matrixType: "IPS",
      interface: "DisplayPort",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Cinema screen, Flicker-Free, Pivot, USB-controller",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      gameTechnology:
        "AMD FreeSync Premium Pro, NVIDIA G-Sync Compatible, Adaptive Sync",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "614 x 442 x 239 mm",
      weight: "4.4 kg",
    },
    completeSet: [
      "Monitor",
      "Power cable",
      "HDMI cable",
      "DisplayPort cable",
      "USB cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.0",
  },
  {
    itemNo: "280454668",
    name: '23.8" MSI PRO MP242',
    currentPrice: 4199,
    previousPrice: 5099,
    categories: "Monitors",
    imageUrls: [
      "https://content.rozetka.com.ua/goods/images/big/332940766.png",
      "https://content1.rozetka.com.ua/goods/images/big/160904983.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/160904980.jpg",
      "https://content.rozetka.com.ua/goods/images/big/160904981.jpg",
      "https://content1.rozetka.com.ua/goods/images/big/160904982.jpg",
    ],
    quantity: 999,
    color: "Dark gray",
    brand: "MSI",
    manufacturer: "MSI",
    manufacturerCountry: "China",
    shortDescription: [
      '23.8" MSI PRO MP242 / IPS / 1920x1080 (Full HD) / 5ms / 75Hz / 250 cd/m² / 1000:1 / 178°/178° / 16:9 / 16.7M / 1 x HDMI 1.4 / 1 x VGA / 1 x 3.5 mm mini-jack',
    ],
    description: [
      {
        title:
          "For comfortable learning from home. The PRO MP242 monitor takes care of the user's eyes. By eliminating screen flickering and reducing the intensity of blue light, it allows you to comfortably spend long periods at the computer, for example, during online training courses. The usability of this model is also increased thanks to the stand with adjustable screen position and wide viewing angles.",
        image: "https://content.rozetka.com.ua/goods/images/big/332940766.png",
      },
      {
        title:
          "For eye comfort. Thanks to the Anti-Flicker technology, the monitor is provided with stable power, which prevents the screen from flickering. This also has a favorable effect on the user's eyes, which will be less tired.",
        image: "https://content1.rozetka.com.ua/goods/images/big/160904983.jpg",
      },
      {
        title:
          "Less blue light. Light in the blue component of the visible spectrum can have a harmful effect on the eyes, especially in children. In this monitor, part of the energy of such light produced by the screen is blocked to protect the user's health.",
        image: "https://content1.rozetka.com.ua/goods/images/big/160904980.jpg",
      },
      {
        title:
          "Clear image in any conditions. A special screen coating reduces the amount of light it reflects. The screen with such an anti-reflective coating increases the image quality and makes working at the computer more comfortable.",
        image: "https://content.rozetka.com.ua/goods/images/big/160904981.jpg",
      },
      {
        title:
          "IPS-class LCD panel. All children love bright colors, and the IPS-class LCD panel will reproduce them without significant distortion. Accurate color rendition will come in handy when learning with graphic materials.",
        image: "https://content1.rozetka.com.ua/goods/images/big/160904982.jpg",
      },
    ],
    characteristics: {
      diagonal: '23.8"',
      updateFrequency: "75 Hz",
      maximumResolution: "1920x1080 (FullHD)",
      matrixReactionTime: "5ms",
      "built-inTuner": "No",
      displayBrightness: "250 cd/m²",
      matrixType: "IPS",
      interface: "VGA",
      displayPort: "HDMI",
      displayContrast: "1000:1",
      features: "Cinema screen",
      viewingAngles: "178°/178°",
      relationshipOfTheParties: "16:9",
      builtInSpeakers: "2 x 2 W",
      coating: "Matte",
      illumination: "WLED",
      size: "539.5 x 405.9 x 219.7 mm",
      weight: "3.3 kg",
    },
    completeSet: [
      "Monitor",
      "Power cable",
      "HDMI cable",
      "Documentation",
      "Warranty card",
    ],
    rating: "4.1",
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
    brand: "Samsung",
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

const FilterList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const query = filters;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const products = useSelector(selectProducts);
  console.log(products);

  const handleClearFilter = () => {
    query.forEach((filter) => {
      if (filter.name === "currentPrice") {
        searchParams.delete("minPrice");
        searchParams.delete("maxPrice");
      }
      searchParams.delete(filter.name);
      const updatedSearch = searchParams.toString();
      navigate(`?${updatedSearch}`);
    });
    dispatch(deleteAllFilters());
  };

  const handleSendFilter = () => {
    query.forEach((filter) => {
      if (filter.name === "currentPrice") {
        const priceND = [];
        filter.value.forEach((price) => {
          priceND.push(...price.split(" - "));
        });
        const minPrice = Math.min(...priceND).toString();
        const maxPrice = Math.max(...priceND).toString();
        searchParams.set("minPrice", minPrice);
        searchParams.set("maxPrice", maxPrice);
      } else {
        const params = filter.value.join(",");
        searchParams.set(filter.name, params);
      }
    });
    navigate(`?${searchParams}`); // TODO: чи потрібно добавляти filters як в бекенді?
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ListWrapper title="Filters">
      <FilterButton onClick={handleClearFilter}>Clear Filter</FilterButton>
      <FilterByKey filterOptions={data} keyOption="brand" />
      <FilterByKey filterOptions={data} keyOption="currentPrice" />
      <FilterByColor data={data} colorOptions={colorOptions} />
      <FilterByKey filterOptions={data} keyOption="manufacturerCountry" />
      <Button variant="contained" className={s.btn} onClick={handleSendFilter}>
        Apply Filters ({filters.length})
      </Button>
    </ListWrapper>
  );
};

export default FilterList;
