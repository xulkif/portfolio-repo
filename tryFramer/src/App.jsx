import Header from "./component/Header/header";
import Hero from "./component/Hero/hero";
import {motion} from 'framer-motion'
 

export default function App() {
  
      return (
        <main className="flex flex-col gap-0 w-full min-h-screen overflow-hidden m-0 p-0">
          <Header />
          <Hero />
        </main>
        
      );
   
  
}
