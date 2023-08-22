import { Paper ,IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
	const [search ,setsearch]=useState("");
	const navigate = useNavigate();

	const handleSubmit =(e)=>{
		e.preventDefault();
		if(search){
           navigate(`search/${search}`)
		   setsearch("")
		}
	}
	const handleKeyDown =(e)=>{
		if(e.key === 'Enter'){
			e.preventDefault();
			handleSubmit(e);
		}
	}

  return (
	<Paper  sx={{ borderRadius:20 ,pl:1.5,mr:{md:6,sm:5} }} style={{display:'flex' ,alignItems:'center'}}  >

	  <input className="search-bar" type="text" placeholder='Search...' value={search} onChange={ (e)=>{
		setsearch(e.target.value) }} 
		onKeyDown={handleKeyDown}
		style={{fontSize:'medium' }}
		
		/>

	  <IconButton type="submit" onClick={handleSubmit} >
		<Search sx={{ color:'red' }}/>
	  </IconButton >

	</Paper>
  )
}

export default SearchBar
