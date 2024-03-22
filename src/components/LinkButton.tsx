import React from 'react';
import Link from 'next/link';
import { icons } from 'lucide-react';

interface LinkInterfaceProps {
    url: string,
    children?: string,
    className?: string,
    underline?: boolean,
    color: string,
    iconName?: string
    target?: string
    download?: boolean
}

export const LinkButton: React.FC<LinkInterfaceProps> = ({ url, children, className, color, iconName, target, download, underline }) => {
    const Icon = icons[iconName];

    return (
        <span className={`${className} inline ml-1` || ''}>
            <Link href={`${url}`} className={`text-${color} ${underline ? true : false} link dark:hover:brightness-200 hover:brightness-150 transition-colors duration-300`}
                target={`_blank` ? target : null}
                rel='noopener'
                download={download}

            >
                {children}
                {Icon && <Icon className={`h-[10px] xl:h-[14px] text-${color} link-icon`} />}
            </Link>
        </span>
    );
};

export default LinkButton