import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import CloseIcon from '@mui/icons-material/Close';
import {setAcademic, onSearch,cancleSearch} from './store/search'
import { useDispatch } from 'react-redux';

export default function Header()
{
    const dispatch=useDispatch();
    return(<>
   
   
    <div style={{display:'flex', borderRadius:"2px",border:"1px solid #ccd2d7"}}>
        
        <div style={{display:'flex',borderRadius:"2px",borderRight:"1px solid #ccd2d7"}}>
            <TravelExploreIcon style={{margin:"6px"}}/>
            <span style={{margin:"6px"}}>Research</span>
        </div>

        <div style={{paddingTop:"6px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"2px",borderRight:"1px solid #ccd2d7"}}>
            <StickyNote2OutlinedIcon/>
        </div>

        <div style={{marginLeft:"auto", padding:"6px",borderRadius:"2px",borderLeft:"1px solid #ccd2d7"}}>
            <button style={{border:"none",background:"white",color:"red"}} onClick={()=>dispatch(cancleSearch())}><CloseIcon /></button>
        </div>
    
    </div>
    </>);
}