'use client';

import { useState } from 'react';
import { Container, Title, Text, Box, Group, Button, SimpleGrid, SegmentedControl } from '@mantine/core';
import { IconSearch, IconAdjustments } from '@tabler/icons-react';
import { ProductCard } from '@/components';
import { travelPackages, categories } from '@/data/packages';
import styles from './page.module.css';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPackages = selectedCategory === 'all'
    ? travelPackages
    : travelPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container size="xl">
          <Box className={styles.heroContent}>
            <Text size="sm" fw={600} c="primary" mb="xs" className={styles.heroTag}>
              🎬 K-Content Travel Experience
            </Text>
            <Title order={1} className={styles.heroTitle}>
              드라마 속 그 장소,<br />
              직접 경험하세요
            </Title>
            <Text size="lg" c="dimmed" className={styles.heroSubtitle}>
              솔로지옥, 오징어게임, 흑백요리사 등<br />
              한류 콘텐츠 촬영지를 방문하는 특별한 여행
            </Text>
            <Group mt="xl">
              <Button size="lg" leftSection={<IconSearch size={18} />}>
                투어 찾기
              </Button>
              <Button size="lg" variant="light" leftSection={<IconAdjustments size={18} />}>
                맞춤 투어 상담
              </Button>
            </Group>
          </Box>
        </Container>
        <Box className={styles.heroGradient} />
      </section>

      {/* Featured Packages */}
      <section className={styles.packages}>
        <Container size="xl">
          <Group justify="space-between" align="flex-end" mb="xl">
            <Box>
              <Title order={2} className={styles.sectionTitle}>
                인기 투어 패키지
              </Title>
              <Text c="dimmed">
                가장 많이 선택하는 한류 콘텐츠 여행 상품
              </Text>
            </Box>
          </Group>

          {/* Category Filter */}
          <Box mb="xl">
            <SegmentedControl
              value={selectedCategory}
              onChange={setSelectedCategory}
              data={categories.map(cat => ({
                value: cat.id,
                label: (
                  <Group gap={6}>
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </Group>
                ),
              }))}
              size="md"
              className={styles.categoryFilter}
            />
          </Box>

          {/* Product Grid */}
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing="xl"
          >
            {filteredPackages.map((pkg) => (
              <ProductCard key={pkg.id} package_={pkg} />
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className={styles.features}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xl" className={styles.sectionTitle}>
            왜 K-SPOT Travel인가요?
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            <Box className={styles.featureCard}>
              <Text size="2rem" mb="sm">📺</Text>
              <Text fw={600} mb="xs">공식 촬영지</Text>
              <Text size="sm" c="dimmed">
                넷플릭스, K-드라마 공식 촬영지만 엄선하여 제공합니다.
              </Text>
            </Box>
            <Box className={styles.featureCard}>
              <Text size="2rem" mb="sm">🎯</Text>
              <Text fw={600} mb="xs">전문 가이드</Text>
              <Text size="sm" c="dimmed">
                콘텐츠에 대한 깊은 이해를 가진 전문 가이드가 동행합니다.
              </Text>
            </Box>
            <Box className={styles.featureCard}>
              <Text size="2rem" mb="sm">🏨</Text>
              <Text fw={600} mb="xs">프리미엄 숙박</Text>
              <Text size="sm" c="dimmed">
                작품 속 호텔과 리조트에서 특별한 숙박을 경험하세요.
              </Text>
            </Box>
            <Box className={styles.featureCard}>
              <Text size="2rem" mb="sm">📷</Text>
              <Text fw={600} mb="xs">포토존 투어</Text>
              <Text size="sm" c="dimmed">
                명장면 재현 포토존에서 인생샷을 남기세요.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
