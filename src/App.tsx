import { useContext, useState } from 'react';
import './App.css';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import HealthDataContext, { HealthDataContextWrapper } from './context/health-data-context';
import EditHealthData from './component/EditHealthData/EditHealthData';
import { EDIT } from './store/store-types';
import { VIEW } from './store/store-types';
import MainComponent from './component/MainComponent/MainComponent';

function App() {


  return (
    <HealthDataContextWrapper>
      <MainComponent />
    </HealthDataContextWrapper>

  );
}

export default App;
