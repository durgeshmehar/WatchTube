import React from 'react'
import { Link } from 'react-router-dom';
import {Stack ,Box ,Typography, CardMedia} from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { demoChannelUrl } from '../utils/constant';

const Comments = ({ comments ,totalComment}) => {
    const today = new Date();
	const gettime = (publishedAt) => {
		const date = new Date(publishedAt);
		let diff = today.getTime() - date.getTime();
		diff = Math.floor(diff / 1000);

		let string = "";
		let a = 0;
		if ((a = Math.floor(diff / (12 * 60 * 60 * 30 * 24))) > 0) {
			string = a + " years ago";
		}
		else if ((a = Math.floor(diff / (60 * 60 * 30 * 24))) > 0) {
			string = a + " months ago";
		}
		else if ((a = Math.floor(diff / (60 * 60 * 24))) > 0) {
			string = a + " days ago";
		}
		else if ((a = Math.floor(diff / (60 * 60))) > 0) {
			string = a + " hours ago";
		}
		else if ((a = Math.floor(diff / 60)) > 0) {
			string = a + " minutes ago";
		}
		else {
			string = diff + " seconds ago";
		}
		return string;
	}

	return (
		<Box sx={{ paddingLeft:'3vw' ,paddingRight:'3vw' ,m:'25px' ,color:'white'}}>
			<Typography variant='h5' m={3}>
				<hr />
				{parseInt(totalComment).toLocaleString()} &nbsp;Comments
			</Typography>
            <Box sx={{ overflow:'auto',maxHeight:{ sx:'auto' ,md:'80vh'}}}>
			{comments && comments.map((comment)=>{
				
				if(!comment )return NULL;
				const snippet = comment?.snippet?.topLevelComment?.snippet;
			
				return <Stack flexDirection='row' m={2} key={comment?.id}>
					{/* profile */}	
						<Link to={snippet?.authorChannelId?.value?`/channel/${snippet?.authorChannelId?.value}`:demoChannelUrl} >
							<Box >
								<CardMedia image={snippet?.authorProfileImageUrl} sx={{height:'30px' ,width:'30px',borderRadius:'50%',mr:'15px'}}>
								</CardMedia>
							</Box>
						</Link>
						
						<Box >
							{/* username , time */}
							<Link to={snippet?.authorChannelId?.value?`/channel/${snippet?.authorChannelId?.value}`:demoChannelUrl} >
								<Typography color='white' p={0.7} pl={0}>
									{snippet?.authorDisplayName} &emsp; {gettime(snippet?.publishedAt)}
								</Typography>
							</Link>	
							{/* comment */}
							<Typography varient="captions1">
								{snippet?.textDisplay}
							</Typography>
							
							{/* like , reply */}
							<Stack flexDirection='row' alignItems='center' p={1}>
								<ThumbUpOutlinedIcon /> &nbsp;&nbsp;{snippet?.likeCount}
							</Stack>

						</Box>
					
					</Stack>
		        })}
			</Box>
	    </Box>
  )
}

export default Comments
