import Image from "next/image";
import Counter from "./counter"
import Main from "./main"
import List from "./list"
import Project from "./project"

export default function Home() {
  return (
    <>
    <div className ="header">
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>Projects</li>
        <li>Speaking</li>
        <li>Contact</li>



      </ul> 
     
    </div>
    
     <Counter/>
     <Main/>
     <Project/>
         
    </>
  );
}
