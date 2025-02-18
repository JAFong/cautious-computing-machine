"use client";

import { useState } from "react";
import schema from "./schema";
import uischema from "./uischema";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Success from "./components/Success";

export default function Home() {
  const [data, setData] = useState(null);
  const [fieldErrors, setFieldErrors] = useState(null);
  const [formError, setFormError] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (fieldErrors && fieldErrors?.length) {
      setFormError("Please fill out the required fields");
      window.scrollTo(0, 0);
      return;
    }

    if (!file) {
      setFormError("Please upload a resume");
      window.scrollTo(0, 0);
      return;
    }

    setFormError("");

    const formData = new FormData();
    formData.append("document", file);
    formData.append("data", JSON.stringify(data));

    fetch("/submitLeads", {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitSuccessful(true);
      });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  if (isSubmitSuccessful) {
    return <Success />;
  }

  return (
    <>
      <div className="bg-[url(https://placehold.co/1600x400)] bg-cover bg-no-repeat h-[400px] mb-[20px]">
        <div className="font-bold text-5xl text-left absolute top-[80px] left-1/2 transform -translate-x-1/2">
          Get An Assessment Of Your Immigration Case
        </div>
      </div>
      {formError && (
        <div className="w-[300px] mx-auto bg-red-300 rounded-md p-[6px] text-center mb-[20px]">
          {formError}
        </div>
      )}
      <div className="text-center flex flex-col items-center px-[300px]">
        <FontAwesomeIcon className="text-5xl" icon={faFile} />
        <div className="font-bold text-xl">
          Want to understand your visa options?
        </div>
        <div className="font-semibold text-md w-[500px] mb-[20px]">
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals
        </div>
        <div className="w-[500px]">
          <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data, errors }) => {
              setData(data);
              setFieldErrors(errors);
            }}
          />

          <div className="my-[20px] text-left">
            <label htmlFor="document">Upload Resume:</label>
            <input
              className="cursor-pointer bg-gray-300 p-[10px] rounded-md w-[500px] mt-[10px]"
              type="file"
              id="document"
              name="document"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <button
          className="bg-black text-white w-[500px] h-[50px] rounded-md mb-[20px] cursor-pointer hover:bg-gray-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
