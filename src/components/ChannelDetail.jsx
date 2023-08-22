import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
	const {id } =useParams();
	const [channelInfo ,setchannelInfo]= useState(null);
	const [videoInfo ,setvideoInfo]= useState([]);

	useEffect(()=>{
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>{
			setchannelInfo( data?.items[0] );
		})

		fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then((data)=>{
			setvideoInfo(data?.items);
		})

	}, [])
	
  return (
	<Box minHeight='95vh'>
		<Box>
			<div style={{ background :'linear-gradient(90deg ,rgba(0,238,247,1)0% , rgba(206 ,3,184,1) 100%,rgba(0 , 212, 255,1) 100% ',
		    zIndex:'10',height:'300px'}}>
			</div>
			<ChannelCard channel={channelInfo} marginTop ='-100px' />
		</Box>
		<Box display="flex" p="2">
			<Box sx={{ mr:{sm:'100px'}}} />
			<Videos videos={videoInfo} />
		</Box>
	</Box>
  )
}

export default ChannelDetail
