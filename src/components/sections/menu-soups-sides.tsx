import React from 'react';
import Image from 'next/image';

const soupItems = [
  {
    title: 'Green Goddess Soup $8 (GF)',
    description: 'Zucchini, broccoli, kale, spinach, onion, garlic, cilantro, parsley, cashew cream',
    contains: 'Contains: cashews',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/green-goddess-soup-26.png'
  },
  {
    title: 'Lentil Soup $7 (GF)',
    description: 'Green lentils, carrots, celery, onions, and spices',
    contains: '',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/lentil-soup-27.png'
  }
];

const sideItems = [
  {
    title: '3 falafels $5 (GF)',
    description: '3 chickpea falafels topped with parsley, served with 1 whole pickle and tahini sauce',
    contains: 'Contains: sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel-3-28.png'
  },
  {
    title: '6 falafels $8 (GF)',
    description: '6 chickpea falafels topped with parsley, served with 2 whole pickles and tahini sauce',
    contains: 'Contains: sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/6-falafels-29.png'
  },
  {
    title: '12 falafels $15 (GF)',
    description: '12 chickpea falafels topped with parsley, served with 4 whole pickles and tahini sauce',
    contains: 'Contains: sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/12-falafel-30.png'
  },
  {
    title: 'Hummus $6',
    description: 'Served with pita bread or pita chips. GF without pita bread',
    contains: 'Contains: wheat, sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/veggie-hummus-trio.png',
    isArch: true
  },
  {
    title: 'Roasted Red Pepper Hummus $7',
    description: 'Served with pita bread or pita chips. GF without pita bread',
    contains: 'Contains: wheat, sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/veggie-hummus-trio.png'
  },
  {
    title: 'Avocado Hummus $8',
    description: 'Served with pita bread or pita chips. GF without pita bread',
    contains: 'Contains: wheat, sesame seeds',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/veggie-hummus-trio.png'
  }
];

const MenuSection = ({ title, id, items, columns = 3 }: { title: string, id: string, items: any[], columns?: number }) => {
  return (
    <section id={id} className="pt-[100px] mb-[75px]">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16 relative">
          <h2 className="text-[48px] md:text-[60px] font-display lowercase tracking-[0.1em] text-black mb-4">
            {title}
          </h2>
          <div className="w-full h-[1px] bg-[#E1E1E1] mt-8"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-x-10 gap-y-16`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-8 group">
                {/* Geometric Frame Decoration */}
                <div className="absolute -inset-4 border border-[#E1E1E1] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                  <span className="absolute -top-1.5 -left-1 text-[8px] text-[#E1E1E1]">✦</span>
                  <span className="absolute -bottom-1.5 -right-1 text-[8px] text-[#E1E1E1]">✦</span>
                </div>
                
                <div className={`relative w-[300px] h-[300px] overflow-hidden shadow-soft ${item.isArch ? 'rounded-t-[150px] rounded-b-0' : 'rounded-full'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center max-w-[320px]">
                <h3 className="text-[22px] font-display font-semibold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] font-body text-[#666666] leading-[1.6] mb-2">
                  {item.description}
                </p>
                {item.contains && (
                  <p className="text-[14px] font-body text-[#666666] leading-[1.6]">
                    {item.contains}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSoupsSides = () => {
  return (
    <div className="bg-white">
      <MenuSection 
        id="soups" 
        title="soups" 
        items={soupItems} 
        columns={2} 
      />
      
      <MenuSection 
        id="sides" 
        title="sides" 
        items={sideItems} 
        columns={3} 
      />
    </div>
  );
};

export default MenuSoupsSides;