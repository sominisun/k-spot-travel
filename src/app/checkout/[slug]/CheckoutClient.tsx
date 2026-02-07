'use client';

import { useState } from 'react';
import { Container, Title, Text, Box, Group, Button, Stack, Paper, Grid, TextInput, NumberInput, Divider, Alert, Stepper } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconAlertCircle, IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { TravelPackage } from '@/data/packages';
import styles from './Checkout.module.css';

interface CheckoutClientProps {
    package_: TravelPackage;
}

interface OrderForm {
    customerName: string;
    email: string;
    phone: string;
    travelers: number;
    travelDate: Date | null;
    requests: string;
}

export default function CheckoutClient({ package_ }: CheckoutClientProps) {
    const router = useRouter();
    const [active, setActive] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<OrderForm>({
        initialValues: {
            customerName: '',
            email: '',
            phone: '',
            travelers: 2,
            travelDate: null,
            requests: '',
        },
        validate: {
            customerName: (value) => (value.length < 2 ? '이름을 입력해주세요' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : '올바른 이메일을 입력해주세요'),
            phone: (value) => (value.length < 10 ? '연락처를 입력해주세요' : null),
            travelers: (value) => (value < 1 ? '최소 1명 이상이어야 합니다' : null),
            travelDate: (value) => (!value ? '여행 날짜를 선택해주세요' : null),
        },
    });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const totalPrice = package_.price * form.values.travelers;

    const handleSubmit = async (values: OrderForm) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    packageId: package_.id,
                    packageName: package_.title,
                    packageSlug: package_.slug,
                    ...values,
                    totalPrice,
                }),
            });

            if (!response.ok) {
                throw new Error('주문 생성에 실패했습니다');
            }

            const data = await response.json();

            notifications.show({
                title: '예약 완료!',
                message: '예약이 성공적으로 완료되었습니다. 확인 이메일을 보내드렸습니다.',
                color: 'green',
                icon: <IconCheck size={16} />,
            });

            setActive(2);
        } catch (error) {
            notifications.show({
                title: '오류 발생',
                message: '예약 처리 중 문제가 발생했습니다. 다시 시도해주세요.',
                color: 'red',
                icon: <IconAlertCircle size={16} />,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (active === 0) {
            const validation = form.validate();
            if (validation.hasErrors) return;
        }
        setActive((current) => (current < 2 ? current + 1 : current));
    };

    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <Box className={styles.page}>
            <Container size="lg" py="xl">
                {/* Back Button */}
                <Button
                    component={Link}
                    href={`/packages/${package_.slug}`}
                    variant="subtle"
                    leftSection={<IconArrowLeft size={16} />}
                    mb="xl"
                >
                    패키지로 돌아가기
                </Button>

                <Title order={1} mb="xl">예약하기</Title>

                <Grid gutter="xl">
                    {/* Main Content */}
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Paper p="xl" radius="lg" withBorder>
                            <Stepper active={active} onStepClick={setActive} mb="xl">
                                <Stepper.Step label="여행자 정보" description="기본 정보 입력">
                                    <Stack gap="md" mt="xl">
                                        <TextInput
                                            label="예약자 이름"
                                            placeholder="홍길동"
                                            required
                                            {...form.getInputProps('customerName')}
                                        />
                                        <TextInput
                                            label="이메일"
                                            placeholder="email@example.com"
                                            required
                                            {...form.getInputProps('email')}
                                        />
                                        <TextInput
                                            label="연락처"
                                            placeholder="010-1234-5678"
                                            required
                                            {...form.getInputProps('phone')}
                                        />
                                        <NumberInput
                                            label="여행 인원"
                                            min={1}
                                            max={20}
                                            required
                                            {...form.getInputProps('travelers')}
                                        />
                                        <DatePickerInput
                                            label="여행 출발일"
                                            placeholder="날짜를 선택하세요"
                                            required
                                            minDate={new Date()}
                                            {...form.getInputProps('travelDate')}
                                        />
                                        <TextInput
                                            label="요청 사항 (선택)"
                                            placeholder="특별한 요청사항이 있으면 입력해주세요"
                                            {...form.getInputProps('requests')}
                                        />
                                    </Stack>
                                </Stepper.Step>

                                <Stepper.Step label="결제 정보" description="결제 진행">
                                    <Stack gap="md" mt="xl">
                                        <Alert icon={<IconAlertCircle size={16} />} color="blue">
                                            데모 버전입니다. 실제 결제는 진행되지 않습니다.
                                        </Alert>
                                        <Paper p="md" withBorder>
                                            <Stack gap="sm">
                                                <Group justify="space-between">
                                                    <Text>패키지 가격</Text>
                                                    <Text>₩{formatPrice(package_.price)} × {form.values.travelers}명</Text>
                                                </Group>
                                                <Divider />
                                                <Group justify="space-between">
                                                    <Text fw={700}>총 결제 금액</Text>
                                                    <Text size="xl" fw={700} c="primary">₩{formatPrice(totalPrice)}</Text>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Stack>
                                </Stepper.Step>

                                <Stepper.Completed>
                                    <Stack align="center" py="xl">
                                        <Box className={styles.successIcon}>
                                            <IconCheck size={48} color="white" />
                                        </Box>
                                        <Title order={2}>예약이 완료되었습니다!</Title>
                                        <Text c="dimmed" ta="center">
                                            예약 확인 이메일을 {form.values.email}로 보내드렸습니다.<br />
                                            담당자가 영업일 기준 1-2일 내에 연락드릴 예정입니다.
                                        </Text>
                                        <Button component={Link} href="/" mt="xl">
                                            홈으로 돌아가기
                                        </Button>
                                    </Stack>
                                </Stepper.Completed>
                            </Stepper>

                            {active < 2 && (
                                <Group justify="space-between" mt="xl">
                                    <Button variant="default" onClick={prevStep} disabled={active === 0}>
                                        이전
                                    </Button>
                                    {active === 1 ? (
                                        <Button onClick={() => handleSubmit(form.values)} loading={isSubmitting}>
                                            결제 완료
                                        </Button>
                                    ) : (
                                        <Button onClick={nextStep}>
                                            다음
                                        </Button>
                                    )}
                                </Group>
                            )}
                        </Paper>
                    </Grid.Col>

                    {/* Sidebar - Order Summary */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Paper p="xl" radius="lg" withBorder className={styles.summaryCard}>
                            <Title order={4} mb="md">주문 요약</Title>
                            <Text fw={600} size="lg" mb="xs">{package_.title}</Text>
                            <Text size="sm" c="dimmed" mb="md">{package_.subtitle}</Text>

                            <Divider my="md" />

                            <Stack gap="xs">
                                <Group justify="space-between">
                                    <Text size="sm" c="dimmed">기간</Text>
                                    <Text size="sm">{package_.duration}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text size="sm" c="dimmed">지역</Text>
                                    <Text size="sm">{package_.location}</Text>
                                </Group>
                                <Group justify="space-between">
                                    <Text size="sm" c="dimmed">인원</Text>
                                    <Text size="sm">{form.values.travelers}명</Text>
                                </Group>
                                {form.values.travelDate && (
                                    <Group justify="space-between">
                                        <Text size="sm" c="dimmed">출발일</Text>
                                        <Text size="sm">
                                            {form.values.travelDate.toLocaleDateString('ko-KR')}
                                        </Text>
                                    </Group>
                                )}
                            </Stack>

                            <Divider my="md" />

                            <Group justify="space-between">
                                <Text fw={600}>총 금액</Text>
                                <Text size="xl" fw={700} c="primary">
                                    ₩{formatPrice(totalPrice)}
                                </Text>
                            </Group>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
