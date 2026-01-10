import React from 'react';
import Image from 'next/image';

const STARTERS_DATA = [
  {
    id: 1,
    title: "Loaded Falafel Nachos $13",
    description: "A bed of crispy pita chips loaded with hummus, tzatziki, falafel, Kalamata olives, tomatoes, pickled red onions, cucumbers, and feta cheese sprinkled with smoked paprika",
    contains: "Contains: wheat, sesame seeds, almonds, coconut",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/loaded-falafel-nachos-2.png",
    maskClass: "organic-mask-arch",
    frame: true
  },
  {
    id: 2,
    title: "7-Layer Hummus Dip $13",
    description: "Hummus, olive oil, tzatziki, cucumbers, cherry tomatoes, Kalamata olives, feta cheese, and pickled red onions sprinkled with smoked paprika. Served with pita bread or pita chips",
    extra: "Choice of protein: falafel, jackfruit or gyro +$5",
    contains: "Contains: wheat, sesame seeds, almonds, coconut",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/7-layer-hummus-dip-3.png",
    maskClass: "organic-mask-circle",
    frame: false
  },
  {
    id: 3,
    title: "Veggie Hummus Trio $13",
    description: "Original hummus, beetroot hummus, and roasted red pepper hummus, olive oil, sesame seeds, smoked paprika, pickled red onions, sunflower seeds, Kalamata olives, served with pita bread or pita chips",
    extra: "Add veggies for +$5",
    contains: "Contains: wheat, sesame seeds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/veggie-hummus-trio-4.png",
    maskClass: "organic-mask-arch",
    frame: true
  },
  {
    id: 4,
    title: "Beet Avocado Toast $13 (GF)",
    description: "Beetroot hummus, avocado, pickled red onions, olive oil, sprinkled with everything bagel seasoning, served on gluten free bread",
    contains: "Contains: sesame seeds, poppy seeds",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beet-avocado-toast-5.png",
    maskClass: "organic-mask-arch",
    frame: true
  },
  {
    id: 5,
    title: "Guacamole $10",
    description: "Choice of pita chips or corn chips (GF)",
    contains: "Contains: wheat",
    image: "https://slelguoygbfzlipylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/guac-6.png",
    maskClass: "organic-mask-circle",
    frame: false
  },
  {
    id: 6,
    title: "Loaded Cheese Nachos $13",
    description: "Corn chips loaded with cheese sauce, black beans, pickled red onions, tomatoes, green onions, jalapeños, guacamole and chopped cilantro",
    extra: "Add gyro + $5",
    contains: "Contains: wheat, soy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/loaded-cheese-nachos-7.png",
    maskClass: "organic-mask-circle",
    frame: false
  }
];

const MenuStarters = () => {
  return (
    <section id="starters" className="bg-background py-[100px]">
      <div className="container">
        {/* Category Header */}
        <div className="mb-[60px] text-center">
          <h2 className="text-[48px] md:text-[60px] font-display lowercase tracking-[0.1em] mb-4">
            starters
          </h2>
          <div className="w-full h-[1px] bg-border mx-auto max-w-[1240px]"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[80px]">
          {STARTERS_DATA.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="relative mb-[30px] w-full max-w-[380px] aspect-square flex items-center justify-center">
                {/* Geometric Frame Decoration */}
                {item.frame && (
                  <div className="absolute inset-0 m-4 border border-[#E1E1E1] pointer-events-none z-10">
                    <span className="absolute -top-[5px] -left-[4px] text-[8px] text-[#E1E1E1]">✦</span>
                    <span className="absolute -bottom-[5px] -right-[4px] text-[8px] text-[#E1E1E1]">✦</span>
                  </div>
                )}
                
                {/* Masked Image */}
                <div className={`relative w-full h-full shadow-soft ${item.maskClass} border-[1px] border-white`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={item.id <= 3}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="max-w-[340px] px-4">
                <h3 className="text-[22px] font-display font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                
                <div className="space-y-4">
                  <p className="text-[14px] font-body text-secondary leading-[1.6]">
                    {item.description}
                  </p>
                  
                  {item.extra && (
                    <p className="text-[14px] font-body text-secondary leading-[1.6]">
                      {item.extra}
                    </p>
                  )}
                  
                  <p className="text-[14px] font-body text-secondary leading-[1.6]">
                    {item.contains}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuStarters;