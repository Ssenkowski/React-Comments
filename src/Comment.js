import React from 'react'
import CommentDetail from './CommentDetail'
import LikeButtons from './LikeButtons'
import faker from 'faker'

const Comment = () => {
	return (
		<div className="ui comment container">
			<LikeButtons>
				<CommentDetail 
					author={faker.name.firstName()} 
					time={faker.date.weekday()} 
					details={faker.lorem.sentence()} 
					avatar={faker.image.avatar()}
				/>
			</LikeButtons>
		</div>
	);
};

export default Comment