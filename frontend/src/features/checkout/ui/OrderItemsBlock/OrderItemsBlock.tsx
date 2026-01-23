import type {TariffDetails} from "@/entities/tariff/tariff.ts";
import type {CourseDetails} from "@/entities/course/course.ts";

interface OrderItemsBlockProps {
    tariff: TariffDetails
    course: CourseDetails
}

export const    OrderItemsBlock = ({ tariff, course }: OrderItemsBlockProps) => {
    return (
        <div className="w-commerce-commercecheckoutorderitemswrapper card checkout-block last">
            <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                <h2 className="display-6">Items in Order</h2>
            </div>
            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                <div className="order-item">
                    <div className="order-item-details">
                        <h2 className="display-6 mg-bottom-8px">{course.title}</h2>
                        <p className="text-200 text-neutral-600 mg-bottom-8px">
                            {tariff.title} - {tariff.tier}
                        </p>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}