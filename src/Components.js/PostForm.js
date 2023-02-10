import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: "", body: ""})

	function addNewPost(event) {
		event.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: "", body: ""}) 
	}

	return (
		<form>
		{/*управляемые компонент */}
		<MyInput 
			value={post.title}
			onChange={event => setPost({...post, title: event.target.value})}
			type="text" 
			placeholder="Name post" />
		{/*неуправляемые/неконтролируемый компонент */}
		<MyInput
			value={post.body}
			onChange={event => setPost({ ...post, body: event.target.value})}
			type="text" 
			placeholder="Description post" />
		<MyButton onClick={addNewPost} >Create post</MyButton>
	</form>
	)
}

export default PostForm;