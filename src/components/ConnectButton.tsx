"use client"
import { CONNECT } from "@/constants/constant";
import { useT } from "@transifex/react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

function ConnectButton() {
  const { connect } = useConnect();
  const t = useT();

  return (
    <button
      className="bg-primary hover:bg-primary/80 rounded-lg px-4 py-2 text-white"
      onClick={() => connect({ connector: injected() })}
    >
      {t(CONNECT)}
    </button>
  );
}

export default ConnectButton;
