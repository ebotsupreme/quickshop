export default function Page() {
  return (
    <div>
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
            <div className="w-1/5">LOGO Image</div>
            <div className="w-3/5">Search Bar Here</div>
            <div className="flex justify-end w-1/5">Cart Image</div>
          </div>
          {/* NAV */}
          <ul className="flex justify-between list-none w-full">
            <li>Men</li>
            <li>Women</li>
            <li>Beauty</li>
            <li>Fragrance</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
        <h1>Hello, Home Page!</h1>
      </div>
    </div>
  );
}
