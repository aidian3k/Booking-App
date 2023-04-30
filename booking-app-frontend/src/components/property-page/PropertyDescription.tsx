import React, {FC} from "react";

export const PropertyDescription: FC = () => {
    return (
        <>
            <div className={'flex flex-col gap-2 mt-2'}>
                <p className={'font-serif text-lg font-semibold'}>Place description</p>
                <p className={'font-serif'}>The house is a charming two-story brick home with a peaked roof and dormer windows. It has a neatly manicured front lawn with a winding stone path leading up to the front porch. The porch is spacious and features two white rocking chairs, perfect for enjoying the fresh air on a warm summer day.
                    Upon entering the house, you are greeted by a cozy living room with plush carpeting and a large bay window that lets in plenty of natural light. To the left is a spacious dining area with a beautiful wooden table and six matching chairs. The kitchen is adjacent to the dining area and features modern stainless steel appliances and sleek granite countertops.</p>
            </div>

            <div className={'flex flex-col gap-2 mt-2'}>
                <p className={'font-serif text-lg font-semibold'}>Extra information</p>
                <p className={'font-serif'}>The house has a total of 3 bedrooms and 2.5 bathrooms, including the master en-suite.
                    The flooring on the main level is a combination of plush carpeting and hardwood.
                </p>
            </div>
        </>
    )
}