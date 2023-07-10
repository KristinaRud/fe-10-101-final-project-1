import { Link } from "react-router-dom";
import CatalogComponent from "../components/Footer/CatalogComponent/CatalogComponent";

const data = [
  {
    title: `Details`,
    details: (
      <>
        <li>
          <Link to="/about" color="inherit">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/terms-of-use" color="inherit">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/contact" color="inherit">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Newsletter Subscription
          </Link>
        </li>
      </>
    ),
  },
  {
    title: `Catalog`,
    details: <CatalogComponent />,
  },
  {
    title: `Our partners`,
    details: (
      <>
        <li>
          <Link
            to="https://www.acer.com/us-en"
            target={"_blank"}
            color="inherit"
          >
            Acer
          </Link>
        </li>
        <li>
          <Link to="https://www.mi.com/ua/" target={"_blank"} color="inherit">
            Xiaomi
          </Link>
        </li>
        <li>
          <Link to="https://www.apple.com/" target={"_blank"} color="inherit">
            Apple
          </Link>
        </li>
        <li>
          <Link
            to="https://www.asus.com/ua-ua/"
            target={"_blank"}
            color="inherit"
          >
            Asus
          </Link>
        </li>
        <li>
          <Link
            to="https://www.lenovo.com/ua/uk/"
            target={"_blank"}
            color="inherit"
          >
            Lenovo
          </Link>
        </li>
      </>
    ),
  },
  {
    title: `Address`,
    details: (
      <>
        <li>
          <Link to="/" color="inherit">
            Address: 1234 Street Adress City Address, 1234
          </Link>
        </li>
        <li>
          Phones:&nbsp;
          <Link
            to="tel:(00) 1234 5678"
            style={{
              textDecoration: "underline",
              color: "#01A4FF",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            (00) 1234 5678
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            We are open: Monday-Thursday: 9:00 AM - 5:30 PM
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Friday: 9:00 AM - 6:00 PM
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Saturday: 11:00 AM - 5:00 PM
          </Link>
        </li>
        <li>
          E-mail:&nbsp;
          <Link
            to="mailto:shop@email.com"
            style={{
              textDecoration: "underline",
              color: "#01A4FF",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
            onlinestoredanit@gmail.com
          </Link>
        </li>
      </>
    ),
  },
];

export default data;
