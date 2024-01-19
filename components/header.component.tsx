'use client';

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        'Profile',
        'Dashboard',
        'Activity',
        'Analytics',
        'System',
        'Deployments',
        'My Settings',
        'Team Settings',
        'Help & Feedback',
        'Log Out',
    ];
    return (
        <header className="h-16 w-full">
            <Navbar
                className="bg-transparent "
                isBordered
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Logo</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Link className="text-[#f6f6f6]" href="#q">
                            Контакты
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            О нас
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Зарегистрироваться</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="flat"
                        >
                            Войти
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="bg-[#111]">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="w-full" href="#" size="lg">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    );
};

export default Header;
