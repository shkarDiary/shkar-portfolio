import Link from "next/link";
import React from "react";
interface Props {
  url: string;
  name: string;
}
const LinkButton: React.FC<Props> = ({ url, name }) => {
  return (
    <Link
      className="mt-4 bg-secondary-200 px-7 py-2 text-white text-xl rounded-full md:text-3xl "
      href={url}
    >
      {name}
    </Link>
  );
};
export default LinkButton;
