import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletLink from 'walletlink';
import Torus from "@toruslabs/torus-embed";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import Authereum from "authereum";
import ethProvider from "eth-provider";
import { Bitski } from "bitski";
import { Venly } from "@venly/web3-provider";
// import DcentProvider from "dcent-provider";
// import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
// import MewConnect from "@myetherwallet/mewconnect-web-client";
import { sequence } from "0xsequence";
// import { Web3Auth } from "@web3auth/web3auth"
console.log(process.env.NEXT_PUBLIC_INFURA_ID)

export const Providers = {

  rpc: {
    1: "https://rpc-mumbai.matic.today",
    2: "https://polygon-rpc.com",
  },
  // walletconnect: {
  //   package: WalletConnectProvider, // required
  //   options: {
  //     infuraId: process.env.NEXT_PUBLIC_INFURA_ID// required
  //   }
  // },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Fourth Wave", // Required
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 137, // Optional. It defaults to 1 if not provided
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  },
  binancechainwallet: {
    package: true
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "Fourth Wave",
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      chainId: 137,
      darkMode: true,
      appLogoUrl: null
    }
  },
  // torus: {
  //   package: Torus, // required
  //   options: {
  //     networkParams: {
  //       chainId: 80001, // optional
  //     },
  //     config: {
  //       buildEnv: "development" // optional
  //     }
  //   }
  // },
  // fortmatic: {
  //   package: Fortmatic, // required
  //   options: {
  //     key: process.env.NEXT_PUBLIC_FORMATIC_KEY, // required
  //     network: {
  //       chainId: 80001
  //     } // if we don't pass it, it will default to localhost:8454
  //   }
  // },
  portis: {
    package: Portis, // required
    options: {
      id: process.env.NEXT_PUBLIC_PORTIS_ID // required
    }
  },
  // authereum: {
  //   package: Authereum // required
  // },
  // frame: {
  //   package: ethProvider // required
  // },
  // bitski: {
  //   package: Bitski, // required
  //   options: {
  //     clientId: process.env.NEXT_PUBLIC_BITSKI_CLIENTID, // required
  //     callbackUrl: "" // required
  //   }
  // },
  // venly: {
  //   package: Venly, // required
  //   options: {
  //     clientId: "Testaccount-capsule" // required
  //   }
  // },
  // dcentwallet: {
  //   package: DcentProvider, // required
  //   options: {
  //     rpcUrl: "INSERT_RPC_URL" // required
  //   }
  // },
  // burnerconnect: {
  //   package: BurnerConnectProvider, // required
  //   options: {
  //     defaultNetwork: "4"
  //   }
  // },
  // mewconnect: {
  //   package: MewConnect, // required
  //   options: {
  //     infuraId:  // required
  //   }
  // },
  // opera: {
  //   package: true
  // },
  // sequence: {
  //   package: sequence, // required
  //   options: {
  //     appName: "Fourth Wave", // optional
  //     defaultNetwork: "mumbai testnet" // optional
  //   }
  // },
  // clvwallet: {
  //   package: true
  // },
  // web3auth: {
  //   package: Web3Auth, // required
  //   options: {
  //     infuraId:  process.env.NEXT_PUBLIC_INFURA_ID// required
  //   }
  // },
  // bitkeep: {
  //   package: true
  // },
  // starzwallet: {
  //   package: true
  // }
};