import {Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constant'

const SideBar = () => (
     <Stack direction='row' sx={{ flexDirection:{md:'column'} , height:{sx:'auto' ,md:'95vh' }}}> 
	    {categories.map( (category,index)=>(
			<button key={index}>
				<span>{category.icon}</span>
				<span>{category.name} </span>
			</button>
		))}
		
	 </Stack>
)

export default SideBar
