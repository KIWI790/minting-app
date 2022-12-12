import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

import styles from "../styles/nfts.module.css";

const nfts: NextPage = () => { 
   return (
    <div className={styles.container}> 
      
         <ConnectWallet colorMode="light"accentColor="#000000" />
              <p>nfts</p>
          
      </div>

          
   );
};

export default nfts;