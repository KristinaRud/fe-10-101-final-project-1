import { Link } from "react-router-dom";

const data = [
  {
    title: `Information`,
    details: (
      <>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">About Zip</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/">Terms</Link>
        </li>
        <li>
          <Link to="/">Orders and Returns</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Advanced Search</Link>
        </li>
        <li>
          <Link to="/">Newsletter Subscription</Link>
        </li>
      </>
    ),
  },
  {
    title: `PC Parts`,
    details: (
      <>
        <li>
          <Link to="/">CPUS</Link>
        </li>
        <li>
          <Link to="/">Add On Cards</Link>
        </li>
        <li>
          <Link to="/">Hard Drives (Internal)</Link>
        </li>
        <li>
          <Link to="/">Graphic Cards</Link>
        </li>
        <li>
          <Link to="/">Keyboards / Mice</Link>
        </li>
        <li>
          <Link to="/">Cases / Power Supplies / Cooling</Link>
        </li>
        <li>
          <Link to="/">RAM (Memory)</Link>
        </li>
        <li>
          <Link to="/">Software</Link>
        </li>
        <li>
          <Link to="/">Speakers / Headsets</Link>
        </li>
        <li>
          <Link to="/">Motherboards</Link>
        </li>
      </>
    ),
  },
  {
    title: `Desktop PCs`,
    details: (
      <>
        <li>
          <Link to="/">Custom PCs</Link>
        </li>
        <li>
          <Link to="/">Servers</Link>
        </li>
        <li>
          <Link to="/">MSI All-In-One PCs</Link>
        </li>
        <li>
          <Link to="/">HP/Compaq PCs</Link>
        </li>
        <li>
          <Link to="/">ASUS PCs</Link>
        </li>
        <li>
          <Link to="/">Tecs PCs</Link>
        </li>
      </>
    ),
  },
  {
    title: `Laptops`,
    details: (
      <>
        <li>
          <Link to="/">Everyday Use Notebooks</Link>
        </li>
        <li>
          <Link to="/">MSI Workstation Series</Link>
        </li>
        <li>
          <Link to="/">MSI Prestige Series</Link>
        </li>
        <li>
          <Link to="/">Tablets and Pads</Link>
        </li>
        <li>
          <Link to="/">Netbooks</Link>
        </li>
        <li>
          <Link to="/">Infinity Gaming Notebooks</Link>
        </li>
      </>
    ),
  },
  {
    title: `Address`,
    details: (
      <>
        <li>
          <Link to="/">Address: 1234 Street Adress City Address, 1234</Link>
        </li>
        <li>
          <Link to="/">Phones: (00) 1234 5678</Link>
        </li>
        <li>
          <Link to="/">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</Link>
        </li>
        <li>
          <Link to="/">Friday: 9:00 AM - 6:00 PM</Link>
        </li>
        <li>
          <Link to="/">Saturday: 11:00 AM - 5:00 PM</Link>
        </li>
        <li>
          <Link to="/">E-mail: shop@email.com</Link>
        </li>
      </>
    ),
  },
];

export default data;
