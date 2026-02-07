interface ConfirmSubmitModalProps {
    isOpen: boolean
    onConfirm: () => void
    onCancel: () => void
    isSubmitting?: boolean
}

export const ConfirmSubmitModal = ({isOpen, onConfirm, onCancel, isSubmitting}: ConfirmSubmitModalProps) => {
    if (!isOpen) return null

    return (
        <div
            className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
            onClick={onCancel}
        >
            <div className="card overflow-visible" onClick={(e) => e.stopPropagation()}>
                <div className="w-commerce-commercecartheader cart-header">
                    <h4>Submit Test?</h4>
                    <a
                        className="w-commerce-commercecartcloselink close-button w-inline-block"
                        role="button"
                        aria-label="Close modal"
                        onClick={onCancel}
                        style={{cursor: 'pointer'}}
                    >
                        <div className="icon-font-squared">&#x2715;</div>
                    </a>
                </div>

                <div className="w-commerce-commercecartformwrapper cart-form-wrapper">
                    <div className="pd-sides-24px pd-top-24px"
                         style={{
                             paddingBottom: '24px'
                         }}>
                        <p className="text-neutral-600 mg-bottom-32px">
                            Are you sure you want to submit the test? You cannot change your answers after submission.
                        </p>

                        <div className="buttons-row">
                            <button className="secondary-button w-button" onClick={onCancel}>
                                Cancel
                            </button>
                            <button className="button-primary w-button" onClick={onConfirm} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Test'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}