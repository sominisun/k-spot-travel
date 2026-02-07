'use client';

import { Container, Title, Text, Box, Group, Button, Stack, Badge, Accordion, List, Divider, Grid, Paper } from '@mantine/core';
import { IconStar, IconMapPin, IconClock, IconCheck, IconX, IconCalendar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import type { TravelPackage } from '@/data/packages';
import styles from './PackageDetail.module.css';

interface PackageDetailClientProps {
    package_: TravelPackage;
}

const categoryColors: Record<string, string> = {
    netflix: '#e50914',
    kdrama: '#9c36b5',
    food: '#ff6b4a',
    kpop: '#ff87ab',
};

const categoryLabels: Record<string, string> = {
    netflix: 'Netflix',
    kdrama: 'K-Drama',
    food: '미식',
    kpop: 'K-Pop',
};

export default function PackageDetailClient({ package_ }: PackageDetailClientProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    return (
        <Box className={styles.page}>
            {/* Hero Image */}
            <Box className={styles.heroImage}>
                <Image
                    src={package_.imageUrl}
                    alt={package_.title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <Box className={styles.heroOverlay} />
                <Container size="xl" className={styles.heroContent}>
                    <Badge
                        size="lg"
                        style={{ backgroundColor: categoryColors[package_.category] }}
                    >
                        {categoryLabels[package_.category]}
                    </Badge>
                    <Title order={1} c="white" mt="md" className={styles.heroTitle}>
                        {package_.title}
                    </Title>
                    <Text size="lg" c="gray.3" mt="xs">
                        {package_.subtitle}
                    </Text>
                    <Group mt="md">
                        <Group gap={4}>
                            <IconMapPin size={18} color="white" />
                            <Text c="white">{package_.location}</Text>
                        </Group>
                        <Group gap={4}>
                            <IconClock size={18} color="white" />
                            <Text c="white">{package_.duration}</Text>
                        </Group>
                        <Group gap={4}>
                            <IconStar size={18} fill="#fcc419" color="#fcc419" />
                            <Text c="white" fw={600}>{package_.rating}</Text>
                            <Text c="gray.4">({package_.reviewCount} 리뷰)</Text>
                        </Group>
                    </Group>
                </Container>
            </Box>

            <Container size="xl" py="xl">
                <Grid gutter="xl">
                    {/* Main Content */}
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        {/* Description */}
                        <Paper p="xl" radius="lg" withBorder mb="xl">
                            <Title order={3} mb="md">투어 소개</Title>
                            <Text c="dimmed" lh={1.8}>
                                {package_.description}
                            </Text>

                            <Title order={4} mt="xl" mb="md">하이라이트</Title>
                            <List
                                spacing="sm"
                                icon={<IconCheck size={16} color="var(--primary)" />}
                            >
                                {package_.highlights.map((highlight, idx) => (
                                    <List.Item key={idx}>{highlight}</List.Item>
                                ))}
                            </List>
                        </Paper>

                        {/* Itinerary */}
                        <Paper p="xl" radius="lg" withBorder mb="xl">
                            <Title order={3} mb="md">
                                <IconCalendar size={24} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                                일정표
                            </Title>
                            <Accordion variant="separated" radius="md">
                                {package_.itinerary.map((day) => (
                                    <Accordion.Item key={day.day} value={`day-${day.day}`}>
                                        <Accordion.Control>
                                            <Group>
                                                <Badge variant="light" size="lg">Day {day.day}</Badge>
                                                <Text fw={600}>{day.title}</Text>
                                            </Group>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Text c="dimmed" mb="md">{day.description}</Text>
                                            <Stack gap="md">
                                                {day.spots.map((spot, idx) => (
                                                    <Box key={idx} className={styles.spotCard}>
                                                        <Text fw={600}>{spot.name}</Text>
                                                        <Text size="xs" c="dimmed">{spot.address}</Text>
                                                        <Text size="sm" mt="xs">{spot.description}</Text>
                                                        {spot.duration && (
                                                            <Badge variant="light" size="sm" mt="xs">
                                                                소요시간: {spot.duration}
                                                            </Badge>
                                                        )}
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Paper>

                        {/* Includes/Excludes */}
                        <Paper p="xl" radius="lg" withBorder>
                            <Grid>
                                <Grid.Col span={6}>
                                    <Title order={4} mb="md" c="green">포함 사항</Title>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        icon={<IconCheck size={14} color="var(--success)" />}
                                    >
                                        {package_.includes.map((item, idx) => (
                                            <List.Item key={idx}>{item}</List.Item>
                                        ))}
                                    </List>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Title order={4} mb="md" c="red">불포함 사항</Title>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        icon={<IconX size={14} color="var(--coral)" />}
                                    >
                                        {package_.excludes.map((item, idx) => (
                                            <List.Item key={idx}>{item}</List.Item>
                                        ))}
                                    </List>
                                </Grid.Col>
                            </Grid>
                        </Paper>
                    </Grid.Col>

                    {/* Sidebar - Booking Card */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Paper p="xl" radius="lg" withBorder className={styles.bookingCard}>
                            <Stack gap="md">
                                <Box>
                                    {package_.originalPrice && (
                                        <Text size="sm" td="line-through" c="dimmed">
                                            ₩{formatPrice(package_.originalPrice)}
                                        </Text>
                                    )}
                                    <Group align="baseline" gap="xs">
                                        <Text size="2rem" fw={700} c="primary">
                                            ₩{formatPrice(package_.price)}
                                        </Text>
                                        <Text size="sm" c="dimmed">/ 1인</Text>
                                    </Group>
                                </Box>

                                <Divider />

                                <Box>
                                    <Text size="sm" fw={600} mb="xs">콘텐츠 출처</Text>
                                    <Text size="sm" c="dimmed">{package_.contentSource}</Text>
                                </Box>

                                <Box>
                                    <Text size="sm" fw={600} mb="xs">여행 기간</Text>
                                    <Text size="sm" c="dimmed">{package_.duration}</Text>
                                </Box>

                                <Box>
                                    <Text size="sm" fw={600} mb="xs">여행 지역</Text>
                                    <Text size="sm" c="dimmed">{package_.location}</Text>
                                </Box>

                                <Divider />

                                <Button
                                    component={Link}
                                    href={`/checkout/${package_.slug}`}
                                    size="lg"
                                    fullWidth
                                >
                                    예약하기
                                </Button>

                                <Text size="xs" c="dimmed" ta="center">
                                    지금 예약 시 결제 전까지 무료 취소 가능
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
