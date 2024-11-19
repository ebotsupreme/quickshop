import { LINKS, PRODUCT_CATEGORY_URL } from "@/app/lib/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      {/* Deals */}
      <div className="flex w-full justify-between bg-black text-white">
        <div className="p-3 bg-red-500">Top Deals</div>
        <div className="p-3">See All Deals</div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto">
        {/* Login */}
        <div className="flex justify-between w-full py-3">
          <div>
            Sign up for emails{` `}
            <span>Sign Up</span>
          </div>
          <div>Sign In</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          {/* Logo and Search bar */}
          <div className="flex w-full justify-between">
            <div className="w-1/5 p-4">
              <div>LOGO Image</div>
            </div>
            <div className="w-3/5 p-4">
              <div>Search Bar Here</div>
            </div>
            <div className="flex justify-end w-1/5 p-4">
              <div>Cart Image</div>
            </div>
          </div>
          {/* NAV */}
          <div className="flex justify-between list-none w-full py-2 relative ">
            {" "}
            {LINKS.map((link) => (
              <div key={link.name} className="group">
                <Link key={link.name} href={link.href}>
                  <p className="font-bold hover:underline">{link.name}</p>
                </Link>
                {link.name !== "All" && (
                  <div className="absolute left-0 top-2/3 w-full flex invisible group-hover:visible hover:visible flex-col bg-white z-10 py-4 px-2">
                    <p className="font-bold underline pb-1">{link.name}</p>
                    {link.dropdownContent?.map((item, index) => (
                      <Link key={index} href={`${PRODUCT_CATEGORY_URL}${item}`}>
                        <p className="hover:underline w-2/12">
                          {item.replace("-", " ")}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
