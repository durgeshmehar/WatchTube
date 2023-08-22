import {useState, useEffect} from 'react'
import { Link ,useParams } from 'react-router-dom'
import { Typography ,Box, Stack } from '@mui/material'
import { CenterFocusStrong, CheckCircle } from '@mui/icons-material'
import { Videos } from "./"
import { demoChannelUrl } from '../utils/constant'
import { fetchFromApi } from '../utils/fetchFromApi'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import Comments from './Comments'

const VideoDetail = () => {
	const {id} = useParams();
	const [videoInfo , setvideoInfo] =useState([]);
	const [comments , setcomments] =useState([]);

	useEffect( ()=>{
		fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
			if(data){
				setvideoInfo(data?.items[0]);
			}
		})

		fetchFromApi(`commentThreads?part=snippet&videoId=${id}`).then((data)=>{
			if(data){
				setcomments(data?.items)
				console.log(data?.items)
			}
		})
	} ,[id])

	if(!videoInfo){ return null;}
	const { snippet, statistics } = videoInfo ;

  return (
      <Box minHeight='95vh'>
		<Stack direction={{ xs:'column' ,md:'row'}} ml='100px'>
			{/* player  */}
          <Box sx={{ flexGrow:'1' ,width:'100%' ,position:'sticky' ,top:'90px'}} >
				<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
				<Typography variant='h6' color='white' mt={3}>
					{snippet?.title}
				</Typography>

				<Stack direction='row' justifyContent="space-between">
					{/* channel Name & circle */}
					<Link to={snippet?.channelId?`channel/${snippet?.channelId}`:demoChannelUrl}>
						<Typography variant='subtitle1' color='white' mt={3}>
                          {snippet?.channelTitle}
						  <CheckCircle sx={{ fontSize:'12px' ,ml:'8px'}} />
						</Typography>
					</Link>

					{/* Like and views */}
					<Stack direction='row' variant={'body1'} opacity='0.8' gap='40px' mr='25px'>
						<Typography color='white' mt={3}textAlign='center' flexDirection='row' sx={{display:'flex',alignItems:'center'}}>
							{parseInt(statistics?.viewCount).toLocaleString()} views
						</Typography>
						<Typography color='white' mt={3} textAlign='center' flexDirection='row' sx={{display:'flex',alignItems:'center'}}>
							<ThumbUpOutlinedIcon /> &nbsp;&nbsp;
							<Box>{parseInt(statistics?.likeCount).toLocaleString()} likes</Box>
						</Typography>
					</Stack>
				</Stack>
		  </Box>
		</Stack>

		<Box color='white' m='70px' style={{ backgroundColor:'#3f3f3f',padding:'2vw' ,paddingBottom:'20px', borderRadius:'20px'}}>
			<Typography variant="h5" my='5px' mb='10px'>
				Description 
			</Typography>

			<Box maxHeight='30vh' style={{overflow: 'auto'}} >
				<Typography variant="body1" >
				{snippet?.description}
				</Typography>
			</Box>
		</Box>
		 {/* comments video  */}
		{/* <Box m='70px' px={2} py={{md:'1' ,xs:'5'}} justifyContent='center' alignItems='center'>
			{comments && <Comments comments={comments} />}
		</Box> */}

	  </Box>
  )
}

export default VideoDetail
