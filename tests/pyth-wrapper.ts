import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PythWrapper } from "../target/types/pyth_wrapper";

describe("pyth-wrapper", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PythWrapper as Program<PythWrapper>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
