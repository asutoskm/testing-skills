import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

 export default createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})