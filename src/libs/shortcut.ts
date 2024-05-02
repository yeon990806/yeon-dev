type shortcutType = {
  id: string;
  name: string;
  shortcut: string[],
  keywords: string,
  perform: VoidFunction
}

export const SHORTCUT: shortcutType[] = [
  {
    id: 'main',
    name: 'Main',
    shortcut: ['m'],
    keywords: 'main',
    perform: () => (window.location.pathname = '')
  },
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'blog',
    perform: () => (window.location.pathname = 'blog')
  },
  {
    id: 'snippet',
    name: 'Snippet',
    shortcut: ['s'],
    keywords: 'snippet',
    perform: () => (window.location.pathname = 'snippet')
  },
  {
    id: 'diary',
    name: 'Diary',
    shortcut: ['d'],
    keywords: 'diary',
    perform: () => (window.location.pathname = 'diary')
  },
]