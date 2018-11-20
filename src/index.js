import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import LikeButtons from './LikeButtons'
import Comment from './Comment'

const App = () => {
	return (
		<div className="ui container comments">
			< Comment />
			< Comment />
			< Comment />

		</div>
	);
};



ReactDOM.render(<App />, document.querySelector('#root'));