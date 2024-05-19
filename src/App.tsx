import React from 'react';
import { Tabs, TabsProps } from 'antd';
import './App.css';
import { Auth, onAuthStateChanged } from 'firebase/auth';
import firebaseAuthStore from './stores/firebaseAuthStore';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [shouldShowSignUp, setShouldShowSignUp] = React.useState(true);

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Login',
      children: <LoginForm onFinish={console.log} onFinishFailed={console.log} />
    },
    {
      key: '2',
      label: 'Sign up',
      children: <LoginForm onFinish={console.log} onFinishFailed={console.log} />
    }
  ];

  React.useEffect(() => {
    onAuthStateChanged(firebaseAuthStore.firebaseAuth as Auth, (user) => {
      setIsLoggedIn(user ? true : false);
    })
  }, []);

  return (
    isLoggedIn ?
    null :
    <Tabs defaultActiveKey='1' items={tabItems} onChange={console.log} />
  );
}

export default App
