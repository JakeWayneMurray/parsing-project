interface SecondaryButtonProps {
    onClick: () => void;
    label: string;
}

export default function SecondaryButton({ onClick, label }: SecondaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className="btn btn-outline"
        >
            {label}
        </button>
    );
}
