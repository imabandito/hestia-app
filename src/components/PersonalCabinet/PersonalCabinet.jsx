import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '..';
import { logOut } from '../../redux/actions/loginActions';

export function PersonalCabinet() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ loginReducer }) => loginReducer);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.removeItem('loginedUser');
  };
  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.removeItem(user.email);
    localStorage.removeItem('loginedUser');
    dispatch(logOut());
  };

  return (
    <div className='profile' data-testid='auth-cabinet'>
      <h2>
        <Trans>Welcome</Trans> {user?.name} {user?.surname}
      </h2>
      <Button
        type='greenDark'
        text='Sign Out'
        extraClass='large'
        onClick={handleLogOut}
      />
      <Button
        type='greenDark'
        text='Delete account'
        extraClass='large'
        onClick={handleDelete}
      />
    </div>
  );
}
