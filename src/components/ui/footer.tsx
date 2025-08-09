import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-supporting-gray pt-12 pb-4"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold text-navy tracking-premium font-montserrat">
              Envobit
            </h1>
            <p className="text-gray-600 mt-2">
              From brilliant code to beautiful scale
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/envobit/"
              className="text-gray-600 hover:text-light-blue transition-colors duration-200"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/envobit/"
              className="text-gray-600 hover:text-light-blue transition-colors duration-200"
              data-testid="link-twitter"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/envobit"
              className="text-gray-600 hover:text-light-blue transition-colors duration-200"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-supporting-gray pt-8 text-center text-gray-500 text-sm">
          © 2025 Envobit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
