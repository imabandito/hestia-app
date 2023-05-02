import { Link } from 'react-router-dom';

export function LogoHeader({ icon }) {
  return (
    <div className='logo-header' data-testid='header-logo'>
      <Link to='/'>{icon}</Link>
    </div>
  );
}
