import React from 'react';
import PostListItem from './postListItem';

const PostList = ({ list }) => (
	<ul>
		{list.map(item => (
			<PostListItem
				key={item.id}
				title={item.title}
			/>
		))}
	</ul>
);
export default PostList;
