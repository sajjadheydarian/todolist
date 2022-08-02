import {makeStyles} from "@material-ui/styles";

const Style = makeStyles(Theme => ({
    root: {
        background: 'orange',
        height:'10vh',
        padding:'0 1rem '
    },
    btn:{
        padding:"0px !important",
        background:"blue",
        color:'white',
        fontWeight:'bold',
        borderRadius:'1rem',
        width:"50%",
        margin: '1rem 25%',
        boxShadow:'4px 5px 5px rgb(0 0 0 / 40%) ,-4px -5px 8px rgb(250 250 250 / 40%)',
        fontSize:'xx-large',

    }
}));

export default Style;