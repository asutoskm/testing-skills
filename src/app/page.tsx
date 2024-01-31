"use client";
import ConnectButton from "@/components/ConnectButton";
import Loader from "@/components/Loader";
import { useAccount } from "wagmi";

function Home() {
  const { isConnected, address, isConnecting } = useAccount();
  console.log("mini", useAccount());
  return (
    <div className="flex justify-center items-center flex-1">
      {isConnecting ? (
        <Loader />
      ) : (
        <>{isConnected ? address : <ConnectButton />}</>
      )}
    </div>
  );
}
export default Home;
