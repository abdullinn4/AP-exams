export const CATALOG_HEADER = {
    title: 'What will you',
    titleHighlight: 'learn?',
    description: ''
} as const

export const CATALOG_COURSES = {
    items: [
        {
            wId: '80e48ebd-4a1c-c1f7-f1f0-4277b3587231',
        },
        {
            wId: 'dc60159d-6477-3c54-ee85-481e30b71d2f',
        },
        {
            wId: '5223eff5-08d3-37fe-8a4e-9bf294dbe5bd',
        },
        {
            wId: '76cb1ad9-2aeb-3cb3-9506-0d3a36d2c9e9',
        },
        {
            wId: 'cee60d9e-f5d8-9d02-9645-3c7d7bd462d0',
        }
    ]
} as const

export const COURSE_SLUG_TO_TITLE: Record<string, string> = {
    'ap-calc-ab-multiverse-of-calculus': 'AP Calculus AB',
    'ap-calc-bc-67-problems': 'AP Calculus BC',
    'ap-cs-a-escape-the-matrix': 'AP Computer Science A',
    'ap-cs-principles-breaking-code': 'AP CS Principles',
    // добавьте остальные курсы
}