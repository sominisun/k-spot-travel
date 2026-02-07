'use client';

import { Badge, Box, Group, Text, Stack } from '@mantine/core';
import { IconStar, IconMapPin, IconClock } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import type { TravelPackage } from '@/data/packages';
import styles from './ProductCard.module.css';

interface ProductCardProps {
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

export function ProductCard({ package_ }: ProductCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    return (
        <Link href={`/packages/${package_.slug}`} className={styles.card}>
            {/* Image */}
            <Box className={styles.imageWrapper}>
                <Image
                    src={package_.imageUrl}
                    alt={package_.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
                <Badge
                    className={styles.badge}
                    style={{ backgroundColor: categoryColors[package_.category] }}
                >
                    {categoryLabels[package_.category]}
                </Badge>
                {package_.originalPrice && (
                    <Box className={styles.discount}>
                        {Math.round((1 - package_.price / package_.originalPrice) * 100)}% OFF
                    </Box>
                )}
            </Box>

            {/* Content */}
            <Box className={styles.content}>
                <Text size="xs" c="dimmed" className={styles.source}>
                    {package_.contentSource}
                </Text>

                <Text fw={600} size="lg" className={styles.title} lineClamp={2}>
                    {package_.title}
                </Text>

                <Text size="sm" c="dimmed" className={styles.subtitle} lineClamp={1}>
                    {package_.subtitle}
                </Text>

                <Group gap="xs" mt="sm" className={styles.meta}>
                    <Group gap={4}>
                        <IconMapPin size={14} color="var(--text-muted)" />
                        <Text size="xs" c="dimmed">{package_.location}</Text>
                    </Group>
                    <Group gap={4}>
                        <IconClock size={14} color="var(--text-muted)" />
                        <Text size="xs" c="dimmed">{package_.duration}</Text>
                    </Group>
                </Group>

                <Group justify="space-between" align="flex-end" mt="md">
                    <Group gap={4} align="center">
                        <IconStar size={14} fill="#fcc419" color="#fcc419" />
                        <Text size="sm" fw={600}>{package_.rating}</Text>
                        <Text size="xs" c="dimmed">({package_.reviewCount})</Text>
                    </Group>

                    <Stack gap={0} align="flex-end">
                        {package_.originalPrice && (
                            <Text size="xs" td="line-through" c="dimmed">
                                ₩{formatPrice(package_.originalPrice)}
                            </Text>
                        )}
                        <Text size="lg" fw={700} c="primary.6">
                            ₩{formatPrice(package_.price)}
                        </Text>
                    </Stack>
                </Group>
            </Box>
        </Link>
    );
}
