import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ibrahim",
    lastName: "Mallick",
    email: "ibrahim@gmail.com",
    password: "ibrahim123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Ibrahim Mallick",
        street: "7, Rohini",
        city: "New Delhi",
        state: "Delhi",
        zipcode: "110042",
        country: "India",
        mobile: "9890989011",
      },
      {
        _id: uuid(),
        name: "Ishanki Saxena",
        street: "Bawana Road",
        city: "New Delhi",
        state: "Delhi",
        zipcode: "110042",
        country: "India",
        mobile: "9870901123",
      },
    ],
  },
];
