import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 import "../post/Post.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../assets/redux/features/food/foodSlice';
 import axios from "axios"
const Post = () => {
  const {food} = useSelector(store => store.food)
  console.log(food);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const deleteTableRow = async(id) => {
    try{
      await axios.delete(`http://localhost:5007/foods/${id}`)
      .then(
        res => {
          console.log(res);
          if(res.status ===200){
            food.filter(item => item._id !==id)
          }
        }
      )
    }catch(err){
      console.log(err);
    }
  }
  const addProducts = async(e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:5007/foods", {
         image: image,
         title: title,
         description: description
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="post-box">
      <div className="form-container">
         <form action="" onSubmit={addProducts}>
         <TextField id="outlined-basic-1" label="Enter Image URL" variant="outlined" value={image} onChange={e => setImage(e.target.value)}/>
         <TextField id="outlined-basic-2" label="Enter product title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
         <TextField id="outlined-basic-3" label="Enter product description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
         <Button variant="outlined" type='submit'>Outlined</Button>
         </form>
      </div>
      <div className="table-container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {food.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.imgSrc} alt="" className='table-image'/>
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell><Button variant="outlined" color="error" type='submit' onClick={() => {deleteTableRow(row._id)}}> Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default Post