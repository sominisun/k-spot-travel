'use client';

import { Container, Group, Text, Button, Box } from '@mantine/core';
import { IconMenu2, IconSearch, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Container size="xl">
                <Group justify="space-between" align="center" h={70}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <Text component="span" fw={800} size="xl" c="primary">
                            K
                        </Text>
                        <Text component="span" fw={800} size="xl">
                            -SPOT
                        </Text>
                        <Text component="span" size="xs" c="dimmed" ml={4}>
                            Travel
                        </Text>
                    </Link>

                    {/* Navigation */}
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>
                            투어 패키지
                        </Link>
                        <Link href="/about" className={styles.navLink}>
                            K-컨텐츠 촬영지
                        </Link>
                        <Link href="/custom" className={styles.navLink}>
                            맞춤 투어
                        </Link>
                    </nav>

                    {/* Actions */}
                    <Group gap="sm">
                        <Button
                            variant="subtle"
                            color="gray"
                            size="sm"
                            leftSection={<IconSearch size={18} />}
                            className={styles.searchBtn}
                        >
                            검색
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            size="sm"
                            leftSection={<IconUser size={18} />}
                        >
                            로그인
                        </Button>
                        <Box className={styles.mobileMenu}>
                            <Button variant="subtle" color="gray" p={8}>
                                <IconMenu2 size={24} />
                            </Button>
                        </Box>
                    </Group>
                </Group>
            </Container>
        </header>
    );
}
