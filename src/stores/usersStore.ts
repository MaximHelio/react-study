import { create } from 'zustand';

interface User {
  name: string
  age: string | number
}

export const usersStore = create(() => ({
  users: [] as User[],
  user: {
    name: '',
    age: ''
  } as User
}));

export const usersActions = {
  userSet: (user: User) => {
    // setState: 옵저버하는 컴포넌트들을 한번에 re-rendering해줌
    usersStore.setState({ user });
  },
  // users배열에 수정중인 user를 하나하나 추가
  usersCreate: (user: User) => {
    usersStore.setState((state) => {
      state.users.push({
        ...user
      });
      return {
        users: state.users
      };
    });
  }
};