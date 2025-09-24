import { BrowserRouter } from 'react-router-dom';
import { Routing } from "./assets/routes/Routing";
import SessionProvider from "./assets/context/SessionProvider";
import FavoritesProvider from './assets/context/FavoritesProvider';

export default function App() {
  return (
    <BrowserRouter>
      <SessionProvider>
        <FavoritesProvider>
          <Routing />
        </FavoritesProvider>
      </SessionProvider>
    </BrowserRouter>
  );
}
