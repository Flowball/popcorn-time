import Recommended from "@/components/Recommended";
import Trending from "@/components/Trending";

export default function Home() {
   return (
      <main className="container">
         <Trending />
         <Recommended />
      </main>
   );
}
