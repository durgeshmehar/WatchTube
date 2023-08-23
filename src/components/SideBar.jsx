import {Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constant'

const SideBar = ({selectedCategory,getCategory}) => (

     <Stack direction='row' sx={{ flexDirection:{md:'column'} , height:{sm:'100vw'}, overflow:'scroll'}}> 

	    {categories.map( (category)=>(
			<button key={category.name} className='category-btn' style={{background:category.name===selectedCategory &&'#fc1503',color:'white' }} onClick={()=>{getCategory(category.name)}}>
				<span style={{ color:category.name===selectedCategory?'white':'#fc1503',marginRight:'15px'}}> {category.icon}</span>
				<span style={{ opacity:category.name===selectedCategory?'1':'0.8' }}>{category.name} </span>
			</button>
		))}
		
	 </Stack>
)

export default SideBar
