import Box from '@mui/material/Box';
import AppBar from '../common/AppBar';
import SideBar from '../common/SideBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Chip from '@mui/material/Chip';
import BlockIcon from '@mui/icons-material/Block';
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
        <Typography mt={1}>녹화 일시: 2022년 1월 31일 15:03:40</Typography>
        <Typography>업로드 일시: 2022년 1월 31일 15:03:40</Typography>
        <CardMedia component="video" controls sx={{ mt: 5, height: '50%' }}>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </CardMedia>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" startIcon={<ReplyIcon />}>
            영상 반출 요청
          </Button>
          <Typography mt={2}>
            '영상 반출 요청'을 누르시면 부대관리자의 승인을 거쳐 자료교환체계를
            이용해 해당 영상을 보험사 혹은 수사기관에 제출하실 수 있습니다.
          </Typography>
          {/* <Chip
            icon={<BlockIcon />}
            label="반출 반려됨"
            color="error"
            variant="outlined"
          />
          <Typography mt={2}>사유: 군사중요시설 노출</Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayScreen;
