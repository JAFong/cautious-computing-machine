import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Success = () => {
  return (
    <div className="text-center flex flex-col items-center mx-[300px] mt-[100px]">
      <FontAwesomeIcon className="text-5xl" icon={faFile} />

      <h1 className="font-semibold text-md w-[500px] mt-[20px] mb-[20px]">
        Thank You
      </h1>

      <div className="font-semibold">
        Your information was submitted to our team of immigration attorneys.
        Expect an email from hello@tryalma.ai
      </div>
      <Link
        href="/"
        className="bg-black rounded-md text-white mt-[20px] py-[10px] px-[20px]"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default Success;
