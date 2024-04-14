function Footer() {
  return (
    <div className="flex justify-center items-center flex-col text-neutral-400 mb-6 gap-2">
      <div className="flex gap-2">
        ----- Made By
        <a
          className="pl-1 text-blue-700 font-medium "
          href="https://twitter.com/SomeshMetri"
        >
          Somesh Metri
        </a>
        <span className="flex">
          , Made With
          <div className="h-10 w-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.5 47.5"
              id="heart"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  fill="#dd2e44"
                  d="M3.067 25.68c0 8.799 12.184 12.06 15.933 1.874 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 3.999 19 3.999S3.067 16.12 3.067 25.68"
                ></path>
              </g>
            </svg>
          </div>
        </span>
        -----
        <div>
          <div className="text-netural-300 underline">
            <a href="">Get the source code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
