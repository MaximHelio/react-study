import { usersStore } from '../stores/usersStore';

function Footer(props: any) {
  const usersState = usersStore((state) => state);
  
  console.log(props);
  return (
    // footer도 해당 stoer -State를 보고 있기 때문에 옵저버 상태가 된다. 
    <footer>Copyright {usersState.user.name}</footer>
  );
}

export default Footer;