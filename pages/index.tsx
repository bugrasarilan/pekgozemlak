import HomeMain from "@/components/homemain";
import LeftMenu from "@/components/leftmenu";

export default function Home() {
  return <main className="flex p-1.5">  

  <div className="flex w-1/4">
  <LeftMenu/>
  </div>

  <div className="flex w-3/4">
  <HomeMain/>
  </div>


  </main>;
}
