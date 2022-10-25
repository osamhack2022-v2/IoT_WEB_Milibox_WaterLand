import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import AppBar from '../common/AppBar';
import SideBar from '../common/SideBar';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import PolicyIcon from '@mui/icons-material/Policy';
import { Link } from 'react-router-dom';

const VideoListScreen = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h5">블랙박스 영상 목록</Typography>
        <List
          sx={{ mt: 3 }}
          subheader={
            <ListSubheader>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 300 }}>녹화 일시</Box>
                <Box sx={{ width: 300 }}>업로드 일시</Box>
                <Box sx={{ width: 200 }}>파일 크기</Box>
                <Box>반출 승인 여부</Box>
              </Box>
            </ListSubheader>
          }
        >
          <ListItemButton component={Link} to="/videos/3">
            <Box sx={{ width: 300 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
            <Box>신청안함</Box>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 300 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
            <Stack direction="row" alignItems="center" gap={1}>
              <CheckCircleOutlineIcon color="success" />
              <Typography>승인</Typography>
            </Stack>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 300 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
            <Stack direction="row" alignItems="center" gap={1}>
              <BlockIcon color="error" />
              <Typography>반려</Typography>
            </Stack>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 300 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
            <Stack direction="row" alignItems="center" gap={1}>
              <PolicyIcon color="info" />
              <Typography>검토중</Typography>
            </Stack>
          </ListItemButton>
        </List>
      </Box>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        component="label"
        sx={{ position: 'absolute', bottom: 30, right: 30 }}
      >
        영상 업로드
        <input hidden accept="video/*" type="file" />
      </Button>
    </Box>
  );
};

export default VideoListScreen;
