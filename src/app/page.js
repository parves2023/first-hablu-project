"use client"
import { useState } from "react";
import State from "./State";

import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState(0);
  const add = () =>{
    setValue(value + 1)
  }
  let fun = () => {
    alert("hello me")
  }


  const [namevalue, setnameValue] = useState("parves");
  const cngname = () =>{
    setnameValue("eshan")
  }

  return (
    <main className="container mx-auto justify-center items-center flex flex-col">
      <div>
        it is perves
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button onClick={fun}>
      click me
    </button>
    <br />
    <br />
    <br />

    <h1>value is {value}</h1>
    <button onClick={add}>Increase value</button>

    <br />
    <br />
    <br />

    <h1>value is {namevalue}</h1>
    <button onClick={cngname}>Increase value</button>

    <br />
    <br />
    <br />
    <State />

    </main>
  );
}
