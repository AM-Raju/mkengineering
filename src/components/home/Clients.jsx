import Marquee from "react-fast-marquee";

const clients = [
  "https://i.ibb.co.com/v3TwQC6/585990604f6ae202fedf28d3.png",
  "https://i.ibb.co.com/pnqgzgY/585990234f6ae202fedf28cf.png",
  "https://i.ibb.co.com/mFHKL5P/584296c8a6515b1e0ad75ad6.png",
  "https://i.ibb.co.com/GHGwF1n/584295d3a6515b1e0ad75ad2.png",
  "https://i.ibb.co.com/v3TwQC6/585990604f6ae202fedf28d3.png",
  "https://i.ibb.co.com/pnqgzgY/585990234f6ae202fedf28cf.png",
  "https://i.ibb.co.com/mFHKL5P/584296c8a6515b1e0ad75ad6.png",
  "https://i.ibb.co.com/GHGwF1n/584295d3a6515b1e0ad75ad2.png",
  "https://i.ibb.co.com/v3TwQC6/585990604f6ae202fedf28d3.png",
  "https://i.ibb.co.com/pnqgzgY/585990234f6ae202fedf28cf.png",
  "https://i.ibb.co.com/mFHKL5P/584296c8a6515b1e0ad75ad6.png",
  "https://i.ibb.co.com/GHGwF1n/584295d3a6515b1e0ad75ad2.png",
  "https://i.ibb.co.com/v3TwQC6/585990604f6ae202fedf28d3.png",
  "https://i.ibb.co.com/pnqgzgY/585990234f6ae202fedf28cf.png",
  "https://i.ibb.co.com/mFHKL5P/584296c8a6515b1e0ad75ad6.png",
  "https://i.ibb.co.com/GHGwF1n/584295d3a6515b1e0ad75ad2.png",
  "https://i.ibb.co.com/v3TwQC6/585990604f6ae202fedf28d3.png",
  "https://i.ibb.co.com/pnqgzgY/585990234f6ae202fedf28cf.png",
  "https://i.ibb.co.com/mFHKL5P/584296c8a6515b1e0ad75ad6.png",
  "https://i.ibb.co.com/GHGwF1n/584295d3a6515b1e0ad75ad2.png",
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Our Valuable Clients
      </h2>
      <div className="space-y-[30px] overflow-hidden">
        <Marquee speed={50} gradient={true}>
          {clients.slice(0, clients.length / 2).map((logo, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] flex justify-center items-center border border-gray-300 mx-2"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="h-full object-contain p-4"
              />
            </div>
          ))}
        </Marquee>
        <Marquee speed={50} gradient={true} direction="right">
          {clients.slice(clients.length / 2).map((logo, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] flex justify-center items-center border border-gray-300 mx-2"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="h-full object-contain p-4"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
