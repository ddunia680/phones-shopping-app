import { Route, Routes } from 'react-router-dom';
import './App.css';

import Builder from './containers/builder';
import asyncComponent from './hoc/asyncComponent/asyncComponet';
function App() {

  const AsyncCartLoad = asyncComponent(() => {
    return import('./containers/Cart/Cart');
  });

  const AsyncDetailsLoad = asyncComponent(() => {
    return import('./containers/FullArticleDetails/ArticleDetails');
  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Builder />}/>
        <Route path='/cart' element={<AsyncCartLoad/>}/>
        <Route path='/details' element={<AsyncDetailsLoad />}/>
      </Routes>
      <Builder/>
    </div>
  );
}

export default App;