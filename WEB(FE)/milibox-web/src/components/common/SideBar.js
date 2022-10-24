import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
