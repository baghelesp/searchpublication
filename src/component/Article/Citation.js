import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Cite = require('citation-js')

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxWidth:'480px',
  minWidth:'280px' ,
  bgcolor: 'background.paper',
  border: '2px solid #ccd2d7',
  boxShadow: 24,
  p: 4,
};

export default function Citation(props) {

  const bibTeXData = props.bibtex;
  let example = new Cite(bibTeXData)
  const output = example.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US'
  })

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [citationFormat, setCitationFormat] = React.useState('apa');
  const [citationContent,setCitationContent ]=React.useState(output)

  React.useEffect(() => {
    const content = example.format('bibliography', {
      format: 'html',
      template: citationFormat,
      lang: 'en-US'
    });
    console.log("useEffect");
    setCitationContent(content);
  }, [citationFormat]);

  const handleChange = (event) => {
    setCitationFormat(event.target.value);
  };
  

  return (
    <>
      {/* Cite Button */}
      <Button onClick={handleOpen}>cite</Button>

      {/* Ctation Popup Model */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display:"flex"}}>

            {/* Input Cite Style IEEE, Harvard, Vancouver etc.. */}
            <FormControl >
              <InputLabel id="demo-simple-select-label" >{citationFormat}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={citationFormat}
                label="cite"
                onChange={handleChange}
                sx={{height:35}}
              >
                <MenuItem value={"apa"}>APA</MenuItem>
                <MenuItem value={"harvard"}>Harvard</MenuItem>
                <MenuItem value={"vancouver"}>Vancouver</MenuItem>
                {/* <MenuItem value={"ieee"}>IEEE</MenuItem> */}
              </Select>
            </FormControl>
          </div>

          {/* cite content */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div dangerouslySetInnerHTML={{ __html: citationContent }} />
          </Typography>

        </Box>
      </Modal>
      </>
  );
}