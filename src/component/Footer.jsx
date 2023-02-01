const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-teal-500 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-300 sm:text-center ">
          © 2023
          <a href="/" className="hover:underline">
            SnapScape
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-300 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
