import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchTabs, PersonalCabinet } from '../../components';
import { personalCabinetTabs } from '../../components/SwitchTabs/tabsData';
import { loginUser } from '../../redux/actions/loginActions';

export function LoginPage() {
  const { user } = useSelector(({ loginReducer }) => loginReducer);
  const dispatch = useDispatch();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  useEffect(() => {
    const loginedEmail = localStorage.getItem('loginedUser');
    const loginedUser = localStorage.getItem(loginedEmail);

    if (loginedUser) {
      dispatch(loginUser(JSON.parse(loginedUser)));
    }
  }, []);

  return !user ? (
    <div className='auth-cabinet'>
      <SwitchTabs tabs={personalCabinetTabs} extraClass='auth-cabinet-tabs' />
    </div>
  ) : (
    <div className='wrapper personal-cabinet'>
      <PersonalCabinet />
    </div>
  );
}
