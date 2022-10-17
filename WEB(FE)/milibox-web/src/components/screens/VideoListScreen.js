import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const VideoListScreen = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>국방 블랙박스</Typography>
          <Typography sx={{ mr: 5 }}>노우준 님</Typography>
          <Button color="inherit">로그아웃</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: 300, flexShrink: 0 }}>
        <Toolbar />
        <Box sx={{ width: 300, overflow: 'auto' }}>
          <List>
            <ListItemButton sx={{ m: 1 }} selected>
              <ListItemText>블랙박스 영상 목록</ListItemText>
            </ListItemButton>
            <ListItemButton sx={{ m: 1 }}>
              <ListItemText>영상 복호화 신청 목록</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h5">블랙박스 영상 목록</Typography>
        <List
          sx={{ mt: 3 }}
          subheader={
            <ListSubheader>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 400 }}>녹화 일시</Box>
                <Box sx={{ width: 400 }}>업로드 일시</Box>
                <Box sx={{ width: 400 }}>파일 크기</Box>
              </Box>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <Box sx={{ width: 400 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 400 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 400 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 400 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 400 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 400 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 400 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 400 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 400 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 400 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 400 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 400 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ width: 400 }}>2022년 1월 31일 15:03:40</Box>
            <Box sx={{ width: 400 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 400 }}>1.2MB</Box>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default VideoListScreen;
