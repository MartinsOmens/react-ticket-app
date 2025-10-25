
import {  Github, Twitter, Linkedin, } from "lucide-react";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Ticketly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
