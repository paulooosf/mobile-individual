import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Pages/Home';
import { Disciplina } from './src/Pages/Disciplina';

// As telas são "Home" e "Disciplina", sendo a Home a principal.

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Home/>
      {/* <Disciplina/> */}
    </>
  );
}
