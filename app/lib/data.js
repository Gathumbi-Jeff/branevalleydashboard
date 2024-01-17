// Assuming this is the beginning of data.js file

import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => { // <-- Add parentheses here
  try {
    connectToDB
    const users = await User.find();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error to handle it elsewhere, or handle it appropriately here
  }
};
