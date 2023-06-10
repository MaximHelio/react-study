import { create } from 'zustand';

export const usersStore = create(() => ({
  users: [],
  user: {
    name: '',
    age: ''
  }
}));