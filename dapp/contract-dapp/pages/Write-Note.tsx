import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

import styles from "../styles/WriteNote.module.css";

const WriteNote: NextPage = () => { 
   return (
    <div className={styles.container}> 
      
         <ConnectWallet colorMode="light"accentColor="#000000" />
              <p>WriteNote</p>
          
      </div>

          
   );
};

export default WriteNote;