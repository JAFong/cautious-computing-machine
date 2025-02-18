"use client";

import { useState } from "react";
import Image from "next/image";
import schema from "./schema";
import uischema from "./uischema";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

const styles = {};

export default function Home() {
  const [data, setData] = useState(null);
  return (
    <>
      <div>
        <div>Get An Assessment Of Your Immigration Case</div>
      </div>

      <div className="App">
        <div>Want to understand your visa options?</div>
        <div>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals
        </div>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => setData(data)}
        />
      </div>
    </>
  );
}
