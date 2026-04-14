import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    const {id,name,picture,goal,tags,status} = friend;
    return (
        <Link to={`/friends/${id}`} className='backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border flex flex-col justify-center items-center border-zinc-100 p-4 rounded-xl space-y-2'>
            <img className='w-16 h-16  rounded-full' src={picture} alt="" />
            <h2 className='text-lg font-bold'>{name}</h2>
            <p className='text-lg text-zinc-500'>{goal}</p>
            <div className='flex gap-2 items-center'>
                {
                    tags.map((tag,idx)=><p key={idx} className='bg-green-500 px-2 text-green-950 font-semibold rounded-full '>{tag}</p>)
                }
            </div>
            <p className={`px-4 rounded-full text-white ${status==='on-track' && 'bg-orange-500'} ${status ==='almost due' && 'bg-green-500'}  ${status==='overdue' && 'bg-red-500'} `}>{status}</p>
        </Link>
    );
};

export default FriendCard;