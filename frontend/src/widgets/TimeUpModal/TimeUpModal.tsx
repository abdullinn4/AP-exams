interface TimeUpModalProps {
    isOpen: boolean
}

export const TimeUpModal = ({ isOpen }: TimeUpModalProps) => {
    if (!isOpen) return null

    return (
        <div className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper">
            <div className="card overflow-visible" style={{ textAlign: 'center', padding: '48px' }}>
                <h3 className="display-6 mg-bottom-16px">Time's Up!</h3>
                <p className="text-neutral-600">Your test has been submitted automatically.</p>
            </div>
        </div>
    )
}