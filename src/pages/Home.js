import React,{useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { useSelector,useDispatch } from 'react-redux';
import {deleteUser, loadUsers} from '../redux/actions';
import {Link} from "react-router-dom"




const StyledTableCell = withStyles((theme)=>({
    
  

    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 900,
      marginTop:100,
    },
  });

  const buttonStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


  
function Home() {
    
    let dispatch=useDispatch();
    const{ users } = useSelector((state) => state.users);
    console.log(users);

    const classes = useStyles();

   useEffect(()=>{
       dispatch(loadUsers());
   },[dispatch])


   const handleDelete=(id)=>{
    if(window.confirm('Are you sure you want to delete user')){
      dispatch(deleteUser(id));
      console.log(id)
      
    

    }

  }
  const useradd = makeStyles((theme) => ({
    root:{
      '& > *': {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(60),
      },
    },

  }));
  
  const classes1 = useradd();

    return (
      
    <div className="container">
        <div className={classes1.root}>
         <Link to="/adduser" className="btn btn-primary" color="primary">
           Add User
           </Link>
           </div>
           
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Company</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>

          

          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.company}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">
              <div className={buttonStyles.root}>
              <ButtonGroup variant="contained" aria-label="contained primary button group">
                    <Button color="secondary" style={{marginRight:"5px"}}
                    onClick={() =>handleDelete(row.id)}>Delete</Button>
                    <Button color="primary" href="/edituser">Edit</Button>
                   
              </ButtonGroup>
              </div>
              
              </StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home;
