import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import youtubeIcon from '../utils/images/youtube-icon.png';
import {SearchBar} from '../components'

const Navbar = () => {
  return (
	<Stack direction="row" alignItems="center" p={2} sx={{zIndex:'20',position:'sticky' , background: '#000' , top:0 ,justifyContent:'space-between'}}>
		<Link to='/' sx={{ display:'flex' ,alignItems :'center'}} >
			<img src={youtubeIcon} alt="logo" height={45} /> <h3> Vidstream </h3>
		</Link>
		<SearchBar />
	</Stack>

  )
}

export default Navbar
