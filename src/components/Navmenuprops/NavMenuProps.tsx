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
          <Link to={"/"}>
            Our Events
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to={"/"}>
            Contact Us
          </Link>
        ),
      },
      {
        key: '5',
        label: (
          <Link to={"/"}>
            FAQ Page
          </Link>
        )
      }
];

export const ShopProps: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/">
        All Products
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={"/"}>
        Cart
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={"/"}>
        Checkout
      </Link>
    ),
  },
]