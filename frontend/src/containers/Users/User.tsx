import Image from 'next/image';

import { fetchData } from '@/utils';
import { getAccessToken } from '@/utils/getAccesstoken';

import { UserAvatar } from './UserAvatar';

import type { PageProps } from '@/types/common';

type UserData = {
  id: number;
  avatar: string | null;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_email_verified: boolean;
  is_onboarded: boolean;
  mobile_number: number | null;
  user_timezone: string;
  username: string;
  is_password_autoset: boolean;
  gender: string;
  bio: string | null;
  about: string | null;
  website: string | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  instagram: string | null;
  cover_image: string | null;
};

const UserContainer = async ({
  params: { userId },
}: PageProps<never, { userId: string }>) => {
  const accessToken = await getAccessToken();
  console.log('<<<<<<<<', accessToken);

  const { data: userData } = await fetchData<UserData>('/users/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return (
    <section className='container py-10'>
      <div className='relative h-64 w-full rounded-2xl'>
        <Image
          src={userData?.cover_image || 'https://picsum.photos/1300/250'}
          fill
          alt='Profile Cover'
          objectFit='cover'
          className='rounded-2xl'
        />
        <UserAvatar
          avatarUrl={userData?.avatar || 'https://github.com/shadcn.png'}
        />
      </div>
      <div className='mt-36 flex flex-col'>
        <h3 className='text-3xl font-bold'>
          {userData?.first_name} {userData?.last_name}
        </h3>
        <h3>@{userData?.username}</h3>
        {/* Uncomment when API cahnges are done */}
        <span className='text-sm'>{userData?.bio}</span>
      </div>
    </section>
  );
};

export default UserContainer;
