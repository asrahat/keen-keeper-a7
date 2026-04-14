import React from 'react';

const Banner = () => {
    return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center space-y-6 mt-10">
      <div className="text-center space-y-6">
        <h2 className="text-6xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className=" font-semibold text-zinc-600">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>
    
        <button className="btn bg-[#244d3f] text-white border-zinc-300 mr-4">
           
         Add to Friend
        </button>
       
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='border border-zinc-100 shadow-xl px-12 py-6 text-center rounded-xl'>
            <h2 className='text-2xl font-bold'>10</h2>
            <p className='text-xl font-semibold text-zinc-500'>Total Friends</p>
        </div>
        <div className='border border-zinc-100 shadow-xl px-12 py-6 text-center rounded-xl'>
            <h2 className='text-2xl font-bold'>3</h2>
            <p className='text-xl font-semibold text-zinc-500'>On Track
</p>
        </div>
        <div className='border border-zinc-100 shadow-xl px-12 py-6 text-center rounded-xl'>
            <h2 className='text-2xl font-bold'>6</h2>
            <p className='text-xl font-semibold text-zinc-500'>Need Attention
</p>
        </div>
        <div className='border border-zinc-100 shadow-xl px-12 py-6 text-center rounded-xl'>
            <h2 className='text-2xl font-bold'>12</h2>
            <p className='text-xl font-semibold text-zinc-500'>Interactions This Month
</p>
        </div>
       </div>

    </div>
    );
};

export default Banner;