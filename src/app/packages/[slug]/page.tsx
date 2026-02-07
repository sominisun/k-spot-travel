import { notFound } from 'next/navigation';
import { travelPackages } from '@/data/packages';
import PackageDetailClient from './PackageDetailClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return travelPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const pkg = travelPackages.find((p) => p.slug === slug);

    if (!pkg) {
        return {
            title: '패키지를 찾을 수 없습니다',
        };
    }

    return {
        title: `${pkg.title} | K-SPOT Travel`,
        description: pkg.description,
    };
}

export default async function PackageDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const pkg = travelPackages.find((p) => p.slug === slug);

    if (!pkg) {
        notFound();
    }

    return <PackageDetailClient package_={pkg} />;
}
