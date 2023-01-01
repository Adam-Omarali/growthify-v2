import { Navbar, Group, Code, ScrollArea, createStyles, Burger, Text } from '@mantine/core';
import { UserButton } from './userButton';
import { LinksGroup } from './navbarLinksGroup';
import Logo from "../../styles/LogoAsset 3@4x.png";
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { NavStateProps } from './header';
import { sidebarOptions } from '../(data)/menu-options';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    position: 'fixed',
    left: "-100%",
    transition: "1700ms",
    height: "calc(100vh - 56px)"
  },

  navbarActive: {
    position: "fixed",
    left: "0",
    transition: "600ms",
    height: "calc(100vh - 56px)"
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "20px"
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested(props: NavStateProps) {
  const { classes } = useStyles();
  const {data: session} = useSession();
  const links = sidebarOptions().map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <div className='h-full flex alig'>
      <Group position="apart" className='pl-4'>
        <Burger opened={props.navOpen} onClick={props.setNavOpen} size="sm" />
        <Image src={Logo} width={28} height={28} alt="logo"/>
      </Group>
      <Navbar height={800} width={{ sm: 300 }} p="md" className={props.navOpen ? classes.navbarActive : classes.navbar}>

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <UserButton
            image={session.user.image}
            name={session.user.name}
            email={session.user.email}
          />
        </Navbar.Section>
      </Navbar>
    </div>
  );
}