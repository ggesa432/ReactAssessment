import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './styles.css';
import Success from './Success';
import UserSignIn from './UserSignIn';
import LifecycleDemo from './LifecycleDemo';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
      <Success />
      <UserSignIn />
      <LifecycleDemo />
    </div>
  );