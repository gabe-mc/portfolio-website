// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const Home = () => (
  <div className="w-full h-full flex justify-center pt-10">

    <div className="relative">
      <Image
        src="/gabriel_big.png"
        alt="gabriel"
        width={600}
        height={600}
        draggable={false}
        className="object-contain p-1 select-none"
      />

      <div className="absolute top-full transform translate-x-16 -translate-y-6 px-4 py-2">
        <p className="text-black font-extrabold text-center" style={{ fontSize: '0.77rem' }}>MATH + COMPUTER SCIENCE @ UofT</p>
      </div>
    </div>
    <div className='absolute transform translate-x-[17.2rem] translate-y-[16.5rem]'>
      <h1 className='text-black font-bold text-3xl hover:text-gray-600'>EXPERIENCE</h1>
      <p className='text-black text-md transform translate-x-[0.1rem]' style={{ fontSize: '0.90rem' }}>
        Explore my extracurricular <br />
        involvement and <br />
        internship experience. -> </p>
    </div>
    <div className='absolute transform -translate-x-[23.3rem] translate-y-42'>
      <h1 className='text-black font-bold text-3xl hover:text-gray-600'>PROJECTS</h1>
      <p className='text-black text-md transform translate-x-[0.1rem]' style={{ fontSize: '0.90rem' }}>
        > RespiraCheck <br />
        > GLD-Pricing-ANN <br />
        > IQ-GEN <br />
        > See more ->
        </p>
    </div>

  </div>
);


export default Home;
