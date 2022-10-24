import DefaultAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AppBar = () => (
  <DefaultAppBar
    position="fixed"
    sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
  >
    <Toolbar>
      <Typography sx={{ flexGrow: 1 }}>국방 블랙박스</Typography>
      <Typography sx={{ mr: 5 }}>노우준 님</Typography>
      <Button color="inherit">로그아웃</Button>
    </Toolbar>
  </DefaultAppBar>
);

export default AppBar;
