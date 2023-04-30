import { defineConfig } from "@wagmi/cli";
import { erc20ABI } from "wagmi";
import { actions, etherscan, react } from "@wagmi/cli/plugins";
import SnewsABI from "./public/abi/Snews.json";
export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "erc20",
      abi: erc20ABI,
    },
    {
      name: "snews",
      abi: SnewsABI.abi as any,
    },
  ],
  plugins: [
    actions({
      getContract: true,
      readContract: true,
      prepareWriteContract: true,
      watchContractEvent: true,
    }),
    react(),
  ],
});
