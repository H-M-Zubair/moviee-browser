import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="py-12 mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MovieMania</h3>
            <p className="text-sm">
              Your ultimate destination for all things cinema. Discover, watch,
              and love movies with us.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/now-showing"
                  className="hover:text-white transition-colors"
                >
                  Now Showing
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/genres"
                  className="hover:text-white transition-colors"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-2">
              Stay updated with the latest movie news and releases.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} MovieMania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
