import {makeStyles} from '@material-ui/styles';

const Style = makeStyles((theme) => ({
    root: {
        height:'10vh',
        width:'100%',
        background:'orange',
        border:'none !important'
        // display:'flex',
        // justifyContent:'space-between',
        // padding:'0 1rem ',
        // alignItems:'center'
    },
    tools:{
        width:'30%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        // padding:'0 1rem ',
    },
    text:{
        color:"white",
        fontWeight:'bold !important',
        fontSize:'2rem '
    },
    th:{
        width:'17%',
        border:'none !important'
    }
}))
export default Style;


