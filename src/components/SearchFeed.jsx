import {useState, useEffect} from 'react'
import { Typography, Box } from "@mui/material";
import { useParams } from 'react-router-dom';
import {Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";


const SearchFeed = () => {
	const [videos, setvideos] =useState([]);
	const { searchTerm} =useParams();
	useEffect(()=>{
      fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{
           setvideos(data.items)
	  })
	} ,[searchTerm])

  return (
      <Box sx={{overflowY: "auto", height: "90vh", color: "white" }} style={{ margin:'auto'}}>
		{/* flex:2 */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", paddingTop: "20px" ,paddingLeft:'100px'}}
        >
          Search Result for : <span style={{ color: "#f31503" }}>{searchTerm}</span> Videos
        </Typography>
		<Videos videos={videos} />
      </Box>
  );
};

export default SearchFeed;
