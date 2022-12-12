import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => { 
   return (
    <div className={styles.container}> 
      
         <ConnectWallet colorMode="light"accentColor="#72D487" />
         <p>Home</p>
          
      </div>

          
   );
};

export default Home;
