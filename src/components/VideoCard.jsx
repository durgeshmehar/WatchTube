import React from 'react'
import {Link} from 'react-router-dom'
import {Typography ,Card , CardContent , CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl ,demoProfilePicture,demoVideoTitle,demoChannelTitle,demoVideoUrl,demoChannelUrl } from '../utils/constant'

const VideoCard = ({video:{id: { videoId} ,snippet}  }) => {
  return (
	<Card sx={{ width:{md:'320px',xs:'70vw'} ,backgroundColor:'black',mb:'15px'}}>
		<Link to={videoId?'video/${videoId':demoVideoUrl}>
			<CardMedia image={ snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{pb:0, width:{md:'325px',xs:'70vw'},height:'210px'}}>
			</CardMedia>
		</Link>
		
		<CardContent sx={{background:'#1e1e1e' ,pb:'0'}}>
		  <Link to={videoId?'video/${videoId':demoVideoUrl}>
		    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
				{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
			</Typography>
		  </Link>
		</CardContent>

		<CardContent sx={{ background:'#1e1e1e',pt:'0px',pb:'0px'}}>

		  <Link to={snippet?.channelId?'channel/${snippet?.channelId':demoChannelUrl} >
		    <Typography variant="subtitle1" fontWeight="bold" color="gray" >
				{snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
				<CheckCircle sx={{ fontSize:14 ,color:'gray',ml:'6px'}} >
				</CheckCircle>
			</Typography>
		  </Link>
		</CardContent>

	</Card>
  )
}

export default VideoCard
