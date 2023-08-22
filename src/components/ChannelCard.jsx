import {Link} from 'react-router-dom'
import {Typography ,Card , CardContent , CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl ,demoProfilePicture,demoChannelTitle,demoChannelUrl } from '../utils/constant'

const ChannelCard = ({channel ,marginTop}) => {
	if (!channel) {
		return null; 	// Handle the case where channel is null or undefined
	  }
	const {id: {channelId} , snippet} = channel;

  return (

	<Card sx={{ width:{md:'320px',xs:'70vw'} ,background:'none', display:'flex' ,alignItems:'center' ,justifyContent:'center', margin:'auto' ,boxShadow:'none', marginTop:{marginTop}}} >

		<Link to={channelId?`/channel/${channelId}`:demoChannelUrl}>
			<CardContent>
				<CardMedia image={ snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{mb:'20px' ,width:{md:'200px',xs:'50vw'}, height:{md:'200px',xs:'50vw'},borderRadius:'50%'}}>
				</CardMedia>

				<Typography variant="h6" sx={{color:'white',textAlign:'center'}}>
					{snippet?.title?snippet.title:demoChannelTitle}
					<CheckCircle sx={{ fontSize:14 ,color:'gray',ml:'6px'}} >
                    </CheckCircle>
				</Typography >
				{
					channel?.statistics?.subscriberCount && <Typography sx={{color:'white',textAlign:'center'}}>
						{ parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
					</Typography>
				}

			</CardContent>
		</Link>
	</Card>

  )
}

export default ChannelCard
