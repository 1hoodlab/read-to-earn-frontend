import { defineConfig } from "@wagmi/cli";
import { erc20ABI } from "wagmi";
import { etherscan, react } from '@wagmi/cli/plugins'
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
  plugins: [react()],
});
