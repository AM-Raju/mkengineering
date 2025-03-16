import Marquee from "react-fast-marquee";

const clients = [
  "https://i.ibb.co.com/v4gpDw6Z/1888-MILLS-MOA-LOGO-4-C.webp",
  "https://i.ibb.co.com/gMjjGG4N/Amader-Kotha.webp",
  "https://i.ibb.co.com/23NY4rJf/Apollo.webp",
  "https://i.ibb.co.com/hxf0D9S1/Asian-Appearal.webp",
  "https://i.ibb.co.com/jP41ZzsY/Aspire-Garments-Ltd.webp",
  "https://i.ibb.co.com/QFJdcDYX/Avery-Denninson.webp",
  "https://i.ibb.co.com/1YcTMw8h/Azmat-Group.webp",
  "https://i.ibb.co.com/60k0tJbc/bando.webp",
  "https://i.ibb.co.com/WWHbsWkB/Basundhara-oil-and-gas.webp",
  "https://i.ibb.co.com/4nPGbq73/bitopi-group.webp",
  "https://i.ibb.co.com/B5CFZv5D/Camp-Valley.webp",
  "https://i.ibb.co.com/ch9xPJrs/Confidence-Power.webp",
  "https://i.ibb.co.com/wGHSYMf/Envoy-Group.webp",
  "https://i.ibb.co.com/4RH9LhwC/fashion-flow.webp",
  "https://i.ibb.co.com/BVMcxj8T/Gear-Group.webp",
  "https://i.ibb.co.com/SDsst2TP/hameem-group.webp",
  "https://i.ibb.co.com/Q3sbJ1rs/hkd.webp",
  "https://i.ibb.co.com/fYfwD6YS/Hop-Lun.webp",
  "https://i.ibb.co.com/hR3r3pFh/Jamuna-Group.webp",
  "https://i.ibb.co.com/VYvDKw73/mainetti.webp",
  "https://i.ibb.co.com/fG4TSyTM/Manohar-Filaments.webp",
  "https://i.ibb.co.com/TDb2vvxh/mascot.webp",
  "https://i.ibb.co.com/BH5ys4NF/Max-Group.webp",
  "https://i.ibb.co.com/jPs9QGD3/Methila-Group.webp",
  "https://i.ibb.co.com/FLtLxgdH/MZM.webp",
  "https://i.ibb.co.com/V0CGw9xR/nourish-logo-png-seeklogo-543252.webp",
  "https://i.ibb.co.com/ccpRDgTG/paragongroup-logo.webp",
  "https://i.ibb.co.com/chgtXpbg/Park-Bd.webp",
  "https://i.ibb.co.com/Kpj09KV7/Pou-Hung.webp",
  "https://i.ibb.co.com/FL6gX9vZ/Pran-RFL.webp",
  "https://i.ibb.co.com/gFR87DQ6/renaisance.webp",
  "https://i.ibb.co.com/993LS5BM/Shahi.webp",
  "https://i.ibb.co.com/tp21KN0V/Simba-Fashion.webp",
  "https://i.ibb.co.com/zWG0yWdP/Team.webp",
  "https://i.ibb.co.com/tw0bGvrg/thun-hing.webp",
  "https://i.ibb.co.com/wrWhtmkb/Total-Gas.webp",
  "https://i.ibb.co.com/RpYL5Q8H/youngone.webp",
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
