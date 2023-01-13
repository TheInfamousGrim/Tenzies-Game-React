import React from 'react';
import { motion } from 'framer-motion';

const navigation = {
    social: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/GrimFunk69',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/TheInfamousGrim',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/george-fincher-aa7869214/',
            icon: (props) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path d="M20.4701 1.9999H3.53006C3.33964 1.99725 3.15056 2.03214 2.97362 2.10258C2.79669 2.17302 2.63536 2.27762 2.49886 2.41041C2.36235 2.5432 2.25334 2.70158 2.17805 2.87651C2.10276 3.05143 2.06267 3.23947 2.06006 3.4299V20.5699C2.06267 20.7603 2.10276 20.9484 2.17805 21.1233C2.25334 21.2982 2.36235 21.4566 2.49886 21.5894C2.63536 21.7222 2.79669 21.8268 2.97362 21.8972C3.15056 21.9676 3.33964 22.0025 3.53006 21.9999H20.4701C20.6605 22.0025 20.8496 21.9676 21.0265 21.8972C21.2034 21.8268 21.3648 21.7222 21.5013 21.5894C21.6378 21.4566 21.7468 21.2982 21.8221 21.1233C21.8974 20.9484 21.9375 20.7603 21.9401 20.5699V3.4299C21.9375 3.23947 21.8974 3.05143 21.8221 2.87651C21.7468 2.70158 21.6378 2.5432 21.5013 2.41041C21.3648 2.27762 21.2034 2.17302 21.0265 2.10258C20.8496 2.03214 20.6605 1.99725 20.4701 1.9999V1.9999ZM8.09006 18.7399H5.09006V9.7399H8.09006V18.7399ZM6.59006 8.4799C6.17632 8.4799 5.77953 8.31554 5.48697 8.02298C5.19442 7.73043 5.03006 7.33363 5.03006 6.9199C5.03006 6.50616 5.19442 6.10937 5.48697 5.81681C5.77953 5.52425 6.17632 5.3599 6.59006 5.3599C6.80975 5.33498 7.03223 5.35675 7.24293 5.42378C7.45363 5.49081 7.6478 5.60159 7.81272 5.74886C7.97763 5.89613 8.10958 6.07657 8.19993 6.27838C8.29027 6.48018 8.33698 6.69879 8.33698 6.9199C8.33698 7.141 8.29027 7.35961 8.19993 7.56141C8.10958 7.76322 7.97763 7.94366 7.81272 8.09093C7.6478 8.23821 7.45363 8.34898 7.24293 8.41601C7.03223 8.48304 6.80975 8.50481 6.59006 8.4799V8.4799ZM18.9101 18.7399H15.9101V13.9099C15.9101 12.6999 15.4801 11.9099 14.3901 11.9099C14.0527 11.9124 13.7242 12.0182 13.4489 12.2131C13.1735 12.408 12.9645 12.6826 12.8501 12.9999C12.7718 13.2349 12.7379 13.4825 12.7501 13.7299V18.7299H9.75006C9.75006 18.7299 9.75006 10.5499 9.75006 9.7299H12.7501V10.9999C13.0226 10.527 13.419 10.1374 13.8965 9.8731C14.374 9.60878 14.9146 9.47975 15.4601 9.4999C17.4601 9.4999 18.9101 10.7899 18.9101 13.5599V18.7399Z" />
                </svg>
            ),
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-neutral" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl pb-12 px-6 lg:pb-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="mt-8">
                        <h3 className="text-base font-medium text-white">
                            Check out the code on GitHub!
                        </h3>
                        <div className="mt-4 sm:flex sm:max-w-md">
                            <div className="mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://github.com/TheInfamousGrim/Tenzies-Game-React"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-base font-medium text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    GitHub Source Code
                                </motion.a>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-gray-300">
                            Feel free to connect using my social links below.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <motion.a
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.8 }}
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-gray-400"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </motion.a>
                        ))}
                    </div>
                    <p className="mt-8 text-base text-gray-200 md:order-1 md:mt-0">
                        &copy; 2023 GrimFunk All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
