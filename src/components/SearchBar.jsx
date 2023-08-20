import { Paper ,IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  return (
	<Paper  sx={{ borderRadius:20 ,pl:1.5,mr:{sm:5} }} onSubmit= {()=>{ }}>
	  <input className="search-bar" type="text" placeholder='Search...' value="" onChange={ ()=>{ }} />
	  <IconButton type="submit" >
		<Search sx={{ color:'red' }}/>
	  </IconButton >
	</Paper>
  )
}

export default SearchBar
