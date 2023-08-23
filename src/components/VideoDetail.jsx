import {useState, useEffect} from 'react'
import { Link ,useParams } from 'react-router-dom'
import { Typography ,Box, Stack } from '@mui/material'
import { CenterFocusStrong, CheckCircle } from '@mui/icons-material'
import { Videos } from "./"
import { demoChannelUrl } from '../utils/constant'
import { fetchFromApi } from '../utils/fetchFromApi'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Comments from './Comments'

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
				setcomments(data?.items )
			}
		})
	} ,[id])

	if(!videoInfo){ return null;}
	const { snippet, statistics } = videoInfo ;

  return (
      <Box minHeight='80vh' mt='1vw' >
		<Stack direction="column" sx={{justifyContent:'center'}} px={4}  >
			{/* player  */}
          {/* <Box sx={{width:{md:'90vw',xs:'70vw'} ,textAlign:'center'}}    > */}
				<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>

				<Typography variant='h6' color='white' mt={2} pl={4}>
					{snippet?.title}
				</Typography>

				<Stack direction='row' justifyContent="space-between"  pl={4} sx={{ ...(theme) => ({
						[theme.breakpoints.up('sm')]: {
							variant:'captions',htmlFontSize:'1vw'
						},
						[theme.breakpoints.up('md')]: {
							variant:'subtitles1'
						},
					}),}}>

					{/* channel Name & circle */}
					<Link to={snippet?.channelId?`channel/${snippet?.channelId}`:demoChannelUrl}>
						<Typography  color='white' mt={3}>
                          {snippet?.channelTitle}
						  <CheckCircle sx={{ fontSize:'12px' ,ml:'8px'}} />
						</Typography>
					</Link>

					{/* Like and views */}
					<Stack direction='row'  opacity='0.8' gap='40px' mr='25px'>
						<Typography color='white' mt={3}textAlign='center' flexDirection='row' sx={{display:'flex',alignItems:'center'}}>
							{parseInt(statistics?.viewCount).toLocaleString()} views
						</Typography>
						<Typography color='white' mt={3} textAlign='center' flexDirection='row' sx={{display:'flex',alignItems:'center'}}>
							<ThumbUpOutlinedIcon /> &nbsp;&nbsp;
							<Box>{parseInt(statistics?.likeCount).toLocaleString()} likes</Box>
						</Typography>
					</Stack>
				</Stack>
		  {/* </Box> */}
		</Stack>

		<Box color='white' m={4} sx={{ backgroundColor:'#3f3f3f',p:'1.5vw' ,pb:'20px', borderRadius:'20px'}}>

			<Typography variant="h5" pb='5px'>
				Description 
			</Typography>

			<Box maxHeight='40vw' style={{overflow: 'auto'}} >
				<Typography variant="body1" >
				{snippet?.description}
				</Typography>
			</Box>
		</Box>
		 {/* comments video  */}

		{comments && <Comments comments={comments} totalComment={statistics?.commentCount} />}

	  </Box>
  )
}

export default VideoDetail
