import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import React from "react";

export default function Header() {

    const pages = ['Home', 'projects', 'messages'];

        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
        };

    const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        return (
            <AppBar position="static" sx={{
                backgroundColor: 'var(--footerHeaderBackground);',
                borderStyle: 'inset',
                borderColor: '#FFD700',
                color: 'var(--HeaderAndFootercolor);'
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1, color: '#FFD700'}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/#/home"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FFD700',
                                textDecoration: 'none',
                            }}
                        >
                            SETT
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none', color: '#FFD700'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page ) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} >
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FFD700',
                                textDecoration: 'none',
                            }}
                        >
                            SETT
                        </Typography>
                        <Box sx={{flexGrow: 1,display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                               <a href={'/#/'+page.toLowerCase()} key={page}> <Button
                                   onClick={handleCloseNavMenu}
                                   sx={{
                                       my: 2,
                                       color: 'var(--HeaderAndFootercolor);',
                                       display: 'block',
                                       fontSize: 'medium'
                                   }}
                                >
                                    {page}
                                </Button></a>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        )
}
