import React from 'react';
import useFriends from '../../hooks/useFriends';
import FriendCard from '../../components/ui/FriendCard';

const Friends = () => {
    const {friends, loading } = useFriends();
    console.log(friends, loading );
    return (
        <div className='container mx-auto my-10'>
           <h2 className='text-center text-2xl font-bold my-4'>My Friends</h2>
           <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'> 
            {
            friends.map(friend=><FriendCard friend={friend} key={friend.id}></FriendCard>)
           }
           </div>
        </div>
    );
};

export default Friends;