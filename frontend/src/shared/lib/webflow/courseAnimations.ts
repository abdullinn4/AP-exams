const COURSE_CARD_ANIMATION_IDS = [
    '80e48ebd-4a1c-c1f7-f1f0-4277b3587231',
    'dc60159d-6477-3c54-ee85-481e30b71d2f',
    '5223eff5-08d3-37fe-8a4e-9bf294dbe5bd',
    '76cb1ad9-2aeb-3cb3-9506-0d3a36d2c9e9',
    'cee60d9e-f5d8-9d02-9645-3c7d7bd462d0',
]

const COURSE_CARD_CLASSES = [
    '',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-middle',
]

export const getCourseCardAnimationProps = (index: number) => ({
    wId: COURSE_CARD_ANIMATION_IDS[index % COURSE_CARD_ANIMATION_IDS.length],
    className: COURSE_CARD_CLASSES[index % COURSE_CARD_CLASSES.length],
})