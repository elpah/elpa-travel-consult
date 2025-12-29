import { useMemo } from 'react';
import { Container, Theme } from './settings/types';
import { HomePage } from './components/pagesComponent/HomePage';

let theme: Theme = 'light';
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const memComponent = useMemo(() => {
    return <HomePage />;
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">{memComponent}</div>
    );
  } else {
    return memComponent;
  }
}

export default App;
