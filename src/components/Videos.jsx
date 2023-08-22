import {Stack ,Box } from '@mui/material'
import {ChannelCard , VideoCard} from "./"
const Videos = ({videos}) => {
  return (
	<Stack flexDirection="row" flexWrap="wrap" gap={2} style={{justifyContent:'center'}}>
    {
		videos?videos.map( (item,idx)=>(
			<Box key={idx} >
				{item.id.videoId && <VideoCard video={item} /> }
				{item.id.channelId && <ChannelCard channel={item} /> }
			</Box>
		)):null
	}

	</Stack>
  )
}

export default Videos
