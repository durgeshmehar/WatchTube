import {Stack ,Typography ,Box} from '@mui/material'
import SideBar from './SideBar'
const Feed = () => {
  return (
	<Stack sx={{flexDirection :{sm:"column" ,md:"row"}}} >

		<Box sx={{ color:'red',height:{sx:'auto',sm:'92vh'}, borderRight:'1px solid #3d3d3d',px:3 }} >
			<SideBar />
		<Typography className='copyright' sx={{ mt:2,color:'#fff'}}>
			Copyright 2023 Durgesh Media
		</Typography>
		</Box>




	</Stack>	
  )
}

export default Feed
