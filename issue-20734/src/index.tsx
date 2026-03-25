import { Fragment, type ReactNode } from 'react';

type Props = {
    fallback?: ReactNode;
};

export function DefaultWithNamedEmptyFragment({
    fallback = <Fragment />,
}: Props) {
    return <div>{fallback}</div>;
}

export function DefaultWithShortEmptyFragment({
    fallback = <></>,
}: Props) {
    return <div>{fallback}</div>;
}

export function EmptyFragmentInTernary({
    show,
}: {
    show: boolean;
}) {
    return show ? <div>content</div> : <></>;
}

export function AllowedExpressionChild({
    text,
}: {
    text: string;
}) {
    return <section>{<>{text}</>}</section>;
}

export function FlaggedWrapper() {
    return (
        <div>
            <>
                <span>flagged</span>
            </>
        </div>
    );
}
