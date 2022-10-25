import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Drawer variant="permanent" sx={{ width: 300, flexShrink: 0 }}>
      <Toolbar />
      <Box sx={{ width: 300, overflow: 'auto' }}>
        <List>
          <ListItemButton
            component={Link}
            to="/"
            sx={{ m: 1 }}
            selected={pathname === '/' || pathname.startsWith('/videos/')}
          >
            <ListItemText>블랙박스 영상 목록</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/application"
            sx={{ m: 1 }}
            selected={pathname.startsWith('/application')}
          >
            <ListItemText>영상 반출 신청 목록</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
