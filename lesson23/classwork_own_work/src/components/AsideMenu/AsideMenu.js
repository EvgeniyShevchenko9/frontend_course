import './AsideMenu.css';
import './AsideMenu.scss';
import { Link } from 'react-router-dom';

function AsideMenu() {
  return (
    <div className='AsideMenu'>
      AsideMenu Component
      <ul>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/login'>Log Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default AsideMenu;
