import { MenuProps } from "antd";
import { Link } from "react-router-dom";


export const PageProps: MenuProps['items'] = [
    {
        key: '1',
        label: (
          <Link to="/about">
            About Us
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to={"/ourservices"}>
            Our Services
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to={"/contact"}>
            Contact Us
          </Link>
        ),
      },
      {
        key: '5',
        label: (
          <Link to={"/faqpage"}>
            FAQ Page
          </Link>
        )
      }
];

export const ShopProps: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/allproducts">
        All Products
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={"/cart"}>
        Cart
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={"/checkout"}>
        Checkout
      </Link>
    ),
  },
];

export const AuthProps: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={"/login"}>
        Login
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={"/register"}>
        Register
      </Link>
    )
  }
]