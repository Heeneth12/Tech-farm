import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                About Us
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Produce Organic Food For Your Family
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The central objective of this Website is to create a dynamic and
                collaborative community for farmers and buyers, where farmers
                can list their crops, specify quality parameters, and set prices
                based on their expertise and the prevailing market conditions.
                Buyers, in turn, can directly interact with farmers, make
                purchase offers, or place competitive bids, fostering
                transparency and fair trade.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/41ricefarming4NVT_1.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                This Website offers a revolutionary solution by creating a
                vibrant digital platform that unites farmers and buyers,
                creating a virtual marketplace where both parties can engage
                directly. The cornerstone of this innovation lies in empowering
                farmers to list their crops, define quality parameters, and set
                prices that reflect the true worth of their produce, all while
                aligning with market dynamics.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Consumers.
                    </strong>{" "}
                    Buyers, on the other hand, are offered a unique opportunity
                    to interact directly with farmers. They can make purchase
                    offers, initiate bidding processes, and collaboratively
                    shape the market dynamics through transparent and fair-trade
                    practices. This seamless interaction between producers and
                    consumers brings about a paradigm shift in the agricultural
                    ecosystem, eliminating unnecessary intermediaries and
                    ensuring equitable returns for farmers
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Community Hub for Farmers:
                    </strong>{" "}
                    Profiles and Networking: Farmers can create profiles
                    showcasing their produce, farming practices, and location,
                    allowing them to connect and network with other farmers.
                    Knowledge Sharing: Forums or discussion boards where farmers
                    can share best practices, ask questions, and seek advice
                    from experts or experienced farmers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Marketplace:
                    </strong>{" "}
                    An integrated marketplace where farmers can list their
                    produce, detailing quantity, quality, and pricing, enabling
                    direct sales to consumers or businesses.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                TechForm focused on creating a farming community and an online
                supply chain for farmers and consumers would be an innovative
                solution.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Supply Chain Management
              </h2>
              <p className="mt-6">
                Logistics: Tools for managing and optimizing the supply chain,
                including tracking inventory, coordinating shipments, and
                ensuring timely deliveries. Quality Assurance: Systems to
                maintain quality standards throughout the process, including
                packaging guidelines and quality checks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
