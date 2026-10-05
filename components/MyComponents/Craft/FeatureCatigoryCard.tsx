import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureCatigoryCardProps {
    id: number;
    imgsrc: string;
    title: string;
    category: string;
    link: URL | string;
}

const FeatureCatigoryCard = ({ id, imgsrc, title, category, link }: FeatureCatigoryCardProps) => {
    const href = typeof link === 'string' ? link : link ? link.toString() : '/shop';

    return (
        <>
            <Link href={href} className="w-full flex flex-col gap-4 group" key={id}>
                <div className="w-full overflow-hidden">
                    <Image src={imgsrc} alt="FeatureCatigoryCard" width={800} height={450} className="w-full h-auto max-h-[400px] object-cover object-center hover:scale-103 transition-transform ease-in-out duration-300 min-h-[350px]" loading="lazy" />
                </div>
                <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-2 text-start">
                        <h3 className="text-xl font-medium text-primary">{title}</h3>
                        <h4 className="text-xs font-medium text-muted-foreground uppercase">{category}</h4>
                    </div>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out text-muted-foreground group-hover:text-primary" />
                </div>
            </Link>
        </>
    )
}

export default FeatureCatigoryCard