import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9161Ea6371111C8b21f7A0C02EbF1dB6750B9F0D");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bunny",
        description: "This NFT will give you access to Bunny DAO!",
        image: readFileSync("scripts/assets/bunny.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
