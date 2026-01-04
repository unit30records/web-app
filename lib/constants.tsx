export interface Artist {
  id: string;
  name: string;
  abbreviation: string;
  bio: string;
  description: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    appleMusic?: string;
    soundcloud?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface Release {
  id: string;
  title: string;
  abbreviation: string;
  artist: string;
  type: 'EP' | 'Single' | 'Album';
  year: number;
}

export const ARTISTS: Artist[] = [
  {
    id: 'unit30',
    name: 'UNIT30',
    abbreviation: 'U3',
    bio: 'Blending atmospheric production with hard-hitting rhythms, UNIT30 delivers a sound that\'s both introspective and commanding. A core artist of the 30 Records roster.',
    description: 'UNIT30 crafts cinematic soundscapes that bridge the gap between ambient textures and punchy beats. His work explores themes of isolation, connection, and technological anxiety through carefully layered production.',
    socialLinks: {
      spotify: 'https://open.spotify.com/artist/1N2d0k3Af7is2JVUJX6654?si=LhxrzBTUTXSZaTwn35XoKw&utm_medium=share&utm_source=linktree',
      instagram: 'https://www.instagram.com/unit30records',
      soundcloud: 'https://www.soundcloud.com/unit30',
      youtube: 'https://www.youtube.com/@unit30records',
    },
  },
  {
    id: 'naraiyan',
    name: 'Naraiyan',
    abbreviation: 'NR',
    bio: 'With soulful melodies and lyrical depth, Naraiyan brings a unique perspective to contemporary R&B. Their sound is the bridge between classic soul and modern production.',
    description: 'Naraiyan\'s artistry combines intricate vocal layering with sophisticated chord progressions, creating a rich tapestry of sound. Drawing from soul, jazz, and contemporary R&B, their work resonates with emotional authenticity.',
    socialLinks: {
      spotify: 'https://open.spotify.com/artist/052umPGYxvid13SBhXaWNz?si=bQBlwpFNQSKKr2rQpYVzpA&utm_medium=share&utm_source=linktree',
      instagram: 'https://instagram.com/naraiyanmann',
      appleMusic: 'https://music.apple.com/ca/artist/naraiyan/1742995164',
      tiktok: 'https://tiktok.com/@naraiyanmann',
    },
  },
];

export const RELEASES: Release[] = [
  {
    id: 'midnight-drive',
    title: 'Midnight Drive',
    abbreviation: 'MD',
    artist: 'UNIT30',
    type: 'EP',
    year: 2025,
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    abbreviation: 'GH',
    artist: 'Naraiyan',
    type: 'Single',
    year: 2025,
  },
  {
    id: 'frequency',
    title: 'Frequency',
    abbreviation: 'FQ',
    artist: 'UNIT30',
    type: 'Album',
    year: 2024,
  },
  {
    id: 'echo-chamber',
    title: 'Echo Chamber',
    abbreviation: 'EC',
    artist: 'UNIT30',
    type: 'Single',
    year: 2024,
  },
  {
    id: 'velvet-nights',
    title: 'Velvet Nights',
    abbreviation: 'VN',
    artist: 'Naraiyan',
    type: 'Album',
    year: 2024,
  },
  {
    id: 'neon-visions',
    title: 'Neon Visions',
    abbreviation: 'NV',
    artist: 'UNIT30',
    type: 'Single',
    year: 2024,
  },
];
