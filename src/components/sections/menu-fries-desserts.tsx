"use client";

import React from 'react';
import Image from 'next/image';

interface MenuItem {
  title: string;
  price: string;
  description: string[];
  dietary?: string;
  image: string;
  maskType?: 'circle' | 'arc';
}

const MenuItemCard: React.FC<MenuItem> = ({ title, price, description, dietary, image, maskType = 'circle' }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
        {/* Geometric Frame Overlay - common to the design */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full border border-[#E1E1E1] opacity-40"></div>
          <span className="absolute -top-[6px] -left-[4px] text-[8px] text-[#E1E1E1]">✦</span>
          <span className="absolute -bottom-[6px] -right-[4px] text-[8px] text-[#E1E1E1]">✦</span>
        </div>
        
        {/* Masked Image Container */}
        <div className={`relative w-[90%] h-[90%] overflow-hidden ${maskType === 'circle' ? 'rounded-full' : 'organic-mask-arch'}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="space-y-3 px-4">
        <h3 className="text-[22px] font-semibold font-display text-primary leading-tight">
          {title} ${price} {dietary && <span className="text-[18px] font-normal italic">({dietary})</span>}
        </h3>
        <div className="space-y-4">
          {description.map((line, idx) => (
            <p key={idx} className="text-[14px] leading-[1.6] text-secondary font-body">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<{ title: string; id: string }> = ({ title, id }) => (
  <div id={id} className="w-full flex flex-col items-center mb-[60px]">
    <h2 className="text-[48px] md:text-[60px] font-display text-primary lowercase tracking-[0.1em] mb-4">
      {title}
    </h2>
    <div className="w-full h-[1px] bg-[#E1E1E1]"></div>
  </div>
);

const FriendzFriesDesserts: React.FC = () => {
  const friesItems: MenuItem[] = [
    {
      title: "Greek Gyro Fries",
      price: "13",
      description: [
        "Hand cut fries topped with gyro, feta cheese, green onions, Greek olives, and tzatziki",
        "Contains: wheat, almonds, coconut"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/greek-gyro-fries.png"
    },
    {
      title: "Loaded Molo Coffee Fries",
      price: "11",
      dietary: "GF",
      description: [
        "Hand-cut fries topped with Molo Coffee, hummus, green olives, green onions, parsley, and tahini sauce",
        "Contains: sesame seeds"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/loaded-falafel-fries.png"
    },
    {
      title: "Loaded Gyro Fries",
      price: "13",
      description: [
        "Hand cut fries topped with gyro, tzatziki, pickled red onions, feta cheese, and Kalamata olives",
        "Contains: wheat, almonds, coconut"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/loaded-gyro-fries.png"
    },
    {
      title: "Loaded Gyro Truffle Fries",
      price: "14",
      description: [
        "Hand-cut fries topped with gyro, drizzled with truffle oil, and finished with Parmesan cheese and truffle mayo",
        "Contains: wheat, coconut"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/loaded-gyro-truffle-fries.png"
    },
    {
      title: "Masala Fries",
      price: "7",
      dietary: "GF",
      description: [
        "Hand-cut fries topped with Indian spices"
      ],
      maskType: 'arc',
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/masala-fries.png"
    },
    {
      title: "Truffle Fries",
      price: "8",
      description: [
        "Hand-cut fries, drizzled with truffle oil and topped with Parmesan cheese and truffle mayo"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/truffle-fries.png"
    },
    {
      title: "Sweet Potato Fries",
      price: "7",
      dietary: "GF",
      description: [
        "Served with ketchup"
      ],
      maskType: 'arc',
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/sweet-potato-fries.png"
    },
    {
      title: "Curly Fries",
      price: "7",
      description: [
        "Served with ketchup",
        "Contains: wheat"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/curly-fries.png"
    },
    {
      title: "Hand-cut Fries",
      price: "6",
      dietary: "GF",
      description: [
        "Served with ketchup"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/hand-cut-fries.png"
    }
  ];

  const dessertItems: MenuItem[] = [
    {
      title: "Chocolate Cocoa Cuckoo Cake",
      price: "10",
      description: [
        "Decadent dark chocolate cake with creamy chocolate buttercream frosting",
        "Contains: wheat, almonds"
      ],
      maskType: 'arc',
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/chocolate-cocoa-cuckoo-cake.png"
    },
    {
      title: "Beetroot & Carrot Halwa",
      price: "10",
      dietary: "GF",
      description: [
        "Beetroot and carrot halwa drizzled with creamy orange coconut cashew cream and topped with pistachios",
        "Contains: oats, cashews, pistachios, coconut"
      ],
      maskType: 'arc',
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beetroot-halwa.png"
    },
    {
      title: "No Bake Chocolate Brownies",
      price: "10",
      dietary: "GF",
      description: [
        "Raw, sugar free, and gluten free with creamy chocolate ganache",
        "Contains: coconut, almonds"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/no-bake-chocolate-brownie.png"
    },
    {
      title: "Chocolate Baklava",
      price: "7",
      description: [
        "Phyllo dough, almonds, chocolate chips, Violife butter, maple syrup, organic cane sugar, rose water and spices",
        "Contains: wheat, almonds, coconut"
      ],
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/chocolate-baklava.png"
    },
    {
      title: "Pistachio Baklava",
      price: "7",
      description: [
        "Phyllo dough, pistachios, Violife butter, maple syrup, organic cane sugar, rose water and spices",
        "Contains: wheat, pistachios, coconut"
      ],
      maskType: 'arc',
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/pistachio-baklava.png"
    }
  ];

  return (
    <div className="bg-background">
      {/* Friendz Fries Section */}
      <section className="container section-padding">
        <SectionHeader title="friendz fries" id="friendz-fries" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {friesItems.map((item, index) => (
            <MenuItemCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Desserts Section */}
      <section className="container section-padding pt-0">
        <SectionHeader title="desserts" id="desserts" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {dessertItems.map((item, index) => (
            <MenuItemCard key={index} {...item} />
          ))}
        </div>
      </section>

      <style jsx global>{`
        .organic-mask-arch {
          border-top-left-radius: 50% 100%;
          border-top-right-radius: 50% 100%;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FriendzFriesDesserts;