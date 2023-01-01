import { createStyles, Header, Autocomplete, Group, Burger } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import Image from 'next/image';
import Logo from '../../styles/LogoAsset 3@4x.png';
import { NavbarNested } from './sidebar';
import { ThemeToggle } from './themeToggle';
import { useSession } from 'next-auth/react';
import { Dispatch, SetStateAction } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    // paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    position: "fixed"
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

export interface NavStateProps{
  navOpen: boolean,
  setNavOpen: () => void
}

export function HeaderSearch(props: NavStateProps) {
  const { classes } = useStyles();
  const session = useSession();

  if(session.status != "loading"){
    return (
      <Header height={56} className={classes.header} mb={120} zIndex={100}>
        <div className={classes.inner}>
          {/* <div>
            <Group className="h-full">
              <Burger opened={props.opened} onClick={props.toggle} size="sm" />
              <Image src={Logo} width={28} height={28} alt="logo"/>
            </Group>
          </div> */}
          <NavbarNested navOpen={props.navOpen} setNavOpen={props.setNavOpen}/>

          <Group className="h-full">
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
            <ThemeToggle />
          </Group>
        </div>
      </Header>
    );
  }
}