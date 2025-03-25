import Link from "next/link";

import { TiWarning } from "react-icons/ti";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <TiWarning className="text-mk-orange size-52 mx-auto" />
        <h1 className="text-center text-4xl font-semibold text-secondary">
          Page Not Found!
        </h1>
        <div className="w-72 mx-auto  flex justify-center">
          <Link href="/">
            <button className="bg-mk-orange cursor-pointer px-10 hover:bg-mk-blue transition-all duration-500 py-2  mt-3">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
