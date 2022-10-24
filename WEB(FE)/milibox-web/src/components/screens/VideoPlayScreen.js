import Box from '@mui/material/Box';
import AppBar from '../common/AppBar';
import SideBar from '../common/SideBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';

const VideoPlayScreen = () => {
  const { videoId } = useParams();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h5">블랙박스 영상 조회</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 10,
          }}
        >
          <CardMedia component="video" controls sx={{ maxHeight: 500 }}>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          </CardMedia>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayScreen;
