import {useState, useEffect} from 'react'
import { Stack, Typography, Box } from "@mui/material";
import {SideBar ,Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";


const Feed = () => {
	const [selectedCategory ,setselectedCategory ]= useState('New')
	const [videos, setvideos] =useState([]);
	useEffect(()=>{
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
           setvideos(data.items)
	  })
	} ,[selectedCategory])

	function getCategory(category){
		setselectedCategory(category);
	}

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          color: "red",
          height: { sx: "auto", sm: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: 3,
        }}
      >
        <SideBar selectedCategory={selectedCategory} getCategory={getCategory} />
        <Typography className="copyright" sx={{ mt: 2, color: "#fff" }}>
          Copyright 2023 Durgesh Media
        </Typography>
      </Box>

      <Box sx={{ overflowY: "auto", height: "90vh", color: "white",paddingLeft:'20px' }}>
		{/* flex:2 */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", paddingTop: "20px" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
		<Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
