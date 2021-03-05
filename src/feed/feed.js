import React, { useEffect, useState } from 'react';
import '../style/style.scss'
import StoryPage from './storyPage';
import PostsInfo from '../Posts/postsInfo';
import Posts from '../Posts/posts';
import database from '../firebase/firebase';

function Feed() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        database.collection('posts').onSnapshot((snap) =>
            setPosts(snap.docs.map((doc) => ({id: doc.id, data: doc.data()  })))
            );
    },[])

    return (
        <div className='feed'>
            <StoryPage />
            <PostsInfo />
            
            {posts.map((post) => (
            <Posts 
            key={post.data.id}
            username={post.data.username}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            img={post.data.img}
            />
            ))}
        </div>
    )
}

export default Feed
