import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Citation from './Citation';
import Tooltip from '@mui/material/Tooltip';


export default function Articles(props){
    const abstract=props.content.abstract
    return(
        <>
          <Card sx={{ width: 520 }}>
            <CardContent>
              <div style={{display:"flex",alignItems:"center"}}>
                {/* article url */}
                <div style={{overflow:"hidden", width:"150px"}}>
                    <span style={{fontSize:"13px"}}>
                      <a href={props.content.url} target="_blank">{props.content.url}</a>
                    </span>
                </div>

                {/* Access PDF */}
                {props.content.openAccessPdf?
                  <a href={props.content.openAccessPdf.url} target="_blank">
                    <span style={{color:"green", marginLeft:"4px",fontSize:"13px"}}>
                      PDF
                    </span>
                  </a>
                  :<span style={{color:"green", marginLeft:"4px",fontSize:"13px"}}>
                    <Tooltip title="PDF access not available" placement="top">
                      <span style={{color:"red"}}> X </span>
                      PDF
                    </Tooltip>
                  </span>
                }
                {/* BookMark */}
                <div style={{display:"flex",alignItems:"center",fontSize:"13px", marginLeft:"auto",marginRight:"10px", color:"green"}}>
                    <BookmarkBorderIcon sx={{fontSize:18}}/>
                    Bookmark
                    <div style={{marginLeft:"10px"}}>
                      <MoreVertIcon sx={{fontSize:18}}/>
                    </div> 
                </div>
              </div>


              {/* Article Title */}
              <h4>{props.content.title}</h4>
              {/* Article abstract */}
              <p>
                {abstract?<p>{`${abstract.substring(0, 400)}...`}</p> :<p>""</p>}
              </p>
                

              {/* Card Footer */}
              <div style={{display:"flex", justifyItems:"center",alignItems:"center"}}>
                {/* cited count */}
                <div style={{  fontSize:"14px",color:"blue"}}>
                    cited by {props.content.citationCount}
                    <span style={{marginLeft:"10px"}}>view all version</span>
                </div>

                <div style={{marginLeft:"auto",marginRight:"10px",}}>
                  
                  {/* Citation Popup Model  */}
                  <Citation bibtex={props.content.citationStyles.bibtex}/>

                  {/* Exlpore Button */}
                  <Button variant="contained" size="small">Exlpore</Button>
                </div>
              </div>

            </CardContent>
          </Card>
        </>
    );
}