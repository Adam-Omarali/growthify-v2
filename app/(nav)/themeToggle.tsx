import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import styles from "../../styles/Layout.module.css"

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  return (
    <Group my="xl" className='m-0'>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme:any) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? null : null,
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
        className={styles.toggle}

      >
        {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}