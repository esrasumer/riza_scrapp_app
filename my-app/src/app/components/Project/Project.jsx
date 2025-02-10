import React from 'react';

function Project() {
  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <div>
          {data.map(d => (
            <div key={d.name}>
              <div className='bg-white h-[450px] text-black'>
                <div className='h-56 bg-indigo-500 flex justify-center items-center'>
                  <img src={d.img} alt='' className='h-44 w-44' />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{d.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

const data = [
  {
    name: 'demir',
    img: '/scrapp_image/iron_scrapp.jpg'
  },
  {
    name: 'bakır',
    img: '/scrapp_image/iron_scrapp3.jpg'
  },
  {
    name: 'aliminyum',
    img: '/scrapp_image/iron_scrapp4.jpg'
  },
  {
    name: 'çelik',
    img: '/scrapp_image/iron_scrapp5.jpg'
  }
];
