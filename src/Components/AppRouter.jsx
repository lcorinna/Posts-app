import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route exact path="/posts" element={<Posts/>}/>
			<Route exact path="/posts/:id" element={<PostIdPage/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/er" element={<Error/>}/>
			<Route
				path="*"
				element={<Navigate to="/posts" replace />}
			/>
     	</Routes>
	);
};

export default AppRouter;