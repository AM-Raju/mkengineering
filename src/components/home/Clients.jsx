import Marquee from "react-fast-marquee";

const clients = [
  "https://i.ibb.co.com/gFPZFsfD/1888-MILLS-MOA-LOGO-4-C.webp",
  "https://i.ibb.co.com/HL9DXG8W/Amader-Kotha.webp",
  "https://i.ibb.co.com/Q33VMpmw/Apollo.webp",
  "https://i.ibb.co.com/5W0m3PCH/Asian-Appearal.webp",
  "https://i.ibb.co.com/8L7vYLFZ/Aspire-Garments-Ltd.webp",
  "https://i.ibb.co.com/7xZGhcZy/Avery-Denninson.webp",
  "https://i.ibb.co.com/wZ24n43Z/Azmat-Group.webp",
  "https://i.ibb.co.com/XkJVLmqf/bando.webp",
  "https://i.ibb.co.com/tTqZD7FG/Basundhara-oil-and-gas.webp",
  "https://i.ibb.co.com/k2RfCrD1/bitopi-group.webp",
  "https://i.ibb.co.com/6M9867n/Camp-Valley.webp",
  "https://i.ibb.co.com/JWxz3gcq/Confidence-Power.webp",
  "https://i.ibb.co.com/LhNgNhN4/Envoy-Group.webp",
  "https://i.ibb.co.com/JwTBTkrJ/fashion-flow.webp",
  "https://i.ibb.co.com/BM2zLGr/Gear-Group.webp",
  "https://i.ibb.co.com/BH4XDNHF/hameem-group.webp",
  "https://i.ibb.co.com/FbQjXYrR/hkd.webp",
  "https://i.ibb.co.com/4n8xLjRM/Hop-Lun.webp",
  "https://i.ibb.co.com/nqnKN5hC/Jamuna-Group.webp",
  "https://i.ibb.co.com/p6XRGp8c/mainetti.webp",
  "https://i.ibb.co.com/TBt7BSDN/Manohar-Filaments.webp",
  "https://i.ibb.co.com/RTkpJZXV/mascot.webp",
  "https://i.ibb.co.com/Y4jmZKVF/Max-Group.webp",
  "https://i.ibb.co.com/xqv6DDPk/Methila-Group.webp",
  "https://i.ibb.co.com/TD38qQHr/MZM.webp",
  "https://i.ibb.co.com/Dgz4MVdJ/Nourish-logo.webp",
  "https://i.ibb.co.com/LD8ht7WN/paragongroup-logo.webp",
  "https://i.ibb.co.com/dwLwvvBz/Park-Bd.webp",
  "https://i.ibb.co.com/RkpZkyG1/Pou-Hung.webp",
  "https://i.ibb.co.com/4gCYZFMr/Pran-RFL.webp",
  "https://i.ibb.co.com/9HJr70n1/renaisance.webp",
  "https://i.ibb.co.com/nsSRrQJk/Shahi.webp",
  "https://i.ibb.co.com/C5xjFSyr/Simba-Fashion.webp",
  "https://i.ibb.co.com/prrcVPWY/Team.webp",
  "https://i.ibb.co.com/j95Yp7QK/thun-hing.webp",
  "https://i.ibb.co.com/KjSYPZYk/Total-Gas.webp",
  "https://i.ibb.co.com/kT0rtb9/youngone.webp",
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
                className="h-full object-contain p-2"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
