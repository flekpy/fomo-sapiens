export interface IMenu {
  href: string
  id: number | string
  title: string
}

export const routing: IMenu[] = [
  {
    href: '/projects',
    title: 'проекты',
    id: 1,
  },
]
