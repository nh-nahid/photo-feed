import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({params: {lang}}) {
  const dictionary = await getDictionary(lang);
console.log(lang);

  return (
   <div>{dictionary.followers}</div>
  );
}
