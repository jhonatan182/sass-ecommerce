import { initialData } from "./seed";

interface SeedProduct {
  adadsf: string;
}

async function main() {
  console.log(initialData);

  console.log("Seeding database...");
}

(() => {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  main();
})();
