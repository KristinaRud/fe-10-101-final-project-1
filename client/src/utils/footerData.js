import { Link } from "react-router-dom";

const data = [
  {
    title: `Information`,
    details: (
      <>
        <li>
          <Link to="/" color="inherit">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            About Zip
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Search
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Terms
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Orders and Returns
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Advanced Search
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
    title: `PC Parts`,
    details: (
      <>
        <li>
          <Link to="/" color="inherit">
            CPUS
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Add On Cards
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Hard Drives (Internal)
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Graphic Cards
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Keyboards / Mice
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Cases / Power Supplies / Cooling
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            RAM (Memory)
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Software
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Speakers / Headsets
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Motherboards
          </Link>
        </li>
      </>
    ),
  },
  {
    title: `Desktop PCs`,
    details: (
      <>
        <li>
          <Link to="/" color="inherit">
            Custom PCs
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Servers
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            MSI All-In-One PCs
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            HP/Compaq PCs
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            ASUS PCs
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Tecs PCs
          </Link>
        </li>
      </>
    ),
  },
  {
    title: `Laptops`,
    details: (
      <>
        <li>
          <Link to="/" color="inherit">
            Everyday Use Notebooks
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            MSI Workstation Series
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            MSI Prestige Series
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Tablets and Pads
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Netbooks
          </Link>
        </li>
        <li>
          <Link to="/" color="inherit">
            Infinity Gaming Notebooks
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
