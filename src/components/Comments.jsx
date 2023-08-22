import React from 'react'
import {Stack ,Box ,Typography, CardMedia} from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const Comments = ({comments}) => {
  return (
	<Box>
		<Typography variant='body1'>
			Comments
		</Typography>
		{commentsInfo.map((comment)=>{
            
			const original = comment?.snippet?.topLevelComment?.snippet;

			<Stack flexDirection='row'>
			{/* profile */}
			<Box >
				<CardMedia image=" ">

				</CardMedia>
			</Box>
			{/* username , time */}
			{/* comment */}
			{/* like , reply */}
			<Box >
				<Typography varient="subtitle2">
                   
				</Typography>
				<Typography varient="subtitle2">
                   
				</Typography>
				<Box>
					<Typography varient="body2">
                   
				   </Typography>
				</Box>
				<Box>
				<ThumbUpOutlinedIcon /> &nbsp;&nbsp;
				</Box>

			</Box>
			
		</Stack>
	 })}
	</Box>
  )
}

export default Comments
