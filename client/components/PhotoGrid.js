import React from 'react';
import Photo from './Photo';

// so this.props.posts.map basically iterates through each post
// this short hand phat arrow function says:
// hey, here's a post and it's index, give me a Photo component with these
// pieces of data in it.
// SIDE NOTE: the ...this.props means passdown all the props to the next component
// it's called es6 spread
// the key is passed down separately to each instance of the photo to keep it unique
// however react uses the key to reference the photo component instance internally and it is not available as
// a prop. 
// So that is why we pass i down separately, so that we have access to the index if we need it
// and ofcourse we pass down the post were going to be working with that we get back from the map function
// and then run the phat arrow function against
// maybe these comments are too verbose lol. Rewatch wes bos's reduxstagram series video 11 if needed
const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                { this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />) }
            </div>
        )
    }
});

export default PhotoGrid;
