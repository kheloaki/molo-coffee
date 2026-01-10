"use client";

import React from 'react';
import Image from 'next/image';

interface MenuItem {
  title: string;
  price: string;
  description: string;
  tags?: string;
  image: string;
  maskType: 'circle' | 'arch-left' | 'arch-right' | 'plate' | 'geometric-arch';
}

const mainItems: MenuItem[] = [
    {
      title: "BYO Pita Wrap or Bowl",
      price: "$14",
      description: "Choice of toppings & sauce in a pita wrap or bowl. Choice of protein: Molo Coffee, jackfruit or gyro + $3. Add-ons: feta, cheddar or parmesan cheese, avocado, olives + $2 each. Gluten free without pita bread, tabbouleh and gyro",
      tags: "Contains: wheat, sesame seeds, almonds, coconut, soy",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/build-your-own-8.png",
      maskType: "plate"
    },
    {
      title: "Tabbouleh Bowl",
      price: "$16",
      description: "Tabbouleh, Molo Coffee, chickpeas, cucumber mix, tomatoes, pickled red onions, feta cheese, and lemon vinaigrette. Add gyro + $5",
      tags: "Contains: wheat, coconut, sesame seeds",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/tabbouleh-bowl-9.png",
      maskType: "plate"
    },
    {
      title: "Original Molo Coffee Wrap",
      price: "$13",
      description: "Hummus, cucumber pickles, tomatoes, radishes, mint, parsley, Molo Coffee, and tahini sauce, served in pita bread",
      tags: "Contains: wheat, sesame seeds",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/original-falafel-wrap-10.png",
      maskType: "circle"
    },
    {
      title: "Beyond Kebab",
      price: "$21",
      description: "Beyond kebab, turmeric rice, grilled onions, grilled tomatoes, and cucumber pickles, served with Indian sauce, topped with parsley",
      tags: "Contains: wheat",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beyond-kebab-11.png",
      maskType: "circle"
    },
    {
      title: "Desi Molo Coffee Plate",
      price: "$16 (GF)",
      description: "Molo Coffee, hummus, turmeric, rice, grilled onions, grilled tomatoes, cucumber, pickles, served with Indian sauce, topped with parsley. Add pita bread for + $2",
      tags: "Contains: sesame seeds",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/desi-falafel-plate-12.png",
      maskType: "circle"
    },
    {
      title: "Beyond Burger",
      price: "$17",
      description: "Beyond burger patty (GF), cheese, tomato slices, pickled red onions, lettuce, avocado, house garlic sauce in a sesame bun. Served with hand-cut fries. Sub sweet potato fries for + $1",
      tags: "Contains: wheat, sesame seeds, coconut",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beyond-burger-13.png",
      maskType: "circle"
    },
    {
      title: "Beetroot Molo Coffee Burger",
      price: "$17",
      description: "Beetroot Molo Coffee patty (GF), avocado, tomatoes, pickled red onions, lettuce, tzatziki, and hummus in a sesame bun. Served with sweet potato fries",
      tags: "Contains: wheat, sesame seeds, almonds, GF oats. Sub multigrain gluten free bread $3",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beetroot-falafel-burger-14.png",
      maskType: "arch-right"
    },
    {
      title: "Quesadilla Trio",
      price: "$19",
      description: "3 flour quesadillas with gyro, jackfruit, and Molo Coffee, melted cheddar cheese and topped with chipotle aioli and green onions",
      tags: "Contains: wheat, coconut, soy",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/quesadilla-trio-15.png",
      maskType: "circle"
    },
  {
    title: "Gyro Burger",
    price: "$18",
    description: "Gyro protein, tzatziki, lettuce, tomatoes, pickled red onions, feta cheese, and Kalamata olives in a sesame bun. Served with hand-cut fries",
    tags: "Contains: wheat, sesame seeds, almonds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/gyro-burger-16.png",
    maskType: "arch-left"
  },
  {
    title: "Gyro Wrap",
    price: "$16",
    description: "Gyro protein, tzatziki, spicy garlic, lettuce, tomatoes, cucumbers, cucumber pickles, sumac onions, feta cheese, parsley, cilantro, green onions served in pita bread",
    tags: "Contains: wheat, coconut, almonds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/gyro-wrap-17.png",
    maskType: "geometric-arch"
  },
  {
    title: "Tofu ‘Egg’ Salad Sandwich",
    price: "$17",
    description: "Tofu, mayo, mustard, celery, green onions, radishes, black salt, turmeric, and lettuce, served on sourdough pullman bread. Served with choice of soup. Sub multigrain gluten free bread + $3",
    tags: "Contains: wheat, soy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/tofu-egg-salad-18.png",
    maskType: "circle"
  },
  {
    title: "Tofu ‘Egg’ Salad Tacos",
    price: "$15",
    description: "3 corn, wheat or flour tortillas filled with tofu ‘egg’ salad, topped with red cabbage, pickled red onions, radishes, green onions, avocado and served with chipotle aioli",
    tags: "Contains: wheat, soy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/tofu-egg-taco-19.png",
    maskType: "geometric-arch"
  },
  {
    title: "Jackfruit ‘Carnitas’ Tacos",
    price: "$15",
    description: "3 corn, wheat or flour tortillas filled with shredded “pulled” Jackfruit, topped with red cabbage, pickled red onions, radishes, green onions, avocado and served with chipotle aioli",
    tags: "Contains: wheat, soy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/jackfruit-carnitas-tacos-20.png",
    maskType: "circle"
  },
  {
    title: "Gyro ‘Carnitas’ Tacos",
    price: "$17",
    description: "3 corn, wheat or flour tortillas filled with gyro protein, topped with red cabbage, pickled onions, radishes, green onions, avocado and served with chipotle aioli",
    tags: "Contains: wheat, almonds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/gyro-carnitas-tacos-21.png",
    maskType: "circle"
  },
  {
    title: "Just Egg Scramble",
    price: "$16",
    description: "Bell peppers, onions, garlic, zucchini, broccoli, spinach, and avocado seasoned with black salt and topped with feta cheese. Served with French baguette slices",
    tags: "Contains: wheat, coconut",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/just-egg-scramble-22.png",
    maskType: "plate"
  },
    {
      title: "Baked Feta Pasta",
      price: "$16",
      description: "Farfalle pasta, roasted cherry tomatoes, roasted garlic, feta cheese, fresh herbs. Served with French baguette slices. Choice of protein: Molo Coffee, jackfruit or gyro + $5",
      tags: "Contains: wheat, coconut",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/baked-feta-pasta-23.png",
      maskType: "circle"
    },
    {
      title: "Mediterranean Harvest Pasta",
      price: "$16",
      description: "Farfalle pasta, green bell peppers, roasted red peppers, tomatoes, black olives, feta cheese, basil, red crushed pepper, and black pepper. Served with French baguette slices",
      tags: "Contains: wheat, coconut",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/harvest-pasta-24.png",
      maskType: "arch-right"
    },
    {
      title: "Crispy Baked Mac ‘N Cheese",
      price: "$16",
      description: "Elbow macaroni, white miso cheese sauce, crispy bread crumb topping, served with French baguette slices. Choice of protein: Molo Coffee, jackfruit or gyro + $5",
      tags: "Contains: wheat, coconut, soy",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/mac-n-cheesse-25.png",
      maskType: "circle"
    }
];

