import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoltIcon from '@mui/icons-material/Bolt';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';

const KIPU_HEADER_BG = '#2d1b69';

interface KipuAppBarProps {
  logoText?: string;
  notificationCount?: number;
  userInitials?: string;
  onMenu?: () => void;
  onAddPerson?: () => void;
  onSettings?: () => void;
  onChat?: () => void;
  onCalendar?: () => void;
  onQuickActions?: () => void;
  onSearch?: () => void;
  onNotifications?: () => void;
  onDocuments?: () => void;
  onProfile?: () => void;
}

export default function KipuAppBar({
  logoText = 'Kipu',
  notificationCount = 4,
  userInitials = 'GP',
  onMenu,
  onAddPerson,
  onSettings,
  onChat,
  onCalendar,
  onQuickActions,
  onSearch,
  onNotifications,
  onDocuments,
  onProfile,
}: KipuAppBarProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      square
      sx={{
        backgroundColor: KIPU_HEADER_BG,
        color: 'common.white',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          minHeight: { xs: 48, sm: 56 },
          px: { xs: 1, sm: 2 },
          gap: 0.5,
        }}
      >
        {/* Left: app menu, logo, add person */}
        <IconButton
          size="small"
          color="inherit"
          aria-label="Open app menu"
          onClick={onMenu}
          sx={{ mr: 0.5 }}
        >
          <AppsIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: '1.125rem',
            mr: 1.5,
          }}
        >
          {logoText}
        </Typography>
        <IconButton
          size="small"
          color="inherit"
          aria-label="Add person / contact"
          onClick={onAddPerson}
        >
          <PersonAddIcon fontSize="small" />
        </IconButton>

        {/* Nav icons (center-left) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 2 }}>
          <IconButton size="small" color="inherit" aria-label="Settings" onClick={onSettings}>
            <SettingsIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit" aria-label="Messages" onClick={onChat}>
            <ChatIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit" aria-label="Calendar" onClick={onCalendar}>
            <CalendarMonthIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="inherit" aria-label="Quick actions" onClick={onQuickActions}>
            <BoltIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Right: search, notifications, documents, avatar */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
          <IconButton size="small" color="inherit" aria-label="Search" onClick={onSearch}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label={`${notificationCount} notifications`}
            onClick={onNotifications}
          >
            <Badge badgeContent={notificationCount} color="error" variant="standard">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton size="small" color="inherit" aria-label="Documents" onClick={onDocuments}>
            <DescriptionIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            aria-label="Profile"
            onClick={onProfile}
            sx={{ p: 0.5, ml: 0.5 }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'common.white',
                fontSize: '0.875rem',
              }}
            >
              {userInitials}
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
