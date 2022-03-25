/* eslint-disable arrow-body-style */
import React from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import store from 'store';
import styles from './styles.css';
import Users from '../Users';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push('/login');
};

const Cms = ({ history }) => {
	if (!isLoggedIn()) {
		return <Redirect to="/login" />;
	}
  return (
    <div>
      <Helmet>
        <title>CMS</title>
      </Helmet>

      <Sidebar as={Menu} inverted visible vertical width="thin" icon="labeled">
        <Menu.Item name="users">
          <Icon name="users" />
          Users
        </Menu.Item>
        <Menu.Item name="logout" onClick={handleLogout(history)}>
          <Icon name="power" />
          Logout
        </Menu.Item>
      </Sidebar>
      <div className={styles.mainBody}>
        <Users />
      </div>
    </div>
  );
};

export default Cms;
