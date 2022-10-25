import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import AppBar from '../common/AppBar';
import SideBar from '../common/SideBar';
import { Link } from 'react-router-dom';

const ApplicationListScreen = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h5">영상 반출 신청 목록</Typography>
        <List
          sx={{ mt: 3 }}
          subheader={
            <ListSubheader>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: 200 }}>사용자 이름</Box>
                <Box sx={{ width: 300 }}>신청 일시</Box>
                <Box sx={{ width: 300 }}>녹화 일시</Box>
                <Box sx={{ width: 200 }}>파일 크기</Box>
              </Box>
            </ListSubheader>
          }
        >
          <ListItemButton component={Link}>
            <Box sx={{ width: 200 }}>노우준</Box>
            <Box sx={{ width: 300 }}>2022년 3월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton component={Link}>
            <Box sx={{ width: 200 }}>노우준</Box>
            <Box sx={{ width: 300 }}>2022년 3월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
          </ListItemButton>
          <ListItemButton component={Link}>
            <Box sx={{ width: 200 }}>노우준</Box>
            <Box sx={{ width: 300 }}>2022년 3월 31일 15:03:40</Box>
            <Box sx={{ width: 300 }}>2022년 2월 2일 14:02:06</Box>
            <Box sx={{ width: 200 }}>1.2MB</Box>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default ApplicationListScreen;
