export default function Footer() {
    return (
      <footer className="bg-[#00B8A9] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} Joe Adamo. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-white hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com" className="text-white hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" className="text-white hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }