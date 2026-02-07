'use client';

import { Container, Group, Stack, Text, Box, Anchor } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container size="xl">
                <div className={styles.grid}>
                    {/* Brand */}
                    <Stack gap="md">
                        <Link href="/" className={styles.logo}>
                            <Text component="span" fw={800} size="xl" c="white">
                                K
                            </Text>
                            <Text component="span" fw={800} size="xl" c="white">
                                -SPOT
                            </Text>
                            <Text component="span" size="xs" c="gray.5" ml={4}>
                                Travel
                            </Text>
                        </Link>
                        <Text size="sm" c="gray.5" maw={280}>
                            한류 콘텐츠의 감동을 직접 체험하세요. 드라마, 영화, 예능 촬영지를 방문하는 특별한 여행.
                        </Text>
                        <Group gap="md">
                            <Anchor href="#" c="gray.5" className={styles.socialLink}>
                                <IconBrandInstagram size={20} />
                            </Anchor>
                            <Anchor href="#" c="gray.5" className={styles.socialLink}>
                                <IconBrandFacebook size={20} />
                            </Anchor>
                            <Anchor href="#" c="gray.5" className={styles.socialLink}>
                                <IconBrandYoutube size={20} />
                            </Anchor>
                        </Group>
                    </Stack>

                    {/* Links */}
                    <Stack gap="sm">
                        <Text fw={600} c="white" mb="xs">투어 패키지</Text>
                        <Anchor href="/packages/singles-inferno-incheon" c="gray.5" size="sm">솔로지옥 투어</Anchor>
                        <Anchor href="/packages/kdrama-seoul-classic" c="gray.5" size="sm">K-드라마 서울</Anchor>
                        <Anchor href="/packages/culinary-class-wars-tour" c="gray.5" size="sm">흑백요리사 미식</Anchor>
                        <Anchor href="/packages/squid-game-adventure" c="gray.5" size="sm">오징어게임 체험</Anchor>
                    </Stack>

                    <Stack gap="sm">
                        <Text fw={600} c="white" mb="xs">고객 지원</Text>
                        <Anchor href="/faq" c="gray.5" size="sm">자주 묻는 질문</Anchor>
                        <Anchor href="/contact" c="gray.5" size="sm">문의하기</Anchor>
                        <Anchor href="/refund" c="gray.5" size="sm">취소 및 환불</Anchor>
                        <Anchor href="/terms" c="gray.5" size="sm">이용약관</Anchor>
                    </Stack>

                    <Stack gap="sm">
                        <Text fw={600} c="white" mb="xs">회사 정보</Text>
                        <Text size="sm" c="gray.5">(주) 케이스팟트래블</Text>
                        <Text size="sm" c="gray.5">사업자등록번호: 123-45-67890</Text>
                        <Text size="sm" c="gray.5">관광사업등록번호: 제2024-서울-0001호</Text>
                        <Text size="sm" c="gray.5">대표: 홍길동</Text>
                    </Stack>
                </div>

                <Box className={styles.bottom}>
                    <Text size="xs" c="gray.6">
                        © 2024 K-SPOT Travel. All rights reserved.
                    </Text>
                </Box>
            </Container>
        </footer>
    );
}
