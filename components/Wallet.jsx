import React, { useEffect, useRef, useState, useContext } from 'react';
import Web3Modal from 'web3modal';
import Web3 from "web3";
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
// import Providers from "./Providers"
import { Context } from "../context/context";

export default function Wallet() {

    const { state, dispatch } = useContext(Context);

    const [account, setAccount] = useState()
    const [web3, setWeb3] = useState();
    const [provider, setProvider] = useState();
    const [modalClose, setModalClose] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    //trying to move providerOptions to another file, not working yet
    // const providerOptions = Providers;

    console.log(isConnected)
    console.log(account)

     const providerOptions = {
      // set to Rinkeby right now, for Matic switch to - {
      // rpcUrl: 'https://rpc-mainnet.maticvigil.com',
      // chainId: 137
      // }
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "https://rinkeby.infura.io/v3/7b547bd8017f43ddaa08afe125da3101" // required
          }
        },
        coinbasewallet: {
            package: CoinbaseWalletSDK, // Required
            options: {
              appName: "Fourth Wave", // Required
              infuraId: "https://rinkeby.infura.io/v3/7b547bd8017f43ddaa08afe125da3101", // Required
              rpc: "", // Optional if `infuraId` is provided; otherwise it's required
              chainId: 4, // Optional. It defaults to 1 if not provided
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
                infuraId: "https://rinkeby.infura.io/v3/7b547bd8017f43ddaa08afe125da3101",
                chainId: 4,
                darkMode: true,
                appLogoUrl: null
            }
          },
          torus: {
            package: Torus, // required
            options: {
              networkParams: {
                chainId: 4, // optional
              },
              config: {
                buildEnv: "development" // optional
              }
            }
          },
          fortmatic: {
            package: Fortmatic, // required
            options: {
              key: "pk_test_833D9835F51A895A", // required
              network: {
                chainId: 4
              } // if we don't pass it, it will default to localhost:8454
            }
          },
          portis: {
            package: Portis, // required
            options: {
              id: "1de19b04-0c2b-4656-b54b-b74a35030621" // required
            }
          },
          authereum: {
            package: Authereum // required
          },
          frame: {
            package: ethProvider // required
          },
          bitski: {
            package: Bitski, // required
            options: {
              clientId: "33f39af1-5de9-43ef-baf3-cfb45891dcef", // required
              callbackUrl: "BITSKI_CALLBACK_URL" // required
            }
          },
          venly: {
            package: Venly, // required
            options: {
              clientId: "Testaccount-capsule" // required
            }
          },
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
          //     infuraId: "https://rinkeby.infura.io/v3/7b547bd8017f43ddaa08afe125da3101" // required
          //   }
          // },
          opera: {
            package: true
          },
          sequence: {
            package: sequence, // required
            options: {
              appName: "Fourth Wave", // optional
              defaultNetwork: "rinkeby" // optional
            }
          },
          clvwallet: {
            package: true
          },
          // web3auth: {
          //   package: Web3Auth, // required
          //   options: {
          //     infuraId: "https://rinkeby.infura.io/v3/7b547bd8017f43ddaa08afe125da3101" // required
          //   }
          // },
          bitkeep: {
            package: true
          },
          starzwallet: {
            package: true
          }
      };



  const connectWallet = async () => { 
      try {
        const web3Modal = new Web3Modal({
          network: "rinkeby",
          theme: {
            background: "rgb(74, 64, 79)",
            main: "rgb(240, 237, 242)",
            secondary: "rgb(198, 182, 207)",
            border: "rgba(171, 178, 214, 0.14)",
            hover: "rgb(185, 172, 191)"
          },
          cacheProvider: true,
          providerOptions 
        });

      const provider = await web3Modal.connect();
      //if needed for breaking this into multiple functions
      setProvider(provider);
      let web3 = new Web3(provider); 

      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setAccount(accounts);
      setIsConnected(true);
      setWeb3(web3);

      dispatch({
        type: "CONNECTED_WALLET",
        payload: accounts,
      })

      // Subscribe to provider connection
      provider.on("connect", (info) => {
        console.log(info);
        console.log("connecting")
        setIsConnected(true);
      });


      // Subscribe to accounts change
      provider.on("accountsChanged", (accounts) => {
        setIsConnected(false);
        console.log(accounts);
        console.log("accounts changing")
        setAccount(accounts);
        if(accounts == []){
          console.log("getting here?")
          setIsConnected(false);
          dispatch({
            type: "CONNECTED_WALLET",
            payload: null,
          })
        }else{
          setIsConnected(true);
          dispatch({
            type: "CONNECTED_WALLET",
            payload: accounts,
          })
        }

      });

      // Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
      });

      // Subscribe to provider disconnection
      provider.on("disconnect", (error) => {
        console.log("disconnecting")
        console.log(error);
        setIsConnected(false);
      });
      }
      catch(err){
        console.log(err);
        setModalClose(true);
      }
  }


    return (
        <div>
            <div>
              <div>{!isConnected && <button onClick={(connectWallet)}>CONNECT</button>}</div>
              <div>
              {modalClose ? "Please your connect wallet!" : ""}
              </div>
              </div>
              {JSON.stringify(state)}
            </div>
    )

}

