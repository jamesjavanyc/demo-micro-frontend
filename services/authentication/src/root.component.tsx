import { useEffect, useState } from "react";

const { test } = require("@skytravel/commons");




export default function Root(props) {

  return (
    <section onClick={() => {
      console.log(test)
    }}>
    {props.name} is mounted!
    </section>
  );
}
