import {makeStyles} from '@material-ui/styles';

const Style = makeStyles((theme) => ({
    root: {
        height:'80vh',
        background:'#777',
        overflow:'auto',

    },
    column:{
        width:'17%',
        background:"white",
    },
    columnText:{
        width:'66%',
        background:"white",
        paddingLeft:'1rem'
    },
    btnDel:{
        background:'red',
        color:'white',
        borderRadius:'5px',
        padding:'10px 5px',
        width:'100%',
        height:'100%'
    },
    btnCon:{
        background:'blue',
        color:'white',
        borderRadius:'5px',
        padding:'10px 5px',
        width:'100%',
        height:'100%'
    },
    rowTable:{

    }

}))
export default Style;


