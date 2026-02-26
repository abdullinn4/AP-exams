interface ConfirmExitModalProps {
    isOpen: boolean
    onConfirm: () => void
    onCancel: () => void
}

export const ConfirmExitModal = ({ isOpen, onConfirm, onCancel }: ConfirmExitModalProps) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="display-5">Leave Test?</h3>
                </div>
                <div className="modal-body">
                    <p>Your progress will be saved, but the timer will continue running. Are you sure you want to leave?</p>
                </div>
                <div className="modal-footer">
                    <button
                        onClick={onCancel}
                        className="secondary-button w-inline-block"
                    >
                        <div className="text-block">Stay</div>
                    </button>
                    <button
                        onClick={onConfirm}
                        className="button-primary w-inline-block"
                    >
                        <div className="text-block">Leave</div>
                    </button>
                </div>
            </div>
        </div>
    )
}