const getImageMask = (type: MenuItem['maskType']) => {
  switch (type) {
    case 'circle':
      return 'rounded-full aspect-square overflow-hidden';
    case 'arch-left':
      return 'rounded-tl-[50% 100%] rounded-tr-[50% 100%] overflow-hidden';
    case 'arch-right':
      return 'rounded-tl-[50% 100%] rounded-tr-[50% 100%] overflow-hidden';
    case 'plate':
      return 'rounded-full scale-95 aspect-square overflow-hidden shadow-soft';
    case 'geometric-arch':
      return 'organic-mask-arch geometric-frame aspect-square';
    default:
      return 'rounded-full aspect-square overflow-hidden';
  }
};

const MainSection: React.FC = () => {
  return (
    <section id="main" className="menu-category pt-[100px] pb-[75px]">
      <div className="container">
        <div className="mb-[60px] relative">
          <div className="flex justify-center mb-[30px]">
            <h2 className="text-[60px] leading-[1.1] font-display text-center tracking-[0.1em] lowercase">
              Main
            </h2>
          </div>
          <div className="h-[1px] w-full bg-[#E1E1E1]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[80px]">
          {mainItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`relative w-[345px] max-w-full mb-[35px] ${item.maskType === 'geometric-arch' ? 'geometric-frame' : ''}`}>
                <div className={`${getImageMask(item.maskType)} w-full relative`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
              
              <div className="max-w-[340px] px-2">
                <h3 className="font-display text-[22px] font-semibold text-black tracking-[0.02em] mb-[15px]">
                  {item.title} {item.price}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="font-body text-[14px] leading-[1.6] text-[#666666]">
                    {item.description}
                  </p>
                  {item.tags && (
                    <p className="font-body text-[14px] leading-[1.6] text-[#666666]">
                      {item.tags}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .organic-mask-arch {
          border-top-left-radius: 50% 100%;
          border-top-right-radius: 50% 100%;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          overflow: hidden;
        }

        .geometric-frame {
          position: relative;
        }

        .geometric-frame::before,
        .geometric-frame::after {
          content: '✦';
          position: absolute;
          font-size: 10px;
          color: #E1E1E1;
          z-index: 10;
        }

        .geometric-frame::before { 
          top: -8px; 
          left: -6px; 
        }
        
        .geometric-frame::after { 
          bottom: -8px; 
          right: -6px; 
        }

        .shadow-soft {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
      `}</style>
    </section>
  );
};

export default MainSection;