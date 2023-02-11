import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
	return (
	<div> 
		<MyInput
			value={filter.query}
			onChange={event => setFilter({...filter, query: event.target.value})}
			placeholder="search..."
			type="text"
		/>
		<MySelect
			value={filter.sort}
			onChange={selectedSort => setFilter({...filter, sort: selectedSort})} 
			defaultValue="Sort"
			option={[
			{value: "title", name: 'by name'},
			{value: "body", name: 'by description'},
			]}
			/>
    </div>
	)
}

export default PostFilter;