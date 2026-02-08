export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MPCodeLabs</h3>
            <p className="text-slate-400">Think. Code. Deliver.</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 mb-2">
              &copy; {new Date().getFullYear()} MPCodeLabs. All rights reserved.
            </p>
            <p className="text-slate-400">
              <a href="mailto:mplabworks@gmail.com" className="hover:text-blue-400 transition-colors">
                mplabworks@gmail.com
              </a>
              {' | '}
              <a href="tel:9319072500" className="hover:text-blue-400 transition-colors">
                +91 9319072500
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
